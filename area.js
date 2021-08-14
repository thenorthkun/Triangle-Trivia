const inputs = document.querySelectorAll(".inputs");
const calculateBtn = document.querySelector("#calculateBtn");
const output = document.querySelector("#output");

function calculateArea(){
    const base = Number(inputs[0].value);
    const height = Number(inputs[1].value);

    const area = (base*height)/2 ;

    output.innerText = `Area of the Triangle is ${area}`;

}

calculateBtn.addEventListener("click",calculateArea);