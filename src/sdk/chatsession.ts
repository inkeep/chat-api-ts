/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export enum CreateAcceptEnum {
    applicationJson = "application/json",
    textEventStream = "text/event-stream",
}

export enum ContinueAcceptEnum {
    applicationJson = "application/json",
    textEventStream = "text/event-stream",
}

export class ChatSession extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Create Chat Session
     */
    async create(
        request: components.CreateChatSessionWithChatResultInput,
        options?: RequestOptions & { acceptHeaderOverride?: CreateAcceptEnum }
    ): Promise<operations.CreateResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");

        const accept =
            options?.acceptHeaderOverride || "application/json;q=1, text/event-stream;q=0";
        headers$.set("Accept", accept);

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                components.CreateChatSessionWithChatResultInput$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/v0/chat_sessions/chat_results")();

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "create",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["422", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.CreateResponse>()
            .json(200, operations.CreateResponse$, { key: "ChatResult" })
            .sse(200, operations.CreateResponse$, { key: "ChatResultStream" })
            .json(422, errors.HTTPValidationError$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Continue Chat Session
     */
    async continue(
        chatSessionId: string,
        continueChatSessionWithChatResultInput: components.ContinueChatSessionWithChatResultInput,
        options?: RequestOptions & { acceptHeaderOverride?: ContinueAcceptEnum }
    ): Promise<operations.ContinueResponse> {
        const input$: operations.ContinueRequest = {
            chatSessionId: chatSessionId,
            continueChatSessionWithChatResultInput: continueChatSessionWithChatResultInput,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");

        const accept =
            options?.acceptHeaderOverride || "application/json;q=1, text/event-stream;q=0";
        headers$.set("Accept", accept);

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ContinueRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.ContinueChatSessionWithChatResultInput, {
            explode: true,
        });

        const pathParams$ = {
            chat_session_id: enc$.encodeSimple("chat_session_id", payload$.chat_session_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v0/chat_sessions/{chat_session_id}/chat_results")(
            pathParams$
        );

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "continue",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["422", "4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.ContinueResponse>()
            .json(200, operations.ContinueResponse$, { key: "ChatResult" })
            .sse(200, operations.ContinueResponse$, { key: "ChatResultStream" })
            .json(422, errors.HTTPValidationError$, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
