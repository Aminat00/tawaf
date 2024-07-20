import "dotenv/config";
import express from "express";
import { createClient } from "@supabase/supabase-js";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpcRouter";

// Initialize Supabase client
const supabaseUrl = "https://ajgleyohbvciejmiotts.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY ?? "";
const supabase = createClient(supabaseUrl, supabaseKey);

// Create context function for tRPC
const createContext = ({
	req,
	res,
}: trpcExpress.CreateExpressContextOptions) => ({
	supabase,
});

type Context = ReturnType<typeof createContext>;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: appRouter,
		createContext,
	})
);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
