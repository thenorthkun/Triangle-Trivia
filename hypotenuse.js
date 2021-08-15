const inputs = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculateHypotenuse-btn");
const output = document.querySelector("#output");;



function checkHypotenuse(){
    const a = Number(inputs[0].value);
    const b = Number(inputs[1].value);
    const sum_of_squares = a**2 + b**2 ;

    const hypotenuse = Math.sqrt(sum_of_squares);
    output.innerText = ` Length of Hypotenuse is ${hypotenuse}`;

    

    
}

calculateBtn.addEventListener("click",checkHypotenuse)
;