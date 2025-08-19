const display = document.getElementById('screen');


function inputValue(value) {
    display.value += value;
}

function calculate() {

    if (display.value == " ") {

        display.value = " "

    } else {

        try {
            display.value = eval(display.value);
        } catch (e) {
            display.value = " ";
        }
        
    }
}

function clearValue() {
    display.value = " " ;
}