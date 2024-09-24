/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UserMessage = {
  role?: "user" | undefined;
  content: string;
};

/** @internal */
export const UserMessage$inboundSchema: z.ZodType<
  UserMessage,
  z.ZodTypeDef,
  unknown
> = z.object({
  role: z.literal("user").optional(),
  content: z.string(),
});

/** @internal */
export type UserMessage$Outbound = {
  role: "user";
  content: string;
};

/** @internal */
export const UserMessage$outboundSchema: z.ZodType<
  UserMessage$Outbound,
  z.ZodTypeDef,
  UserMessage
> = z.object({
  role: z.literal("user").default("user" as const),
  content: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserMessage$ {
  /** @deprecated use `UserMessage$inboundSchema` instead. */
  export const inboundSchema = UserMessage$inboundSchema;
  /** @deprecated use `UserMessage$outboundSchema` instead. */
  export const outboundSchema = UserMessage$outboundSchema;
  /** @deprecated use `UserMessage$Outbound` instead. */
  export type Outbound = UserMessage$Outbound;
}
