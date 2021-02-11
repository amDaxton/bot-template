require('dotenv').config();
// Vars
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { prefix, line } = require('./config.json');
var version = '1.1'
const logSymbols = require('log-symbols');

// Command Setting
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  const cmd_name  = file.split('.')[0];
  client.commands.set(command.name, command);
  console.log(logSymbols.success, `${cmd_name} command set to the client!`)
  console.log(line)
}

// Ready Event
client.once('ready', async () => {
  console.log(`${client.user.tag} has logged in!`)
  client.user.setPresence({ activity: { name: `${prefix}help | v${version}`, type: 'WATCHING' }, status: 'dnd' })
});

// Message Event
client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (!message.guild) return message.author.send('These commands only works in servers! :smile: ')

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));


    if(command) command.execute(message, args, client, Discord)
})

// Login
client.login(process.env.TOKEN);