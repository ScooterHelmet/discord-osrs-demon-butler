module.exports = (member) => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');

  // Do nothing if the channel wasn't found on this server
  if (!channel) {
    console.log(`channel does not exists`);
    return;
  }

  // Send the message, mentioning the member
  channel.send(`Welcome to the ${member.guild.name} server, ${member}!`);
}