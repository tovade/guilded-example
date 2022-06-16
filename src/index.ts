import { BotClient } from "@guildedjs/gil";
import { config } from "dotenv";
config();

const client = new BotClient({
  token: process.env.TOKEN,
  prefix: process.env.PREFIX,
});

client.on("ready", () => {
  console.log("ready for launch!");
});

client.login();
