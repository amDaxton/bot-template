const got = require('got');

module.exports = {
  name: 'meme',
  aliases: ['mem'],
  description: 'the meme command',
  async execute(message, args, client, Discord) {
    const edit = await message.channel.send('Fetching ye a meme...')


    const embed = new Discord.MessageEmbed()
    got('https://www.reddit.com/r/memes/random/.json').then(async response => {
      let content = JSON.parse(response.body);
      let permalink = content[0].data.children[0].data.permalink;
      let memeUrl = `https://reddit.com${permalink}`;
      let memeImage = content[0].data.children[0].data.url;
      let memeTitle = content[0].data.children[0].data.title;
      let memeUpvotes = content[0].data.children[0].data.ups;
      let memeDownvotes = content[0].data.children[0].data.downs;
      let memeNumComments = content[0].data.children[0].data.num_comments;
      embed.setTitle(`${memeTitle}`)
      embed.setURL(`${memeUrl}`)
      embed.setImage(memeImage)
      embed.setColor('GREEN')
      embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)

      await edit.delete();
      message.channel.send(embed)
    })
  }
}