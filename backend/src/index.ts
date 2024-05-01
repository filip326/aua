import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "https";

import env from "./env";
import getLogger from "./utils/logger";

const app = express();
const server = http.createServer(app); // make https on production
const mainLogger = getLogger("main");

(async () => {
    app.use(
        cors({
            origin: env.FRONTEND_URL,
        }),
    );
    app.use(express.json());
    app.use(cookieParser());

    // TODO: Add http endpoint handlers here

    server.listen(env.PORT, () => {
        mainLogger("INFO", `Server is running on port ${env.PORT}`);
    });
})();
