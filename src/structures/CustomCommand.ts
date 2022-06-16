import { BotClient, Command, CommandArgument } from "@guildedjs/gil";
import { Message } from "guilded.js";

export interface CustomCommandOptions {
  name: string;
  description?: string;
  aliases?: string[];
  arguments?: CommandArgument[];
  allowedIn?: ("dm" | "server")[];
  cooldown?: {
    seconds: number;
    allowedUses?: number;
  };
  parentCommand?: string;
}
export class CustomCommand extends Command {
  constructor(client: BotClient, options: CustomCommandOptions) {
    super(client, options.name);
    this.description = options.description || "No description provided";
    this.aliases = options.aliases;
    this.arguments = options.arguments;
    this.allowedIn = options.allowedIn || ["server", "dm"];
    this.cooldown = options.cooldown;
    this.parentCommand = options.parentCommand;
  }

  execute(
    message: Message,
    args: Record<string, unknown>
  ): Promise<unknown> | unknown {
    return undefined;
  }

  init(): Promise<unknown> | unknown {
    return undefined;
  }
}
