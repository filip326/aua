
/**
 * Fake Object Notation
 */
class FakeON {
    public static parse(data: string) {

        console.log(data);
        // check if it starts with ( and ends with )
        if (!data.startsWith("(") || !data.endsWith(")")) {
            throw new Error("Invalid FakeON string");
        }

        // remove ( ) at the beginning and end of the string
        data = data.replace(/^\(/, "");
        data = data.replace(/\)$/, "");
        // escape all " in data
        data = data.replace(/"/g, "\\\"");
        // replace all ' with ", except if it is preceded by \
        data = data.replace(/(?<!\\)'/g, "\"");
        const obj = JSON.parse(data);
        return obj;
    }

    public static stringify(obj: any) {
        return `(${JSON.stringify(obj).replace(/"/g, "'")})`;
    }
}

export default FakeON;