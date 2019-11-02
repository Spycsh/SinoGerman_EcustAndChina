function validation() {
    var ecustScores = document.getElementsByClassName("EcustScore");
    var validFlag = true;
    for (var i = 0; i < ecustScores.length; i++) {
        var e = ecustScores[i].value;
        if (e == "A" || e == "A-" || e == "B+" || e == "B" || e == "B-" || e == "C+" || e == "C" || e == "C-" || e == "D+" || e == "D" || e == "F") {
            continue;
        }
        else if (ecustScores[i].value.match(/^[0-9]{1,2}(\.5)?$/) != null || ecustScores[i].value == "100") {  // "">=0 so we should use parsefloat to compare
            continue;
        }
        else if (ecustScores[i].value == "") {
            ecustScores[i].value = "Empty Input!";
            ecustScores[i].style.color = "red";
            validFlag = false;
        }
        else {
            ecustScores[i].value = "Invalid Input!";
            ecustScores[i].style.color = "red";
            validFlag = false;

        }

        // add event: after display the error message in the text area
        // if the user click the text area to modify it
        // the color will turn back to black and clear the invalid input
        ecustScores[i].addEventListener("click", function () {
            if (this.value == "Empty Input!" || this.value == "Invalid Input!") {
                this.style.color = "black";
                this.value = "";
            }
        })
    }

    var THLScores = document.getElementsByClassName("THLScore");
    for (var i = 0; i < THLScores.length; i++) {
        var e = THLScores[i].value;
        // string input will be converted into a number
        if (e == 1.0 || e == 1.3 || e == 1.7 || e == 2.0 || e == 2.3 || e == 2.7 || e == 3.0 || e == 3.3 || e == 3.7 || e == 4.0 || e == 5.0) {
            continue;
        }
        else if (e == "") {
            THLScores[i].value = "Empty Input!";
            THLScores[i].style.color = "red";
            validFlag = false;

        }
        else {
            THLScores[i].value = "Invalid Input!";
            THLScores[i].style.color = "red";
            validFlag = false;

        }
        THLScores[i].addEventListener("click", function () {
            if (this.value == "Empty Input!" || this.value == "Invalid Input!") {
                this.style.color = "black";
                this.value = "";
            }
        })
    }

    var ecustCredits = document.getElementsByClassName("EcustCredit");
    for (var i = 0; i < ecustCredits.length; i++) {
        if (ecustCredits[i].value.match(/^[0-9]{1,2}(\.5)?$/) != null) {
            continue;
        }
        else if (e == "") {
            ecustCredits[i].value = "Empty Input!";
            ecustCredits[i].style.color = "red";
            validFlag = false;
        }
        else {
            ecustCredits[i].value = "Invalid Input!";
            ecustCredits[i].style.color = "red";
            validFlag = false;
        }

        ecustCredits[i].addEventListener("click", function () {
            if (this.value == "Empty Input!" || this.value == "Invalid Input!") {
                this.style.color = "black";
                this.value = "";
            }
        })
    }

    var THLCredits = document.getElementsByClassName("THLCredit");
    for (var i = 0; i < THLCredits.length; i++) {
        if (THLCredits[i].value.match(/^[0-9](\.5)?$/) != null) {
            continue;
        }
        else if (e == "") {
            THLCredits[i].value = "Empty Input!";
            THLCredits[i].style.color = "red";
            validFlag = false;
        }
        else {
            THLCredits[i].value = "Invalid Input!";
            THLCredits[i].style.color = "red";
            validFlag = false;
        }

        THLCredits[i].addEventListener("click", function () {
            if (this.value == "Empty Input!" || this.value == "Invalid Input!") {
                this.style.color = "black";
                this.value = "";
            }

        })
    }

    return validFlag;

}
