/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { EventStream } from "../../lib/event-streams";
import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type CreateResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Successful Response
     */
    chatResult?: components.ChatResult | undefined;
    /**
     * Successful Response
     */
    chatResultStream?: EventStream<components.ChatResultStream> | undefined;
};

/** @internal */
export namespace CreateResponse$ {
    export const inboundSchema: z.ZodType<CreateResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            ChatResult: components.ChatResult$.inboundSchema.optional(),
            ChatResultStream: z
                .instanceof(ReadableStream<Uint8Array>)
                .transform((stream) => {
                    return new EventStream({
                        stream,
                        decoder(rawEvent) {
                            const schema = components.ChatResultStream$.inboundSchema;
                            return schema.parse(rawEvent);
                        },
                    });
                })
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
                ChatResult: "chatResult",
                ChatResultStream: "chatResultStream",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        ChatResult?: components.ChatResult$.Outbound | undefined;
        ChatResultStream?: never | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            chatResult: components.ChatResult$.outboundSchema.optional(),
            chatResultStream: z.never().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
                chatResult: "ChatResult",
                chatResultStream: "ChatResultStream",
            });
        });
}
