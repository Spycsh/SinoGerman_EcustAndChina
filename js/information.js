function display(){
    document.getElementById("box1").style.display = "block";
}

function displayTHL(){
    document.getElementById("box2").style.display = "block";
}

function disappear(){
    document.getElementById("box1").style.display = "none";
}

function disappearTHL(){
    document.getElementById("box2").style.display = "none";
}

function displayGP(){
    document.getElementById("box3").style.display = "block";
}

function disappearGP(){
    document.getElementById("box3").style.display = "none";
}

function displayGPTHL(){
    document.getElementById("box4").style.display = "block";
}

function disappearGPTHL(){
    document.getElementById("box4").style.display = "none";
}

function mouseOnCal(){
    document.getElementById("calculateBtn").style.backgroundColor = "#fcf5d9";
    document.getElementById("calculateBtn").style.backgroundImage = "linear-gradient(#fceaab, #fae185, #fcf5d9)";
    document.getElementById("calculateBtn").style.borderColor = "#f2d359";
}

function mouseOutCal(){
    document.getElementById("calculateBtn").style.backgroundImage = "linear-gradient(#ffef7c,#ffd86b,#ffe272)";
    document.getElementById("calculateBtn").style.borderColor = "#c38e00";
}

// hover add button
function mouseOnAdd1(){
    document.getElementById("addBtn1").style.background = "url('css/images/addBtn2.png')"
}

function mouseOutAdd1(){
    document.getElementById("addBtn1").style.background = "url('css/images/addBtn.png')"
}

function mouseOnAdd2(){
    document.getElementById("addBtn2").style.background = "url('css/images/addBtn2.png')"
}

function mouseOutAdd2(){
    document.getElementById("addBtn2").style.background = "url('css/images/addBtn.png')"
}

// hover delete button
function mouseOnDelete1(){
    document.getElementById("deleteBtn1").style.background = "url('css/images/deleteBtn2.png')"
}

function mouseOutDelete1(){
    document.getElementById("deleteBtn1").style.background = "url('css/images/deleteBtn.png')"
}

function mouseOnDelete2(){
    document.getElementById("deleteBtn2").style.background = "url('css/images/deleteBtn2.png')"
}

function mouseOutDelete2(){
    document.getElementById("deleteBtn2").style.background = "url('css/images/deleteBtn.png')"
}

// hover edit button
function mouseOnEdit1(){
    document.getElementById("editBtn1").style.background = "url('css/images/editBtn2.png')"
}

function mouseOnEdit2(){
    document.getElementById("editBtn2").style.background = "url('css/images/editBtn2.png')"
}

function mouseOutEdit1(){
    document.getElementById("editBtn1").style.background = "url('css/images/editBtn.png')"
}

function mouseOutEdit2(){
    document.getElementById("editBtn2").style.background = "url('css/images/editBtn.png')"
}

// hover reset button
function mouseOnReset1(){
    document.getElementById("resetBtn1").style.background = "url('css/images/resetBtn2.png')"
}

function mouseOnReset2(){
    document.getElementById("resetBtn2").style.background = "url('css/images/resetBtn2.png')"
}

function mouseOutReset1(){
    document.getElementById("resetBtn1").style.background = "url('css/images/resetBtn.png')"
}

function mouseOutReset2(){
    document.getElementById("resetBtn2").style.background = "url('css/images/resetBtn.png')"
}


