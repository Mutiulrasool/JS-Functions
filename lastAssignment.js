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

    function myFunction4() {
        var num1st = parseInt(prompt("please enter the starting number"));
        var num2nd = parseInt(prompt("please enter the ending number"));
        var result = '';
        for (let i = num1st; i <= num2nd; i++) {
            result += i + "<br>";
        }
        document.getElementById("task-4-p").innerHTML = "Numbers between your provided break points: " + "<br>" + result;
        document.getElementById("task-4-p").style.color = "#009B77"
        document.getElementById("task-4-p").style.fontWeight = "bold"
    }
    document.querySelector("#task-4-btn").addEventListener("click", myFunction4);

    function myFunction5() {
        var width = parseInt(prompt("plese enter the width in CM of triangle(value should be in numbers)"));
        var hight = parseInt(prompt("plese enter the hight in CM of triangle(value should be in numbers)"));
        var resultToShow = () => {
            return width * hight;
        }

        document.getElementById("task-5-p").innerHTML = "The total area of the triangle is: " + resultToShow(width, hight) + "CM";
        console.log(resultToShow(width, hight));
    }

    document.querySelector("#task-5-btn").addEventListener("click", myFunction5);

    function myFunction6() {
        var userWord = prompt("Enter any word to check if its a palindrome word or not");

        var collected = "";
        for (var j = userWord.length - 1; j >= 0; j--) {
            collected += userWord[j];
            console.log(collected);
        }
        var finalReversWord = "";
        for (x of collected) {
            finalReversWord += x;
            console.log(finalReversWord);
        }
        if (userWord === finalReversWord) {
            alert("yes! its a palindrome word")
        }
        else {
            alert("No! its not a palidrome word")
        }
    }
    document.querySelector("#task-6-btn").addEventListener("click", myFunction6);

    function myFunction7() {
        var sentence = "the quick brown fox";
        var word = sentence.split(" ");
        console.log(typeof word)
        for (let i = 0; i < word.length; i++) {
            word[i] = word[i][0].toUpperCase() + word[i].substring(1);
        }
        document.getElementById("task-7-p").innerHTML = word;
    }

    document.querySelector("#task-7-btn").addEventListener("click", myFunction7);

    function myFunction8() {
        var fullSentence = "Web Development Tutorial";
        var convertToArray = fullSentence.split(" ");
        console.log(convertToArray);
        var longestWord = " ";
        for (let i = 0; i < convertToArray.length; i++) {
            if (convertToArray[i].length > longestWord.length) {
                longestWord = convertToArray[i];
            }
        }
        document.getElementById("task-8-p").innerHTML = "In the paragraph:'Web Development Tutorial' " + "<br>" + "The longest word is: " + longestWord;
        console.log(longestWord)
    }
    document.querySelector("#task-8-btn").addEventListener("click", myFunction8);

    function myFunction9(wordByUser, specifiedLetter) {
        var wordByUser = prompt("Please give us a word");
        var specifiedLetter = prompt("write a letter to find in the word you provided");

        var findingTheLetter = wordByUser.indexOf(specifiedLetter);
        document.getElementById("task-9-p").innerHTML = findingTheLetter;

    }
    document.querySelector("#task-9-btn").addEventListener("click", myFunction9);




});
