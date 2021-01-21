var submit = document.getElementById("submit-button");

submit.addEventListener("click", function () {
    projects = document.getElementById("projects").value;
    labs = document.getElementById("labs").value;
    exams = document.getElementById("exams").value;
    homework = document.getElementById("homework").value;
    currentEvents = document.getElementById("current-events").value;

    var total = ((projects * 5) + (labs * 30) + (exams * 55) + (homework * 7) + (currentEvents * 3))/100;
 
    if (total >= 93) {
        alert("You got an A with " + total + "%");
    }
    else if (total >= 90) {
        alert("You got an A- with " + total + "%");
    }
    else if (total >= 87) {
        alert("You got an B+ with " + total + "%");
    }
    else if (total >= 83) {
        alert("You got an B with " + total + "%");
    }
    else if (total >= 80) {
        alert("You got an B- with " + total + "%");
    }
    else if (total >= 77) {
        alert("You got an C+ with " + total + "%");
    }
    else if (total >= 73) {
        alert("You got an C with " + total + "%");
    }
    else if (total >= 70) {
        alert("You got an C- with " + total + "%");
    }
    else if (total >= 67) {
        alert("You got an D+ with " + total + "%");
    }
    else if (total >= 63) {
        alert("You got an D with " + total + "%");
    }
    else if (total >= 60) {
        alert("You got an D- with " + total + "%");
    }
    else if (total < 60) {
        alert("You got an F with " + total + "%");
    }
});