let usd = parseFloat(prompt("Nhập vào số tiền USD:"));
const exchangeRate = 25.000; 
let vnd = usd * exchangeRate;
alert(usd + "USD =" + vnd.toLocaleString() + "VND");