/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ChatResultMessageChunkEvent,
  ChatResultMessageChunkEvent$inboundSchema,
  ChatResultMessageChunkEvent$Outbound,
  ChatResultMessageChunkEvent$outboundSchema,
} from "./chatresultmessagechunkevent.js";
import {
  ChatResultRecordsCitedEvent,
  ChatResultRecordsCitedEvent$inboundSchema,
  ChatResultRecordsCitedEvent$Outbound,
  ChatResultRecordsCitedEvent$outboundSchema,
} from "./chatresultrecordscitedevent.js";

export type ChatResultStream =
  | (ChatResultMessageChunkEvent & { event: "message_chunk" })
  | (ChatResultRecordsCitedEvent & { event: "records_cited" });

/** @internal */
export const ChatResultStream$inboundSchema: z.ZodType<
  ChatResultStream,
  z.ZodTypeDef,
  unknown
> = z.union([
  ChatResultMessageChunkEvent$inboundSchema.and(
    z.object({ event: z.literal("message_chunk") }).transform((v) => ({
      event: v.event,
    })),
  ),
  ChatResultRecordsCitedEvent$inboundSchema.and(
    z.object({ event: z.literal("records_cited") }).transform((v) => ({
      event: v.event,
    })),
  ),
]);

/** @internal */
export type ChatResultStream$Outbound =
  | (ChatResultMessageChunkEvent$Outbound & { event: "message_chunk" })
  | (ChatResultRecordsCitedEvent$Outbound & { event: "records_cited" });

/** @internal */
export const ChatResultStream$outboundSchema: z.ZodType<
  ChatResultStream$Outbound,
  z.ZodTypeDef,
  ChatResultStream
> = z.union([
  ChatResultMessageChunkEvent$outboundSchema.and(
    z.object({ event: z.literal("message_chunk") }).transform((v) => ({
      event: v.event,
    })),
  ),
  ChatResultRecordsCitedEvent$outboundSchema.and(
    z.object({ event: z.literal("records_cited") }).transform((v) => ({
      event: v.event,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatResultStream$ {
  /** @deprecated use `ChatResultStream$inboundSchema` instead. */
  export const inboundSchema = ChatResultStream$inboundSchema;
  /** @deprecated use `ChatResultStream$outboundSchema` instead. */
  export const outboundSchema = ChatResultStream$outboundSchema;
  /** @deprecated use `ChatResultStream$Outbound` instead. */
  export type Outbound = ChatResultStream$Outbound;
}
