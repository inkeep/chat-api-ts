# ChatSessionInput

## Example Usage

```typescript
import { ChatSessionInput } from "@inkeep/ai-api/models/components";

let value: ChatSessionInput = {
  messages: [
    {
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `guidance`             | *string*               | :heavy_minus_sign:     | N/A                    |
| `context`              | *string*               | :heavy_minus_sign:     | N/A                    |
| `messages`             | *components.Message*[] | :heavy_check_mark:     | N/A                    |
| `tags`                 | *string*[]             | :heavy_minus_sign:     | N/A                    |