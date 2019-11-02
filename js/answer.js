document.getElementById("ecustGPA").innerHTML = sessionStorage.getItem("ecustGPA");
document.getElementById("totalCreditsEcust").innerHTML = sessionStorage.getItem("creditsSumEcust");
document.getElementById("bestScoreEcust").innerHTML = sessionStorage.getItem("bestScoreEcust");
document.getElementById("bestScoreEcustName").innerHTML = sessionStorage.getItem("bestScoreEcustName");
document.getElementById("worstScoreEcust").innerHTML = sessionStorage.getItem("worstScoreEcust");
document.getElementById("worstScoreEcustName").innerHTML = sessionStorage.getItem("worstScoreEcustName");


document.getElementById("THLGPA").innerHTML = sessionStorage.getItem("THLGPA");
document.getElementById("totalCreditsTHL").innerHTML = sessionStorage.getItem("creditsSumTHL");
document.getElementById("bestScoreTHL").innerHTML = sessionStorage.getItem("bestScoreTHL");
document.getElementById("bestScoreTHLName").innerHTML = sessionStorage.getItem("bestScoreTHLName");
document.getElementById("worstScoreTHL").innerHTML = sessionStorage.getItem("worstScoreTHL");
document.getElementById("worstScoreTHLName").innerHTML = sessionStorage.getItem("worstScoreTHLName");

document.getElementById("totalGPA").innerHTML = sessionStorage.getItem("allAverageGPA");
document.getElementById("totalCredits").innerHTML = sessionStorage.getItem("creditsSumAll");

document.getElementById("bestScoreEcustName").setAttribute("title",  sessionStorage.getItem("bestScoreEcustName"));
document.getElementById("worstScoreEcustName").setAttribute("title", sessionStorage.getItem("worstScoreEcustName"));
document.getElementById("bestScoreTHLName").setAttribute("title", sessionStorage.getItem("bestScoreTHLName"));
document.getElementById("worstScoreTHLName").setAttribute("title", sessionStorage.getItem("worstScoreTHLName"));
