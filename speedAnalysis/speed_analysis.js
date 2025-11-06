let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
function startTest() {
    document.getElementById("inputText").value = testText;
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();
}

function endTest() {
    endTime = new Date().getTime();
    document.getElementById("userInput").readOnly = true;
    var timeElapsed = (endTime - startTime) / 1000;
    var userTypedText = document.getElementById("userInput").value;

    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;
    var totalLength = userTypedText.length;
    var wpm = 0;

    if ( timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);    
    }
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>タイピングテストの結果:</h2>" +
    "<p>合計の長さ: " + totalLength + "</p>" +
    "<p>入力した単語数: " + typedWords + "</p>" +
    "<p>経過時間: " + timeElapsed.toFixed(2) + " 秒</p>" +
    "<p>分あたりの単語数 (WPM): " + wpm + "</p>";
}