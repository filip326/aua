import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";

import env from "./env";
import getLogger from "./utils/logger";

import beamerHandler from "./api/routes/beamer";

const app = express();
const server = http.createServer(app); // make https on production
const mainLogger = getLogger("main");

(async () => {
    app.use(
        cors({
            origin: env.FRONTEND_URL,
            methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
            optionsSuccessStatus: 204,
            allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept", "Origin"],
        }),
    );
    app.use(express.json());
    app.use(cookieParser());

    app.use(beamerHandler());

    server.listen(env.PORT, () => {
        mainLogger("INFO", `Server is running on port ${env.PORT}`);
    });
})();
