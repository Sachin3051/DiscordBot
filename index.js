// import { Client, GatewayIntentBits } from 'discord.js';
const {Client, GatewayIntentBits}=require("discord.js")
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]
 });

 client.on('messageCreate', (message) => {
    // console.log(message.content);
    if(message.author.bot) return ;
    message.reply({
        content:"Hii from Bot"
    })
    client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;
      
        if (interaction.commandName === 'ping') {
          await interaction.reply('Pong!');
        }
      });
  });

  client.login(Token);