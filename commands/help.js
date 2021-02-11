const config = require('../config.json')
const prefix = config.prefix
const col = config.embedColor

module.exports = {
  name: 'help',
  aliases: ['commands', 'cmds'],
  description: 'help cmd',
  async execute(message, args, client, Discord) {
    const em = new Discord.MessageEmbed()
    if (args[0] === 'ping') {
      em.setTitle('Ping Command')
      em.addFields({
        name: '**Name:**',
        value: 'ping'
      }, {
        name: '**Description:**',
        value: 'Shows the \'ping\' of the bot!'
      }, {
        name: '**Aliases:**',
        value: 'delay'
      }, {
        name: '**Usage:**',
        value: ` ${prefix}ping \n ${prefix}delay`
      })
      em.setColor(col)
      em.setTimestamp()
      em.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

      return message.channel.send(em)
    } else if (args[0] === 'math') {
      em.setTitle('Math Command')
      em.addFields({
        name: '**Name:**',
        value: 'math'
      }, {
        name: '**Description:**',
        value: 'Dose math for you!'
      }, {
        name: '**Aliases:**',
        value: 'solve'
      }, {
        name: '**Usage:**',
        value: ` ${prefix}math <num1> <operation> <num2> \n ${prefix}solve <num1> <operation> <num2>`
      })
      em.setColor(col)
      em.setTimestamp()
      em.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

      return message.channel.send(em)
    } else if (args[0] === 'purge') {
      em.setTitle('Purge Command')
      em.addFields({
        name: '**Name:**',
        value: 'purge'
      }, {
        name: '**Description:**',
        value: 'Deletes the messages'
      }, {
        name: '**Aliases:**',
        value: 'clear , delete'
      }, {
        name: '**Usage:**',
        value: ` ${prefix}purge <amount> \n ${prefix}clear <amount> \n ${prefix}delete <amount>`
      })
      em.setColor(col)
      em.setTimestamp()
      em.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

      return message.channel.send(em)
    } else if (args[0] === 'poll') {
      em.setTitle('Poll Command')
      em.addFields({
        name: '**Name:**',
        value: 'poll'
      }, {
        name: '**Description:**',
        value: 'Makes a poll'
      }, {
        name: '**Aliases:**',
        value: 'vote'
      }, {
        name: '**Usage:**',
        value: ` ${prefix}poll #channel <content> \n ${prefix}vote #channel <content>`
      })
      em.setColor(col)
      em.setTimestamp()
      em.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

      return message.channel.send(em)
    } else if(args[0] === 'meme') {
      em.setTitle('Meme Command')
      em.addFields({
        name: '**Name:**',
        value: 'meme'
      }, {
        name: '**Description:**',
        value: 'Gives you a meme!'
      }, {
        name: '**Aliases:**',
        value: 'mem'
      }, {
        name: '**Usage:**',
        value: ` ${prefix}meme \n ${prefix}mem`
      })
      em.setColor(col)
      em.setTimestamp()
      em.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

      return message.channel.send(em)
    } else {
      em.setTitle(':mailbox_with_mail: Need help?')
      em.setDescription(`**My prefix is \`${prefix}\`**`)
      em.setColor(col)
      em.setThumbnail(client.user.displayAvatarURL())
      em.addField(`All My Commands:`, `**:tools: • Utilities** \n \`${prefix}ping\` ,  \`${prefix}poll\`, \`${prefix}help\` , \`${prefix}math\` \n \n **:video_game: • Fun** \n \`${prefix}meme\` \n \n **:eyeglasses: • Moderation** \n \`${prefix}purge\``)
      em.setTimestamp()
      em.setFooter(`Requested by ${message.author.tag}. Say \`${prefix}help <command>\` for help on a command!`, message.author.displayAvatarURL());

      return message.channel.send(em)
    }
  }
}
