const inputs = document.querySelectorAll(".angle-input");
const output = document.querySelector("#output");
const isTriangleBtn = document.querySelector("#isTraingle-btn");

function calculateAngles(angle1,angle2,angle3){
    const sum_of_angles = angle1 + angle2 + angle3;
    
    return sum_of_angles;
}

function isTrinagle(){
    


    const total_angle = calculateAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

    if(total_angle == 180){
        output.innerHTML= "Yay, the angles form a Traingle";
    }else{
        output.innerHTML="Oops!, the angles don't form a Traingle";
    }
    
}

isTriangleBtn.addEventListener("click",isTrinagle)