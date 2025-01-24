function addition () {
    const display = document.getElementById('display').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "") {
        let answer;
        if(operator == "+") {
            answer = Number(display2) + Number(display);
        }
        document.getElementById('display2').value = answer;
        document.getElementById('display').value = "0";
    } 

    else {
        document.getElementById('display').value = "0";
        document.getElementById('display2').value = display;
    }

    document.getElementById('operator').value = "+";
}


function subtraction () {
    const display = document.getElementById('display').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "") {
        let answer;
        if(operator == "-") {
            answer = Number(display2) + Number(display);
        }
        document.getElementById('display2').value = answer;
        document.getElementById('display').value = "0";
    } 

    else {
        document.getElementById('display').value = "0";
        document.getElementById('display2').value = display;
    }

    document.getElementById('operator').value = "-";
   
} 

function multiplication () {
    const display = document.getElementById('display').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "") {
        let answer;
        if(operator == "*") {
            answer = Number(display2) + Number(display);
        }
        document.getElementById('display2').value = answer;
        document.getElementById('display').value = "0";
    } 

    else {
        document.getElementById('display').value = "0";
        document.getElementById('display2').value = display;
    }

    document.getElementById('operator').value = "*";

} 

function division () {
    const display = document.getElementById('display').value;
    const display2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (display2 !== "") {
        let answer;
        if(operator == "/") {
            answer = Number(display2) + Number(display);
        }
        document.getElementById('display2').value = answer;
        document.getElementById('display').value = "0";
    } 

    else {
        document.getElementById('display').value = "0";
        document.getElementById('display2').value = display;
    }

   
    document.getElementById('operator').value = "/";
    
} 

function equals () {
    let num = document.getElementById('display').value;
    let num2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;
    let answer;
    
    if(operator === "+") {
        answer = Number(num) + Number(num2);
    }
    else if(operator === "-") {
        answer = Number(num2) - Number(num);
    }
    else if(operator === "*") {
        answer = Number(num) * Number(num2);
    }
    else if(operator === "/") {
        if(Number(num2) !== 0){
            answer = Number(num)/Number(num)/Number(num2);
        }else{
            answer = "Error:Division by zero";

        }
    }

    document.getElementById('display2').value = answer;
    document.getElementById('display').value = "";
    document.getElementById('operator').value = "";

} 

function dot () {
    document.getElementById('operator').value = ".";
    const display = document.getElementById('display').value;

    if (display !== "0") {
        document.getElementById('display2').value = display;
        document.getElementById('display').value = "0";
    } 
} 