/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Message,
  Message$inboundSchema,
  Message$Outbound,
  Message$outboundSchema,
} from "./message.js";

export type ChatSessionInput = {
  guidance?: string | null | undefined;
  context?: string | null | undefined;
  messages: Array<Message>;
  tags?: Array<string> | undefined;
};

/** @internal */
export const ChatSessionInput$inboundSchema: z.ZodType<
  ChatSessionInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  guidance: z.nullable(z.string()).optional(),
  context: z.nullable(z.string()).optional(),
  messages: z.array(Message$inboundSchema),
  tags: z.array(z.string()).optional(),
});

/** @internal */
export type ChatSessionInput$Outbound = {
  guidance?: string | null | undefined;
  context?: string | null | undefined;
  messages: Array<Message$Outbound>;
  tags?: Array<string> | undefined;
};

/** @internal */
export const ChatSessionInput$outboundSchema: z.ZodType<
  ChatSessionInput$Outbound,
  z.ZodTypeDef,
  ChatSessionInput
> = z.object({
  guidance: z.nullable(z.string()).optional(),
  context: z.nullable(z.string()).optional(),
  messages: z.array(Message$outboundSchema),
  tags: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatSessionInput$ {
  /** @deprecated use `ChatSessionInput$inboundSchema` instead. */
  export const inboundSchema = ChatSessionInput$inboundSchema;
  /** @deprecated use `ChatSessionInput$outboundSchema` instead. */
  export const outboundSchema = ChatSessionInput$outboundSchema;
  /** @deprecated use `ChatSessionInput$Outbound` instead. */
  export type Outbound = ChatSessionInput$Outbound;
}
