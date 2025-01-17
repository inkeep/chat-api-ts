# CreateChatSessionWithChatResultInput

## Example Usage

```typescript
import { CreateChatSessionWithChatResultInput } from "@inkeep/ai-api/models/components";

let value: CreateChatSessionWithChatResultInput = {
  integrationId: "<value>",
  chatSession: {
    messages: [
      {
        content: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `integrationId`                                                            | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `chatSession`                                                              | [components.ChatSessionInput](../../models/components/chatsessioninput.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `chatMode`                                                                 | *components.ChatMode*                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |
| `stream`                                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |