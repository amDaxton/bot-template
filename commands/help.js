const { prefix } = require('../config.json')

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
      em.setColor('GREEN')
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
      em.setColor('GREEN')
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
      em.setColor('GREEN')
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
      em.setColor('GREEN')
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
      em.setColor('GREEN')
      em.setTimestamp()
      em.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());

      return message.channel.send(em)
    } else {
      em.setTitle('Help On My Commands!')
      em.setColor('GREEN')
      em.setDescription(`My Prefix is  ${prefix} all my commands are: \n \`${prefix}ping\` , \`${prefix}help\` , \`${prefix}math\` , \`${prefix}purge\`, \`${prefix}poll\` , \`${prefix}meme\``)
      em.setTimestamp()
      em.setFooter(`Requested by ${message.author.tag}. Say \`${prefix}help <command>\` for help on a command!`, message.author.displayAvatarURL());

      return message.channel.send(em)
    }
  }
}