module.exports = {
  name: 'purge',
  aliases: ['clear', 'delete'],
  description: 'purge cmd',
  async execute(message, args, client, Discord) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to use this command. \`MANAGE_MESSAGES\`');
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send('I do not have permission to use this command. \`MANAGE_MESSAGES\`');
    if (!args[0]) return message.channel.send('You must state a number of messages to delete. \`?purge <number>\`')
    const amountToDelete = Number(args[0], 10);

    if (isNaN(amountToDelete)) return message.channel.send(`The number stated is not VALID number. `);
    if (!Number.isInteger(amountToDelete)) return message.channel.send(`The number stated is not a whole number. `);
    if (!amountToDelete || amountToDelete < 2 || amountToDelete > 100) return message.channel.send(`The number stated must between 2 and 100. `);
    const fetched = await message.channel.messages.fetch({
      limit: amountToDelete
    });

    try {
      await message.channel.bulkDelete(fetched)
        .then( messages => message.channel.send(`Deleted ${messages.size} messages!`));
    } catch (err) {
      console.log(err);
      message.channel.send('Make sure the messages are within 14 days old. ');
    }
  }
}