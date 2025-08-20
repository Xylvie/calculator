/* Taking the element with screen ID to show inputs */
const display = document.getElementById('screen');

/* Showing the userInput value from the buttons to the screen */
function inputValue(value) {
    display.value += value;
}

/* Calculate function for the = button which is responsible for calculating the user's input from the display */
function calculate() {

    /* If the display.value is equals to an empty string when the = button is clicked */
    if (display.value == " ") {
        /* display will be an empty string still instead of undefined */
        display.value = " "

    /* if display.value is not === to " " */
    } else {

        /* try to calculate the user input into the display or the display.value */
        try {
            /* using eval() method to calculate the display.value*/
            display.value = eval(display.value);

        /* Return an error of the display.value or user input cannot be evalvuated*/
        } catch (e) {

            /* Return a value of an empty string*/
            display.value = " ";
        }
        
    }
}

/* Clear button function */
function clearValue() {

    /* Ones the clear button is clicked the display.value will be an empty string*/
    display.value = " " ;

}
