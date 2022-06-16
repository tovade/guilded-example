import { CustomCommand } from "../../../structures/CustomCommand";
import { BotClient } from "@guildedjs/gil";
import { Embed, Message } from "guilded.js";

export default class HelpCommandCommand extends CustomCommand {
  constructor(client: BotClient) {
    super(client, {
      name: "command",
      parentCommand: "help",
      arguments: [
        {
          type: "string",
          name: "command",
          required: true,
          missing: (message) => {
            message.reply("No command was provided");
          },
        },
      ],
    });
  }
  execute(message: Message, args) {
    const command = [...this.client.commands.values()].filter(
      (cmd) => cmd.name === args.command || cmd.aliases?.includes(args.command)
    )[0];
    const embed = new Embed({
      title: command.name,
      description: `
      description: ${command.description || "No description"}
      aliases: ${command.aliases || "No aliases"}`,
      footer: {
        text: "Help command",
      },
    });
    message.send({
      embeds: [embed],
    });
  }
}
