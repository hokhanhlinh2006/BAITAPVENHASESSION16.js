let math = parseFloat(prompt("Nhập vào điểm Toán:"));
let physics = parseFloat(prompt("Nhập vào điểm Vật lý:"));
let chemistry = parseFloat(prompt("Nhập vào điểm Hóa học:"));
let average = (math + physics + chemistry) / 3;
alert("Điểm trung bình 3 môn của bạn là: " + average.toFixed(2));