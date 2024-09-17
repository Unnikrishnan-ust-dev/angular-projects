// const square = function (n) {
//     return n * n;
// }
// var result1 = square(8);
// console.log(result1);

// const square2 = (n) => {
//     return n * n;
// }
// var result2 = square2(5);
// console.log(result2);

// function sum(a, b) {
//     return a + b;
// }
// var result3 = sum(5, 4);
// console.log(result3);

// const isEven = (n) => {
//     return n % 2 == 0;
// }
// const printRes = isEven(7);
// console.log(printRes);

// let dataObj = {
//     "data": [
//         {
//             "name": "Tata Consultancy Services",
//             "head_office": "Mumbai, Maharashtra",
//             "employee_count": 600000,
//             "industry": "Information Technology",
//             "year_founded": 1968
//         },
//         {
//             "name": "Reliance Industries Limited",
//             "head_office": "Mumbai, Maharashtra",
//             "employee_count": 250000,
//             "industry": "Conglomerate",
//             "year_founded": 1966
//         },
//         {
//             "name": "Infosys Limited",
//             "head_office": "Bengaluru, Karnataka",
//             "employee_count": 335000,
//             "industry": "Information Technology",
//             "year_founded": 1981
//         },
//         {
//             "name": "Wipro Limited",
//             "head_office": "Bengaluru, Karnataka",
//             "employee_count": 250000,
//             "industry": "Information Technology",
//             "year_founded": 1945
//         },
//         {
//             "name": "Hindustan Unilever Limited",
//             "head_office": "Mumbai, Maharashtra",
//             "employee_count": 19000,
//             "industry": "Consumer Goods",
//             "year_founded": 1933
//         },
//         {
//             "name": "State Bank of India",
//             "head_office": "Mumbai, Maharashtra",
//             "employee_count": 250000,
//             "industry": "Banking",
//             "year_founded": 1806
//         },
//         {
//             "name": "Bharti Airtel",
//             "head_office": "New Delhi",
//             "employee_count": 25000,
//             "industry": "Telecommunications",
//             "year_founded": 1995
//         },
//         {
//             "name": "ICICI Bank",
//             "head_office": "Mumbai, Maharashtra",
//             "employee_count": 90000,
//             "industry": "Banking",
//             "year_founded": 1994
//         },
//         {
//             "name": "Mahindra & Mahindra",
//             "head_office": "Mumbai, Maharashtra",
//             "employee_count": 150000,
//             "industry": "Automotive",
//             "year_founded": 1945
//         },
//         {
//             "name": "UST",
//             "head_office": "Trivandrum, Kerala",
//             "employee_count": 25000,
//             "industry": "Information Technology",
//             "year_founded": 1999
//         }
//     ]
// }




// console.log(dataObj);

// console.log("Companies founded after 1950");
// console.log(dataObj.data.filter((ele)=>{
//     return ele.year_founded>1950;
// }));

// console.log("Companies with more than 25000 employees");
// console.log(dataObj.data.filter((ele)=>{
//     return ele.employee_count>150000;
// }));


// var data = [];
// for (var k = 1; k <= 100; k++) {
//     data.push(k);
// }
// document.write(`<table border><tbody></tbody></table>`);

// var table = document.querySelector("table");
// var thead = document.createElement("thead");

// for (let i = 0; i < 101; i++) {
//     let td = document.createElement("th");
//     if (i === 0) {
//         td.textContent = "";
//     } else {
//         td.textContent = i;
//     }
//     td.textContent = i;
//     thead.appendChild(td);
// }
// table.appendChild(thead);
// var tbody = document.querySelector("tbody");

// for (var i = 1; i <= 100; i++) {
//     let tr = document.createElement("tr");
//     let td = document.createElement("th");
//     td.textContent = i;
//     tr.appendChild(td);
//     data.forEach((num) => {
//         let numTd = document.createElement("td");
//         numTd.textContent = i * num;
//         if (num == i) {
//             numTd.style.backgroundColor = "red";
//             numTd.style.color = "white";
//         }
//         tr.appendChild(numTd);
//     })
//     tbody.appendChild(tr);
// }