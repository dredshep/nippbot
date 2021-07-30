//deno run --allow-env=DEBUG --allow-net index.ts

import { Bot } from "https://deno.land/x/grammy@v1.2.0/mod.ts";
import "https://deno.land/x/dotenv@v2.0.0/load.ts";

const bot = new Bot(Deno.env.get("NIPPTOKEN") as string);

const isMultiple = (a: number, b: number) => a % b === 0;
bot.command(
  "id",
  (ctx) => ctx.message?.chat?.id && ctx.reply(String(ctx.message?.chat?.id)),
);

bot.on("message", (ctx) => {
  if (ctx.message.text && ctx.message.from?.id !== 1746638832) {
    // message not sent from parrot user
    console.log("got text");
    if (isMultiple(ctx.message.message_id, 5) && ctx.message.text.length < 51) {
      console.log("got 5th text");
      ctx.reply(`Baaaah _“${ctx.message.text}”_`, { parse_mode: "Markdown" });
    }
  }
});

bot.start();
console.log("bot on");
