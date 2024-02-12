/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RecordType, RecordType$ } from "./recordtype";
import { z } from "zod";

export type RecordT = {
    /**
     * The type of record
     */
    type: RecordType;
    url?: string | null | undefined;
    title?: string | null | undefined;
    description?: string | null | undefined;
    breadcrumbs?: Array<string> | null | undefined;
};

/** @internal */
export namespace RecordT$ {
    export type Inbound = {
        type: RecordType$.Inbound;
        url?: string | null | undefined;
        title?: string | null | undefined;
        description?: string | null | undefined;
        breadcrumbs?: Array<string> | null | undefined;
    };

    export const inboundSchema: z.ZodType<RecordT, z.ZodTypeDef, Inbound> = z
        .object({
            type: RecordType$.inboundSchema,
            url: z.nullable(z.string()).optional(),
            title: z.nullable(z.string()).optional(),
            description: z.nullable(z.string()).optional(),
            breadcrumbs: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                type: v.type,
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.breadcrumbs === undefined ? null : { breadcrumbs: v.breadcrumbs }),
            };
        });

    export type Outbound = {
        type: RecordType$.Outbound;
        url?: string | null | undefined;
        title?: string | null | undefined;
        description?: string | null | undefined;
        breadcrumbs?: Array<string> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RecordT> = z
        .object({
            type: RecordType$.outboundSchema,
            url: z.nullable(z.string()).optional(),
            title: z.nullable(z.string()).optional(),
            description: z.nullable(z.string()).optional(),
            breadcrumbs: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                type: v.type,
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.breadcrumbs === undefined ? null : { breadcrumbs: v.breadcrumbs }),
            };
        });
}
