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
    url?: string | undefined;
    title?: string | undefined;
    breadcrumbs?: Array<string> | undefined;
};

/** @internal */
export namespace RecordT$ {
    export type Inbound = {
        type: RecordType$.Inbound;
        url?: string | undefined;
        title?: string | undefined;
        breadcrumbs?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<RecordT, z.ZodTypeDef, Inbound> = z
        .object({
            type: RecordType$.inboundSchema,
            url: z.string().optional(),
            title: z.string().optional(),
            breadcrumbs: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                type: v.type,
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.breadcrumbs === undefined ? null : { breadcrumbs: v.breadcrumbs }),
            };
        });

    export type Outbound = {
        type: RecordType$.Outbound;
        url?: string | undefined;
        title?: string | undefined;
        breadcrumbs?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RecordT> = z
        .object({
            type: RecordType$.outboundSchema,
            url: z.string().optional(),
            title: z.string().optional(),
            breadcrumbs: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                type: v.type,
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.breadcrumbs === undefined ? null : { breadcrumbs: v.breadcrumbs }),
            };
        });
}