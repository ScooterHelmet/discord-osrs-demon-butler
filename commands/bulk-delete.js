module.exports = async (msg, args) => {
  if (msg.content.startsWith('$ clear')) {
    msg.delete();
    msg.channel.bulkDelete(99).then((msg => console.log(`Bulk deleted ${msg.size} messages`)));
  }
}