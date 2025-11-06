import type { Disposable, MarkdownString } from "vscode";

declare module "vscode" {
  export namespace chat {
    function createChatParticipantExtensionApi(
      participantId: string
    ): ChatParticipantExtensionApi;
  }

  export interface ChatParticipantExtensionApi {
    registerChatCommand(
      command: string,
      options: {
        title: string;
        description?: string;
        handler: () => MarkdownString | string | Promise<MarkdownString | string | void> | void;
      }
    ): Disposable;
    registerChatMention(
      mention: string,
      options: {
        title: string;
        description?: string;
        handler: (message: string) =>
          | MarkdownString
          | string
          | Promise<MarkdownString | string | void>
          | void;
      }
    ): Disposable;
  }
}
