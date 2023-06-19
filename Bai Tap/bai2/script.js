let body = document.getElementsByTagName("body")[0];
let form = document.createElement("form");
let h2 = document.createElement("h2");
let label1 = document.createElement("label");
let label2 = document.createElement("label");
let label3 = document.createElement("label");
let label4 = document.createElement("label");
let label5 = document.createElement("label");
let input1 = document.createElement("input");
let input2 = document.createElement("input");
let input3 = document.createElement("input");
let input4 = document.createElement("input");
let button = document.createElement("input");

let radio1 = document.createElement("input");
let radio2 = document.createElement("input");
let span1 = document.createElement("span");
let span2 = document.createElement("span");

body.appendChild(form);
form.appendChild(h2);

h2.innerText = "Thông tin học viên";
// 1
form.appendChild(label1);
label1.innerText = "Họ và tên";
label1.appendChild(input1);
input1.setAttribute("type", "text");
// 2
form.appendChild(label2);
label2.innerText = "Email";
label2.appendChild(input2);
input2.setAttribute("type", "email");
// 3
form.appendChild(label3);
label3.innerText = "Số điện thoại";
label3.appendChild(input3);
input3.setAttribute("type", "text");
// 4
form.appendChild(label4);
label4.innerText = "quê quán";
label4.appendChild(input4);
input4.setAttribute("type", "text");
// 5
form.appendChild(label5);
label5.innerText = "Giới Tính";
label5.appendChild(span1);
span1.innerText = "Nam";
span1.appendChild(radio1);
radio1.setAttribute("type", "radio");
label5.appendChild(span2);
span2.innerText = "Nu";
span2.appendChild(radio2);
radio2.setAttribute("type", "radio");
// button
form.appendChild(button);
button.setAttribute("type", "button");
button.setAttribute("value", "Button");
console.log(body);
