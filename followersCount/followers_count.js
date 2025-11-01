let count = 0
function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}
function checkCountValue() {
    if (count === 10) {
        alert("あなたのInstagram投稿が10人のフォロワーを獲得しました！おめでとうございます！");  
    } else if (count === 20) {
        alert("あなたのInstagram投稿が20人のフォロワーを獲得しました！その調子です！");
    }
}
function resetCount() {
    count = 0;
    displayCount();
    alert('フォロワー数がリセットされました');
}