import { config } from "dotenv";
import { z } from "zod";
config();

const envSchema = z.object({
    LOG_DIR: z.string(),
    PORT: z.string(),
    FRONTEND_URL: z.string(),
    X32_IP: z.string(),
    BEAMER_IP: z.string(),
    SEND_ARTNET_AS_BROADCAST_ANYWAY: z.string().optional(),
});
export default envSchema.parse(process.env);
