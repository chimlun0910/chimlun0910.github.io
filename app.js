let valInput = 0;
function getValue() {
  valInput = parseInt(document.querySelector("#input-row").value);
  const ques = document.querySelectorAll(".question div");
  ques.forEach((ele) => {
    ele.style.color = "transparent";
    ele.style.border = "none";
  });
  const row = document.querySelectorAll(`#row-${valInput} td`);
  const showButton = document.querySelector(".show-answer");
  showButton.addEventListener("click", () => {
    row.forEach((ele) => {
      ele.style.color = "black";
    });
  });
  switch (valInput) {
    case 1:
      ques[0].style.color = "black";
      ques[0].style.border = "3px solid black";
      //   let row = document.querySelectorAll(`#row-${valInput} td`);
      break;
    case 2:
      ques[1].style.color = "black";
      ques[1].style.border = "3px solid black";
      break;
    case 3:
      ques[2].style.color = "black";
      ques[2].style.border = "3px solid black";
      break;
    case 4:
      ques[3].style.color = "black";
      ques[3].style.border = "3px solid black";
      break;
    case 5:
      ques[4].style.color = "black";
      ques[4].style.border = "3px solid black";
      break;
    case 6:
      ques[5].style.color = "black";
      ques[5].style.border = "3px solid black";
      break;
    case 7:
      ques[6].style.color = "black";
      ques[6].style.border = "3px solid black";
      break;
    case 8:
      ques[7].style.color = "black";
      ques[7].style.border = "3px solid black";
      break;
    case 9:
      ques[8].style.color = "black";
      ques[8].style.border = "3px solid black";
      break;
    case 10:
      ques[9].style.color = "black";
      ques[9].style.border = "3px solid black";
      break;
    case 11:
      ques[10].style.color = "black";
      ques[10].style.border = "3px solid black";
      break;
    default:
      break;
  }
}

const mainKey = document.querySelectorAll(".main-key");
const showMainAnswer = document.querySelector(".show-main-answer");
showMainAnswer.addEventListener("click", () => {
  mainKey.forEach((ele) => {
    ele.classList.toggle("show");
  });
});

var tables = document.getElementsByTagName("table");
var table = tables[tables.length - 1];
var rows = table.rows;
for (var i = 0, td; i < rows.length; i++) {
  td = document.createElement("td");
  td.appendChild(document.createTextNode(i + 1));
  td.style.color = "black";
  td.style.backgroundColor = "#d4a373";
  td.style.borderRadius = "50%";
  rows[i].insertBefore(td, rows[i].firstChild);
}
