const body = document.getElementsByTagName("body")[0];
const h2 = document.createElement("h2");
const form = document.createElement("form");
const label = document.createElement("label");
const input = document.createElement("input");
const search = document.createElement("input");
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const tr1 = document.createElement("tr");
const tr2 = document.createElement("tr");
const tr3 = document.createElement("tr");

body.appendChild(h2);
body.appendChild(form);
body.appendChild(table);
table.appendChild(thead);
table.appendChild(tbody);

h2.textContent = "Danh sách học viên";

// Form
form.appendChild(label);
label.textContent = "Tìm kiếm tên học viên:";
form.appendChild(input);
input.type = "text";
form.appendChild(search);
search.value = "search";
search.type = "button";

// Table
thead.appendChild(tr1);
tbody.appendChild(tr2);
tbody.appendChild(tr3);

// createTable cell
const createTableCell = (text) => {
  const td = document.createElement("td");
  td.textContent = text;
  return td;
};
// First row

tr1.appendChild(createTableCell("#"));
tr1.appendChild(createTableCell("Họ tên"));
tr1.appendChild(createTableCell("Email"));
tr1.appendChild(createTableCell("Điện thoại"));
tr1.appendChild(createTableCell("Địa chỉ"));
tr1.appendChild(createTableCell("Giới tính"));
tr1.appendChild(createTableCell("Hành động"));

const td8 = document.createElement("input");
tr1.appendChild(td8);
td8.type = "submit";
td8.value = "Sắp xếp (alpha b)";

// Second row
tr2.appendChild(createTableCell("1"));
tr2.appendChild(createTableCell("rikkei"));
tr2.appendChild(createTableCell("rikkei@gmail.com"));
tr2.appendChild(createTableCell("0123456789"));
tr2.appendChild(createTableCell("Hà Nội"));
tr2.appendChild(createTableCell("Nam"));

const td27 = document.createElement("td");
tr2.appendChild(td27);
const td271 = document.createElement("button");
td27.appendChild(td271);
td271.textContent = "Sửa";
const td272 = document.createElement("button");
td27.appendChild(td272);
td272.textContent = "Xóa";

// Third row
tr3.appendChild(createTableCell("2"));
tr3.appendChild(createTableCell("academy"));
tr3.appendChild(createTableCell("academy@gmail.com"));
tr3.appendChild(createTableCell("0987654321"));
tr3.appendChild(createTableCell("HCM"));
tr3.appendChild(createTableCell("Nữ"));

const td37 = document.createElement("td");
tr3.appendChild(td37);
const td371 = document.createElement("button");
td37.appendChild(td371);
td371.textContent = "Sửa";
const td372 = document.createElement("button");
td37.appendChild(td372);
td372.textContent = "Xóa";

console.log(body);
