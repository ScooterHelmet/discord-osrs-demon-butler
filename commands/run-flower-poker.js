const { MessageButton } = require("discord-buttons");
const { MessageEmbed } = require("discord.js");

const flowers = [];

const blackFlower = 'https://static.wikia.nocookie.net/runescape2/images/f/f1/Black_flowers.png/revision/latest/scale-to-width-down/29?cb=20160502013354';

module.exports = async (message, args) => {
  
  // messageEmbed.setTitle('How can I help?').setColor(0x000000).setDescription(
  //   // Responses based on bet
  //   // Randomly generate Flower object & push to array
  //   // Read out data from Array foreach flower object
  //   // Format, or filter, Array objects into visuals (i.e flower images)
  //   // Send new formated messageEmbed to public gambling channel
  // );

  message.channel.send(blackFlower);
}