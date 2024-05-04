type Response<T = undefined> =
    | (T extends undefined
          ? {
                success: boolean;
            }
          : {
                success: true;
            } & T)
    | {
          success: false;
          error: string;
          deError: string;
      };

export default async function useFetch<TData>(
    path: string,
    method: string = "GET",
    urlParams: Record<string, string> = {},
    queryParams: Record<string, string> = {},
    body: Record<string, any> = {},
): Promise<Response<TData>> {
    try {
        for (const [key, value] of Object.entries(urlParams)) {
            path = path.replace(`:${key}`, value);
        }

        const fetchRequest = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}${path}?${new URLSearchParams(queryParams).toString()}`,
            {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            },
        );

        const data = await fetchRequest.json();

        return data;
    } catch (error) {
        return {
            success: false,
            error: "Server connection failed",
            deError: "Es konnte keine Verbindung zum Server aufgebaut werden.",
        };
    }
}
