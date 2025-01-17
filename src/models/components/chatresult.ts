/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  AssistantMessage,
  AssistantMessage$inboundSchema,
  AssistantMessage$Outbound,
  AssistantMessage$outboundSchema,
} from "./assistantmessage.js";

export type ChatResult = {
  chatSessionId: string;
  message: AssistantMessage;
};

/** @internal */
export const ChatResult$inboundSchema: z.ZodType<
  ChatResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  chat_session_id: z.string(),
  message: AssistantMessage$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "chat_session_id": "chatSessionId",
  });
});

/** @internal */
export type ChatResult$Outbound = {
  chat_session_id: string;
  message: AssistantMessage$Outbound;
};

/** @internal */
export const ChatResult$outboundSchema: z.ZodType<
  ChatResult$Outbound,
  z.ZodTypeDef,
  ChatResult
> = z.object({
  chatSessionId: z.string(),
  message: AssistantMessage$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    chatSessionId: "chat_session_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatResult$ {
  /** @deprecated use `ChatResult$inboundSchema` instead. */
  export const inboundSchema = ChatResult$inboundSchema;
  /** @deprecated use `ChatResult$outboundSchema` instead. */
  export const outboundSchema = ChatResult$outboundSchema;
  /** @deprecated use `ChatResult$Outbound` instead. */
  export type Outbound = ChatResult$Outbound;
}
