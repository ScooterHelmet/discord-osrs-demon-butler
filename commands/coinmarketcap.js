const { default: axios } = require("axios");
const { cmcKey } = require("../config");

module.exports = async (msg, args) => {
  if (msg.content.startsWith('$ btc')) {
    msg.delete();
    try {
      const config = {
        method: 'get',
        url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=1&convert=USD',
        headers: {
          'X-CMC_PRO_API_KEY': `${cmcKey}`
        }
      };

      let getData = async () => {
        let response = await axios(config);
        console.log(`${response.data.data[0]}`);
        // console.log(`${response.data.data[0].quote.USD.price}`);

        let envelope = JSON.stringify(response.data.data[0].quote.USD.price);
        console.log(`envelope data: ${envelope}`);

        if (envelope) {
          msg.channel.send(`BTC is currently priced at: **${envelope} USD**`);
        } else {
          return
        }
      }

      let instantiation = await getData();
    } catch (err) {
      console.log(err);
      return
    }
  }
}
