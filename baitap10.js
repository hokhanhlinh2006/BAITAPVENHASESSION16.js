let num1 = parseInt(prompt("Nhập vào số thứ nhất:"));
let num2 = parseInt(prompt("Nhập vào số thứ hai:"));
let randomNumber = Math.floor(Math.random() * (Math.max(num1, num2) - Math.min(num1, num2) - 1)) + Math.min(num1, num2) + 1;
alert("Số ngẫu nhiên trong khoảng: " + randomNumber);