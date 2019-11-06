var arithmetic = [
    {
        "score": [98, 100],
        "rank": "A",
        "gradePoint": 1.0,
    },
    {
        "score": [94, 97],
        "rank": "A-",
        "gradePoint": 1.3,
    },
    {
        "score": [89, 93],
        "rank": "B+",
        "gradePoint": 1.7,
    },
    {
        "score": [85, 88],
        "rank": "B",
        "gradePoint": 2.0,
    },
    {
        "score": [80, 84],
        "rank": "B-",
        "gradePoint": 2.3,
    },
    {
        "score": [76, 79],
        "rank": "C+",
        "gradePoint": 2.7,
    },
    {
        "score": [72, 75],
        "rank": "C",
        "gradePoint": 3.0,
    },
    {
        "score": [67, 71],
        "rank": "C-",
        "gradePoint": 3.3,
    },
    {
        "score": [62, 66],
        "rank": "D+",
        "gradePoint": 3.7,
    },
    {
        "score": [60, 61],
        "rank": "D",
        "gradePoint": 4.0,
    },
    {
        "score": [1, 59],
        "rank": "F",
        "gradePoint": 5.0,
    }
]


function calculate() {
    if (validation()) {
        // calculate Ecust average GPA
        var allSumEcust = 0;
        var creditsSumEcust = 0;
        var scoresEcust = document.getElementsByClassName("EcustScore");
        var credits = document.getElementsByClassName("EcustCredit");
        var coursesNameEcust = document.getElementsByClassName("EcustCourseName");
        var coursesNameTHL = document.getElementsByClassName("THLCourseName");
        var convertScoresEcust = [];

        // conversion of Ecust GPA -> THL GPA
        for (var i = 0; i < scoresEcust.length; i++) {
            for (var j = 0; j < arithmetic.length; j++) {
                if (scoresEcust[i].value == arithmetic[j].rank) {
                    convertScoresEcust[i] = arithmetic[j].gradePoint;   // convert ("A"||"A-"||"B+"||"B"||"B-"||"C+"||"C"||"C-"||"D+"||"D"||"F") to gradePoint
                }

                if (parseInt(scoresEcust[i].value) >= arithmetic[j].score[0] && parseInt(scoresEcust[i].value) <= arithmetic[j].score[1]) {
                    convertScoresEcust[i] = arithmetic[j].gradePoint;        // convert [0,100] score to gradePoint
                }
            }
            creditsSumEcust += parseFloat(credits[i].value);
            allSumEcust = allSumEcust + convertScoresEcust[i] * parseFloat(credits[i].value);
        }
        ecustGPA = allSumEcust / creditsSumEcust; // average gpa for Ecust // float

        // calculate THL average GPA
        var allSumTHL = 0;
        var creditsSumTHL = 0;
        var scoresTHL = document.getElementsByClassName("THLScore");
        var credits = document.getElementsByClassName("THLCredit");

        for (var i = 0; i < scoresTHL.length; i++) {
            allSumTHL += scoresTHL[i].value * credits[i].value;
            creditsSumTHL += parseFloat(credits[i].value);
        }
        THLGPA = allSumTHL / creditsSumTHL; // average gpa for THL

        allAverageGPA = (allSumEcust + allSumTHL) / (creditsSumEcust + creditsSumTHL); // average gpa for two school

        alert(allAverageGPA);



        // save the whole credits of each
        // 总学分
        sessionStorage.setItem("creditsSumEcust", creditsSumEcust.toFixed(1));
        sessionStorage.setItem("creditsSumTHL", creditsSumTHL.toFixed(1));
        sessionStorage.setItem("creditsSumAll", (creditsSumEcust + creditsSumTHL).toFixed(1));


        // save average GPA for each school and the overall 
        // 平均绩点
        sessionStorage.setItem("allAverageGPA", allAverageGPA.toFixed(2));
        sessionStorage.setItem("ecustGPA", ecustGPA.toFixed(2));
        sessionStorage.setItem("THLGPA", THLGPA.toFixed(2));


        bestWorstScoreEcust(convertScoresEcust, coursesNameEcust);

        var scoresTHLarr = [];
        for (var i = 0; i < scoresTHL.length; i++) {
            scoresTHLarr.push(scoresTHL[i].value);
        }
        bestWorstScoreTHL(scoresTHLarr, coursesNameTHL);

        // display the statistics
        window.open("answer.html");
    }
    else{
        alert("Please check input!");
    }


}

// find and save the highest score and the lowest score during studying in each school
function bestWorstScoreEcust(convertScoresEcust, coursesNameEcust) {

    var bestScoreEcust = Math.min.apply(null, convertScoresEcust); // Smaller scores is better in German system
    var worstScoreEcust = Math.max.apply(null, convertScoresEcust);

    bestScoreEcustName = []
    for (var i = 0; i < convertScoresEcust.length; i++) {
        if (convertScoresEcust[i] == bestScoreEcust) {
            bestScoreEcustName.push(coursesNameEcust[i].value);  // the courses name with the same best score
        }
    }

    sessionStorage.setItem("bestScoreEcust", bestScoreEcust.toFixed(1));
    sessionStorage.setItem("bestScoreEcustName", bestScoreEcustName);


    worstScoreEcustName = []
    for (var i = convertScoresEcust.length - 1; i >= 0; i--) {
        if (convertScoresEcust[i] == worstScoreEcust) {
            worstScoreEcustName.push(coursesNameEcust[i].value);
        }
    }
    worstScoreEcustName.reverse();

    sessionStorage.setItem("worstScoreEcust", worstScoreEcust.toFixed(1));
    sessionStorage.setItem("worstScoreEcustName", worstScoreEcustName);

}


function bestWorstScoreTHL(scoresTHLarr, coursesNameTHL) {

    var bestScoreTHL = Math.min.apply(null, scoresTHLarr); // Smaller scores is better in German system
    var worstScoreTHL = Math.max.apply(null, scoresTHLarr);

    bestScoreTHLName = []
    for (var i = 0; i < scoresTHLarr.length; i++) {
        if (scoresTHLarr[i] == bestScoreTHL) {
            bestScoreTHLName.push(coursesNameTHL[i].value);  // the courses name with the same best score
        }
    }

    sessionStorage.setItem("bestScoreTHL", bestScoreTHL.toFixed(1));
    sessionStorage.setItem("bestScoreTHLName", bestScoreTHLName);

    worstScoreTHLName = []
    for (var i = scoresTHLarr.length - 1; i >= 0; i--) {
        if (scoresTHLarr[i] == worstScoreTHL) {
            worstScoreTHLName.push(coursesNameTHL[i].value);
        }
    }
    worstScoreTHLName.reverse();

    sessionStorage.setItem("worstScoreTHL", worstScoreTHL.toFixed(1));
    sessionStorage.setItem("worstScoreTHLName", worstScoreTHLName);
}

// preload images
var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "css/images/addBtn2.png",
    "css/images/deleteBtn2.png",
    "css/images/editBtn2.png",
    "css/images/resetBtn2.png",
)