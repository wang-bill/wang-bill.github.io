function loadAnswers() {
    for (var i = 0; i < qDisplayNums.length; i++) {
        document.getElementById("q" + qDisplayNums[i]).style.display = "none";
    }
}