import { config } from "dotenv";
// ! dotenv is only imported here because jest does not support node arguments
config({
    path: ".env.test",
});
