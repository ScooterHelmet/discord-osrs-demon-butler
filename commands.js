const airtable = require('./commands/airtable');
const edapp = require('./commands/edapp');

// jump table
const commands = { airtable, edapp };

module.exports = async msg => {
  if (msg.author.bot) return;
  if (!msg.guild || msg.author.bot) return;

  const args = msg.content.slice("$".length).trim().split(" ");
  const command = args.shift().toLowerCase();

  commands[command](msg, args);
}