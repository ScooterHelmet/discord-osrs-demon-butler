const { default: axios } = require("axios");
const { MessageButton } = require("discord-buttons");
const { Client } = require("discord.js");
const { cmcKey } = require("../config");
const client = new Client();
require("discord-buttons")(client);

const buyButton = new MessageButton().setStyle("green").setID("1").setLabel("Buy Bitcoin");

module.exports = async (msg, args) => {
  if (msg.content.startsWith('$ btc')) {
    msg.delete();
    try {
      const config = {
        method: 'get',
        url: 'http://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1&convert=USD',
        headers: {
          'X-CMC_PRO_API_KEY': `${cmcKey}`
        }
      };

      let getData = async () => {
        let response = await axios(config);
        console.log(`${response.data.data[0].quote.USD.price}`);

        let envelope = JSON.stringify(response.data.data[0].quote.USD.price);
        console.log(`envelope data: ${envelope}`);
        return msg.channel.send(`Hi traveler, BTC is currently priced at: **${envelope} USD**`);
      }

      let instantiation = await getData();
    } catch (err) {
      console.log(err);
    }
  }
}
