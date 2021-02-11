module.exports = {
  name: 'ping',
  aliases: ['delay'],
  description: 'pong!!',
  async execute(message, args, client, Discord) {
    message.reply('Pinging...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp
      const pemb = new Discord.MessageEmbed()
        .setTitle('🏓Pong!')
        .setDescription(`**Bot latency: \n ${ping}ms \n API latency: \n ${client.ws.ping}ms**`)
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        .setTimestamp();
      resultMessage.delete()
      message.channel.send(pemb)
    })
  }
}