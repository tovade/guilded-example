import { CustomCommand } from "../../../structures/CustomCommand";
import { BotClient } from "@guildedjs/gil";
import { Embed, Message } from "guilded.js";

export default class HelpCommand extends CustomCommand {
  constructor(client: BotClient) {
    super(client, {
      name: "help",
      aliases: ["h"],
      arguments: [
        {
          type: "subcommand",
          name: "command",
          required: false,
        },
      ],
    });
  }
  execute(message: Message, args: Record<string, unknown>) {
    const commands = [...this.client.commands.values()];

    const embed = new Embed({
      title: "My commands",
      description: `${commands
        .map((cmd) => {
          return cmd.name;
        })
        .join(", ")}`,
    });
    message.send({
      embeds: [embed],
    });
  }
  init() {}
}
