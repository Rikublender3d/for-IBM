var xhr = new XMLHttpRequest();
var url = './health_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
        // JSONデータから記事を取得
        var articles = xhr.response.articles;
        var articlesContainer = document.getElementById('articles');
        
        // 各記事をループで処理
        articles.forEach(function(article) {
            // 記事用のdivを作成
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');
            
            // タイトルを作成
            var title = document.createElement('h2');
            title.textContent = article.title;
            
            // 説明を作成
            var description = document.createElement('p');
            description.textContent = article.description;
            
            // 「達成方法」のヘッダーを作成
            var waysHeader = document.createElement('h3');
            waysHeader.textContent = '達成方法:';
            
            // 達成方法のリストを作成
            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function(way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });
            
            // 全ての要素を記事divに追加
            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            
            // 記事をページに追加
            articlesContainer.appendChild(articleDiv);
        });
    } else {
        console.error('データの取得に失敗しました');
    }
};
xhr.send();