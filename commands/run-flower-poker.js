const { MessageButton } = require("discord-buttons");
const { MessageEmbed } = require("discord.js");

const pastelFlowers = 'https://static.wikia.nocookie.net/runescape2/images/7/7b/Flowers_%28pastel%29.png/revision/latest/scale-to-width-down/29?cb=20160502034448';
const redFlowers = 'https://static.wikia.nocookie.net/runescape2/images/8/8d/Red_flowers.png/revision/latest/scale-to-width-down/29?cb=20160502065631';
const blueFlowers = 'https://static.wikia.nocookie.net/runescape2/images/5/59/Blue_flowers.png/revision/latest/scale-to-width-down/29?cb=20160502014331';
const yellowFlowers = 'https://static.wikia.nocookie.net/runescape2/images/b/b8/Yellow_flowers.png/revision/latest/scale-to-width-down/29?cb=20160502092709';
const purpleFlowers = 'https://static.wikia.nocookie.net/runescape2/images/c/c3/Purple_flowers.png/revision/latest/scale-to-width-down/29?cb=20160502064716';
const orangeFlowers = 'https://static.wikia.nocookie.net/runescape2/images/f/f9/Orange_flowers.png/revision/latest/scale-to-width-down/29?cb=20160502061510';
const mixedFlowers = 'https://static.wikia.nocookie.net/runescape2/images/9/9a/Flowers_%28mixed%29.png/revision/latest/scale-to-width-down/29?cb=20160502034446';
const whiteFlowers = 'https://static.wikia.nocookie.net/runescape2/images/c/c3/White_flowers.png/revision/latest/scale-to-width-down/29?cb=20160502091647';
const blackFlowers = 'https://static.wikia.nocookie.net/runescape2/images/f/f1/Black_flowers.png/revision/latest/scale-to-width-down/29?cb=20160502013354';

const flowers = [
  pastelFlowers,
  redFlowers,
  blueFlowers,
  yellowFlowers,
  purpleFlowers,
  orangeFlowers,
  mixedFlowers,
  whiteFlowers,
  blackFlowers
];


// messageEmbed.setTitle('How can I help?').setColor(0x000000).setDescription(
//   // Responses based on bet
//   // Randomly generate Flower object & push to array
//   // Read out data from Array foreach flower object
//   // Format, or filter, Array objects into visuals (i.e flower images)
//   // Send new formated messageEmbed to public gambling channel
// );

module.exports = async (message, args) => {

  let val1 = flowers[Math.floor(Math.random() * flowers.length)]
  let val2 = flowers[Math.floor(Math.random() * flowers.length)]
  let val3 = flowers[Math.floor(Math.random() * flowers.length)]
  let val4 = flowers[Math.floor(Math.random() * flowers.length)]
  let val5 = flowers[Math.floor(Math.random() * flowers.length)]

  message.channel.send(`\n ${val1}\n ${val2}\n ${val3}\n ${val4}\n ${val5}\n`);
}