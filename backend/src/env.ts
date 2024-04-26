import { config } from "dotenv";
import { z } from "zod";
config();

const envSchema = z.object({});
export default envSchema.parse(process.env);
