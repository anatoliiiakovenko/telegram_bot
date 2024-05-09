import { Telegraf, Context } from 'telegraf';
import fs from 'fs';


const BOT_TOKEN = "6938863658:AAHLLvHwcjuMuTw14Pjjc_deYBUqaAxNA-w";
const PHOTO_PATH = './public/photo.png'

const bot = new Telegraf(BOT_TOKEN);


bot.start((ctx: Context) => {
    ctx.reply('Welcome to Pnyx 👍');
});
bot.help((ctx: Context) => {
    ctx.reply('How I can help you?');
});

bot.hears(/send me photo/i, async (ctx: Context) => {
    try {
        const photoBuffer = fs.readFileSync(PHOTO_PATH);
        await ctx.replyWithPhoto({ source: photoBuffer });
    } catch (error) {
        console.error('error', error);
        ctx.reply('Error');
    }
});

bot.on('message', (ctx: Context) => {
    const textMessage = ctx.text?.toLowerCase();

    if (textMessage === 'hi') {
        ctx.reply('Hi! How are you there?');
    } else {
        ctx.reply("I don't understand");
    }
});


bot.launch();