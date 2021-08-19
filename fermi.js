function getRandom(arr) {
    var allquestions = [];
    for (var i = 0; i<arr.length; i++) {
        allquestions.push(arr[i]);
    }
    var actualquestions = [];
    
    var i = 0;
    while (i < 3) {
        var x = Math.floor(Math.random()*allquestions.length); //random number from 0 to the length of the modified array
        actualquestions.push(allquestions[x]);
        allquestions.splice(x, 1);
        i++;
    }    
    return actualquestions;
}

function check() {

    var c = 0;
    var q1 = document.quiz.n1.value;
    var q2 = document.quiz.n2.value;
    var q3 = document.quiz.n3.value;
    var q4 = document.quiz.n4.value;
    var q5 = document.quiz.n5.value;
    

    if (q1 == "2") {
        c +=1;
    }
    if (q2 == "3") {
        c+=1;
    }
    if (q3 == "4") {
        c+=1;
    }
    if (q4 == "5") {
        c+=1;
    }
    if (q5 == "6") {
        c+=1;
    }

    document.write(c);
}

function loadQuestions() {
    var questions = [1, 2, 3, 4, 5];
    const qDisplayNums = getRandom(questions);
    for (var i = 0; i < qDisplayNums.length; i++) {
        document.getElementById("q" + qDisplayNums[i]).style.display = "none";
    }
}

function check() {

    var c = 0;
    var q1 = document.quiz.n1.value;
    var q2 = document.quiz.n2.value;
    var q3 = document.quiz.n3.value;
    var q4 = document.quiz.n4.value;
    var q5 = document.quiz.n5.value;
    
    if (q1 == "2") {
        c +=1;
        document.getElementById("q1").add("correct");
    } else {
        document.getElementById("q1").add("incorrect");
    }

    if (q2 == "3") {
        c+=1;
    }
    if (q3 == "4") {
        c+=1;
    }
    if (q4 == "5") {
        c+=1;
    }
    if (q5 == "6") {
        c+=1;
    }

    result.textContent= `${c}`;
}