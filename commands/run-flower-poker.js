const { MessageAttachment } = require("discord.js")
const { MessageButton } = require("discord-buttons")
const fs = require('fs')
const path = require('path')

const pastelFlowers = fs.readFileSync(path.join(__dirname, '../assets/pastelFlowers.png'))
const redFlowers = fs.readFileSync(path.join(__dirname, '../assets/redFlowers.png'))
const blueFlowers = fs.readFileSync(path.join(__dirname, '../assets/blueFlowers.png'))
const yellowFlowers = fs.readFileSync(path.join(__dirname, '../assets/yellowFlowers.png'))
const purpleFlowers = fs.readFileSync(path.join(__dirname, '../assets/purpleFlowers.png'))
const orangeFlowers = fs.readFileSync(path.join(__dirname, '../assets/orangeFlowers.png'))
const mixedFlowers = fs.readFileSync(path.join(__dirname, '../assets/mixedFlowers.png'))
const whiteFlowers = fs.readFileSync(path.join(__dirname, '../assets/whiteFlowers.png'))
const blackFlowers = fs.readFileSync(path.join(__dirname, '../assets/blackFlowers.png'))

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

module.exports = async (msg, args) => {
  if (msg.content.startsWith('$ bid')) {
    msg.delete();

    let val1 = flowers[Math.floor(Math.random() * flowers.length)]
    let val2 = flowers[Math.floor(Math.random() * flowers.length)]
    let val3 = flowers[Math.floor(Math.random() * flowers.length)]
    let val4 = flowers[Math.floor(Math.random() * flowers.length)]
    let val5 = flowers[Math.floor(Math.random() * flowers.length)]

    const plant1 = new MessageAttachment(val1)
    const plant2 = new MessageAttachment(val2)
    const plant3 = new MessageAttachment(val3)
    const plant4 = new MessageAttachment(val4)
    const plant5 = new MessageAttachment(val5)

    msg.channel.send(`1 ... ${msg.author}`, { files: [plant1] });
    msg.channel.send(`2 ... ${msg.author}`, { files: [plant2] });
    msg.channel.send(`3 ... ${msg.author}`, { files: [plant3] });
    msg.channel.send(`4 ... ${msg.author}`, { files: [plant4] });
    msg.channel.send(`5 ... ${msg.author}`, { files: [plant5] });
    
    /**
     * TODO: MessageButton for a choices
     * Again
     * Stop
     * Double down
     * PVP
     */
  }
}