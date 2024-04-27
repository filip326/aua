import { config } from "dotenv";
import { z } from "zod";
config();

const envSchema = z.object({
    LOG_DIR: z.string(),
    PORT: z.string(),
    FRONTEND_URL: z.string(),
});
export default envSchema.parse(process.env);
