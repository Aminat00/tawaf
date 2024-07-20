"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
// src/trpcRouter.ts
const server_1 = require("@trpc/server");
const zod_1 = require("zod");
const t = server_1.initTRPC.create();
exports.appRouter = t.router({
    getUser: t.procedure.input(zod_1.z.string()).query((opts) => {
        opts.input;
        return { id: opts.input, name: "Aminat" };
    }),
    createUser: t.procedure
        .input(zod_1.z.object({ name: zod_1.z.string().min(5) }))
        .mutation(async (opts) => {
        // Replace with your ORM or database logic
        return { id: "30071999", name: opts.input.name };
    }),
});
