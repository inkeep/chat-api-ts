/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { MessageChunk, MessageChunk$ } from "./messagechunk";
import * as z from "zod";

/**
 * A server-sent event containing a chunk of the message.
 */
export type ChatResultMessageChunkEvent = {
    event?: "message_chunk" | undefined;
    data: MessageChunk;
};

/** @internal */
export namespace ChatResultMessageChunkEvent$ {
    export const inboundSchema: z.ZodType<ChatResultMessageChunkEvent, z.ZodTypeDef, unknown> =
        z.object({
            event: z.literal("message_chunk").optional(),
            data: z
                .string()
                .transform((v, ctx) => {
                    try {
                        return JSON.parse(v);
                    } catch (err) {
                        ctx.addIssue({
                            code: z.ZodIssueCode.custom,
                            message: `malformed json: ${err}`,
                        });
                        return z.NEVER;
                    }
                })
                .pipe(MessageChunk$.inboundSchema),
        });

    export type Outbound = {
        event: "message_chunk";
        data: MessageChunk$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChatResultMessageChunkEvent> =
        z.object({
            event: z.literal("message_chunk").default("message_chunk" as const),
            data: MessageChunk$.outboundSchema,
        });
}
