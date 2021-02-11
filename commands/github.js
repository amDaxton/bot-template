module.exports = {
  name: 'github',
  aliases: ['git', 'src', 'srcCode'],
  description: '',
  async execute(message, args, client, Discord) {
    const gitEmbed = new Discord.MessageEmbed()
     .setTitle('Click me for the git repo')
     .setColor('White')
      .setURL('https://github.com/GhostDev-Discord-Bot-Coder/bot-template');

    message.channel.send(gitEmbed)
  }
}
