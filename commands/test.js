module.exports = {
  name: 'test',
  aliases: ['works'],
  description: 'test cmd',
  async execute(message, args, client, Discord) {
    message.reply('Works :white_check_mark: !')
  }
}