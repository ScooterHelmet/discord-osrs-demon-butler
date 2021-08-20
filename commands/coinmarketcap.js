const { default: axios } = require("axios");
const { MessageButton } = require("discord-buttons");
const { Client } = require("discord.js");
const { cmcKey } = require("../config");
const client = new Client();
require("discord-buttons")(client);

const buyButton = new MessageButton().setStyle("green").setID("1").setLabel("Buy Bitcoin");

module.exports = async (message, args) => {
  const config = {
    method: 'get',
    url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1&convert=USD',
    headers: {
      'X-CMC_PRO_API_KEY': `${cmcKey}`
    }
  };

  let getData = async () => {
    let response = await axios(config);
    let tasks = JSON.stringify(response.data[0]);
    return tasks;
  }

  let value = await getData();

  message.channel.send(value);
}
