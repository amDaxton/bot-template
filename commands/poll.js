module.exports = {
  name: 'poll',
  aliases: ['vote'],
  description: 'poll cmd',
  async execute(message, args, client, Discord) {
    let pollChannel = message.mentions.channels.first();
    let pollContent = args.slice(1).join(" ");

    if (!pollChannel) return message.channel.send('Please mention a channel to send the poll to!')
    if (!pollContent) return message.channel.send('Please state the content to poll!')

    let pollEmbed = new Discord.MessageEmbed()
      .setTitle('📢 New Poll!')
      .setDescription(pollContent)
      .setTimestamp()
      .setFooter('Use the reactions to vote!')
      .setAuthor(`Question asked by ${message.author.tag}`, message.author.displayAvatarURL());

    let sm = await pollChannel.send(pollEmbed);
    await sm.react('👍');
    await sm.react('👎');
    await sm.react('🤷‍♂️');

    message.reply(`Successfully sent the poll to ${pollChannel}!`);
  }
}