const math = require('discord-math')

module.exports = {
  name: 'math',
  aliases: ['solve'],
  description: 'dose math!',
  async execute(message, args, client, Discord) {
    try {
      let num1 = Number(args[0])
      let operation = args[1]
      let num2 = Number(args[2])

      if(!num1) return message.reply('State the first number of the math problem')
      if (!operation) return message.reply('State the type of operation. keys: + : add , - : minus , / : divide , * : multiply ')
      if (!num2) return message.reply('State the second number of the math problem')

      message.reply(`The answer to your question is ${math.calculate(num1, operation, num2)}!`)
    } catch(err) {
      console.log(err)
      message.reply('There was an error :( ')
    }
  }
}