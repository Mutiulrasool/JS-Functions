document.addEventListener("DOMContentLoaded", function () {

    function myFunction() {
        var currentTimeDate = new Date();
        document.getElementById("task-1-p").innerHTML = currentTimeDate;
    }

    function myFunction1() {
        var firstName = prompt("please enter your first name")
        var lastName = prompt("please enter your last name");
        var fullName = () => {
            return "welcome! " + firstName + " " + lastName;
        }
        document.getElementById("task-2-p").innerHTML = fullName()
    }
    document.querySelector(".task-2-btn").addEventListener("click", myFunction1);
    
    function myFunction3() {
        var num1 = parseInt(prompt("please enter 1st number"));
        var num2 = parseInt(prompt("please enter 2nd number"));
        var operatorType = prompt("please select one of these operators: +,-,*,/");

        var mathOperation = () => {
            if (operatorType === "+") {
                return num1 + num2;
            }
            else if (operatorType === "-") {
                return num1 - num2;
            }
            else if (operatorType === "*") {
                return num1 * num2;
            }
            else if (operatorType === "/") {
                return num1 / num2;
            }
            else {
                alert("Make sure that you have entered right inputs")
            }
        }
        document.getElementById("task-3-p").innerHTML = "Results according to your inputs: " + mathOperation();
        
    }
    document.querySelector("#task-3-btn").addEventListener("click", myFunction3);












});
