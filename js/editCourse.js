function editEcustCourseName(){
    var obj = document.getElementsByClassName("EcustCourseName");
    
    for(var i=0;i<obj.length;i++){
        if(obj[i].hasAttribute("disabled") == 1){
            obj[i].removeAttribute("disabled");
        }else{
            obj[i].setAttribute("disabled","true");
        }
    }

        
}

function editTHLCourseName(){
    var obj = document.getElementsByClassName("THLCourseName");
    
    for(var i=0;i<obj.length;i++){
        if(obj[i].hasAttribute("disabled") == 1){
            obj[i].removeAttribute("disabled");
        }else{
            obj[i].setAttribute("disabled","true");
        }
    }

        
}

function addEcustCourse() {
    var addNum = parseInt(document.getElementById("addNumEcust").value);
    var currentLen = document.getElementsByClassName("EcustScore").length;

    for (var i = 0; i < addNum; i++) {
        var N = currentLen + 1;
        var e = document.createElement("tr");
        // var nameDisabled = 0;
        var nameDisabled = document.getElementsByClassName("EcustCourseName")[0].hasAttribute("disabled");  // check if is disabled

        e.innerHTML = "<td><input class='EcustCourseName' id=" + "'" + 'course' + N + "'" + " type='text' value=" + "'" + 'course' + N + "'" + (nameDisabled ? "disabled":"") +
            "></td>" +
            "<td><input class='EcustScore' id=" + "'" + 'gradePoint' + N + "'" + " type='text'></td>" +
            "<td><input class='EcustCredit' id=" + "'" + 'credit' + N + "'" + " type='text'></td>"

        document.getElementById("table1").appendChild(e);
        currentLen += 1;
    }


}

function addTHLCourse(){
    var addNum = parseInt(document.getElementById("addNumTHL").value);
    var currentLen = document.getElementsByClassName("THLScore").length;

    for (var i = 0; i < addNum; i++) {
        var N = currentLen + 1;
        var e = document.createElement("tr");

        var nameDisabled = document.getElementsByClassName("THLCourseName")[0].hasAttribute("disabled");  // check if is disabled

        e.innerHTML = "<td><input class='THLCourseName' id=" + "'" + 'course' + N + "'" + " type='text' value=" + "'" + 'course' + N + "'" + (nameDisabled ? "disabled":"") + 
            "></td>" +
            "<td><input class='THLScore' id=" + "'" + 'gradePoint' + N + "'" + " type='text'></td>" +
            "<td><input class='THLCredit' id=" + "'" + 'credit' + N + "'" + " type='text'></td>"

        document.getElementById("table2").appendChild(e);
        currentLen += 1;
    }
}

function removeEcustCourse(){
    var removeNum = parseInt(document.getElementById("addNumEcust").value);
    var currentLen = document.getElementsByClassName("EcustScore").length;

    var table = document.getElementById("table1").childNodes; 

    var tableLength = table.length;

    // should not remove the initial table rows
    // namely the rows tbody contains
    if(tableLength - removeNum < 2){
        alert("The number of courses you want to remove is to much!")
    }
    else{
        // document.getElementById("table1").removeChild(table[4]);

        for(var i=tableLength - 1; i>=tableLength-removeNum; i--){
            document.getElementById("table1").removeChild(table[i]);
        }

    }

}

function removeTHLCourse(){
    var removeNum = parseInt(document.getElementById("addNumTHL").value);
    var currentLen = document.getElementsByClassName("THLScore").length;

    var table = document.getElementById("table2").childNodes; 

    var tableLength = table.length;

    // should not remove the initial table rows
    if(tableLength - removeNum < 2){
        alert("The number of courses you want to remove is to much!")
    }
    else{
        for(var i=tableLength - 1; i>=tableLength-removeNum; i--){
            document.getElementById("table2").removeChild(table[i]);
        }

    }
}

function resetEcustCourse() {
    var scores = document.getElementsByClassName("EcustScore");
    var points = document.getElementsByClassName("EcustCredit");
    for(var i=0;i<scores.length;i++){
        
        // reset all scores and grade point to ""
        scores[i].value = "";
        points[i].value = "";
    }
    var table = document.getElementById("table1").childNodes; 
    //NodeList(7) [text, tbody, tr, tr, tr, tr, tr]
    // delete until original tbody(5 courses) remain
    // for(var j=0;j<table.length;j++){ // table is dynamic!
    for(var j=table.length-1; j>1; j--){
        document.getElementById("table1").removeChild(table[j]);
    }
        
        
}

function resetTHLCourse() {
    var scores = document.getElementsByClassName("THLScore");
    var points = document.getElementsByClassName("THLCredit");
    for(var i=0;i<scores.length;i++){        
        // reset all scores and grade point to ""
        scores[i].value = "";
        points[i].value = "";
    }
    var table = document.getElementById("table2").childNodes; 

    for(var j=table.length-1; j>1; j--){
        document.getElementById("table2").removeChild(table[j]);
    }
        
        
}