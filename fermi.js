var numberCorrect = -1;
var qNums;
function getRandom(arr) {
    var allquestions = [];
    for (var i = 0; i<arr.length; i++) {
        allquestions.push(arr[i]);
    }
    
    var actualquestions = [];
    var i = 0;
    while (i < 20) {
        var x = Math.floor(Math.random()*allquestions.length); //random number from 0 to the length of the modified array
        actualquestions.push(allquestions[x]);
        allquestions.splice(x, 1);
        i++;
    }    
    return actualquestions;
}

function check() {
    //window.numberCorrect = -1;
    var c = 0;
    var q1 = document.quiz.n1.value;
    var q2 = document.quiz.n2.value;
    var q3 = document.quiz.n3.value;
    var q4 = document.quiz.n4.value;
    var q5 = document.quiz.n5.value;
    var q6 = document.quiz.n6.value;
    var q7 = document.quiz.n7.value;
    var q8 = document.quiz.n8.value;
    var q9 = document.quiz.n9.value;
    var q10 = document.quiz.n10.value;
    var q11 = document.quiz.n11.value;
    var q12 = document.quiz.n12.value;
    var q13 = document.quiz.n13.value;
    var q14 = document.quiz.n14.value;
    var q15 = document.quiz.n15.value;
    var q16 = document.quiz.n16.value;
    var q17 = document.quiz.n17.value;
    var q18 = document.quiz.n18.value;
    var q19 = document.quiz.n19.value;
    var q20 = document.quiz.n20.value;
    var q21 = document.quiz.n21.value;
    var q22 = document.quiz.n22.value;
    var q23 = document.quiz.n23.value;
    var q24 = document.quiz.n24.value;
    var q25 = document.quiz.n25.value;
    
    if (q1 == "7"){ c+=1; }
    if (q2 == "13"){ c+=1; }
    if (q3 == "13"){ c+=1; }
    if (q4 == "9"){ c+=1; }
    if (q5 == "17"){ c+=1; }
    if (q6 == "10"){ c+=1; }
    if (q7 == "0"){ c+=1; }
    if (q8 == "-5"){ c+=1; }
    if (q9 == "6"){ c+=1; }
    if (q10 == "17"){ c+=1; }
    if (q11 == "4"){ c+=1; }
    if (q12 == "4"){ c+=1; }
    if (q13 == "3"){ c+=1; }
    if (q14 == "13"){ c+=1; }
    if (q15 == "3"){ c+=1; }
    if (q16 == "-10"){ c+=1; }
    if (q17 == "6"){ c+=1; }
    if (q18 == "2"){ c+=1; }
    if (q19 == "1"){ c+=1; }
    if (q20 == "7"){ c+=1; }
    if (q21 == "7"){ c+=1; }
    if (q22 == "3"){ c+=1; }
    if (q23 == "2"){ c+=1; }
    if (q24 == "2"){ c+=1; }
    if (q25 == "11"){ c+=1; }
    
    localStorage.setItem('numberCorrect', c)
    location.assign("fermiconc.html");

}

function loadQuestions() {
    var questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    var qDisplayNums = getRandom(questions);
    localStorage.setItem('qDisplayNums', qDisplayNums);
    //document.write(qDisplayNums.length);
    for (var i = 0; i < qDisplayNums.length; i++) {
        document.getElementById("q" + qDisplayNums[i]).style.display = "none";
    }
}

function loadAnswers() {
    let numberCorrect = localStorage.getItem('numberCorrect');
    res.textContent = "You're score: " + `${numberCorrect}`;
    var qDisplayNums = localStorage.getItem('qDisplayNums');
    qDisplayNums = qDisplayNums.split(",");
    for (var j = 0; j < qDisplayNums.length; j++) {
        document.getElementById("q" + qDisplayNums[j]).style.display = "none";
    }
    
}