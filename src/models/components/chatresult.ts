/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { AssistantMessage, AssistantMessage$ } from "./assistantmessage";
import * as z from "zod";

export type ChatResult = {
    chatSessionId: string;
    message: AssistantMessage;
};

/** @internal */
export namespace ChatResult$ {
    export const inboundSchema: z.ZodType<ChatResult, z.ZodTypeDef, unknown> = z
        .object({
            chat_session_id: z.string(),
            message: AssistantMessage$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                chat_session_id: "chatSessionId",
            });
        });

    export type Outbound = {
        chat_session_id: string;
        message: AssistantMessage$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChatResult> = z
        .object({
            chatSessionId: z.string(),
            message: AssistantMessage$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                chatSessionId: "chat_session_id",
            });
        });
}
