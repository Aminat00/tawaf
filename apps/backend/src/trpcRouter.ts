// src/trpcRouter.ts
import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const appRouter = t.router({
	getUser: t.procedure.input(z.string()).query((opts) => {
		opts.input;
		return { id: opts.input, name: "Aminat" };
	}),
	createUser: t.procedure
		.input(z.object({ name: z.string().min(5) }))
		.mutation(async (opts) => {
			// Replace with your ORM or database logic
			return { id: "30071999", name: opts.input.name };
		}),
});

export type AppRouter = typeof appRouter;