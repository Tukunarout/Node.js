const { Client, GatewayIntentBits} = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith("create")) {
        const url = message.content.split("create")[1];
        return message.reply({
            content : "Generating Short ID for " + url,
        });
    }
  message.reply({
    content: "Hi From BOT",
  });
});

client.on('interactionCreate',interaction =>{
    console.log(interaction);
    interaction.reply('pong!!');
    
})

client.login(
  "MTI3NjkzMTkyNTE1MTQ1MzM2NQ.GFRnT5.fJsz-sMXtdpeFEABAII-PGOfnRgnSxzMnbjuW4"
);
