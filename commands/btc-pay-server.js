{/* <style type="text/css"> .btcpay-form { display: inline-flex; align-items: center; justify-content: center; } .btcpay-form--inline { flex-direction: row; } .btcpay-form--block { flex-direction: column; } .btcpay-form--inline .submit { margin-left: 15px; } .btcpay-form--block select { margin-bottom: 10px; } .btcpay-form .btcpay-custom-container{ text-align: center; }.btcpay-custom { display: flex; align-items: center; justify-content: center; } .btcpay-form .plus-minus { cursor:pointer; font-size:25px; line-height: 25px; background: #DFE0E1; height: 30px; width: 45px; border:none; border-radius: 60px; margin: auto 5px; display: inline-flex; justify-content: center; } .btcpay-form select { -moz-appearance: none; -webkit-appearance: none; appearance: none; color: currentColor; background: transparent; border:1px solid transparent; display: block; padding: 1px; margin-left: auto; margin-right: auto; font-size: 11px; cursor: pointer; } .btcpay-form select:hover { border-color: #ccc; } #btcpay-input-price { -moz-appearance: none; -webkit-appearance: none; border: none; box-shadow: none; text-align: center; font-size: 25px; margin: auto; border-radius: 5px; line-height: 35px; background: #fff; } #btcpay-input-price::-webkit-outer-spin-button, #btcpay-input-price::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; } </style>
    <form method="POST"  action="http://192.168.50.178/api/v1/invoices" class="btcpay-form btcpay-form--block">
      <input type="hidden" name="storeId" value="5yKrZzKpwY7BsaZcqcGDb7qZRgM1A8tG5CyuUEaP4vzN" />
      <input type="hidden" name="price" value="5.00" />
      <input type="hidden" name="currency" value="USD" />
      <input type="image" class="submit" name="submit" src="http://192.168.50.178/img/paybutton/pay.svg" style="width:209px" alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor">
    </form> */}

let status='offline';
let log;
let output;
let result;

const exec = require('child_process').exec;
process = (error, stdout, stderr) => {
  if (!error) {
    status = `🤝 online`
  }

  log = error;
  output = stdout;
  result = stderr;
}
exec("ping -c 3 ubuntu", process);

module.exports = async (msg, args) => {
  if (msg.content.startsWith('$ ping')) {
    msg.delete();
    
    msg.author.send(output);
    msg.channel.send(`BTC Pay Server status: ${status}`);
  }
}