const newsoptions = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': '35ae043db2msh31e6f118f6fc8f9p11ee0fjsn977b28636f2e',
		'X-RapidAPI-Host': 'bing-web-search1.p.rapidapi.com'
	}
};


fetch('https://bing-web-search1.p.rapidapi.com/search?q=NFL&mkt=en-us&safeSearch=Off&textFormat=Raw&freshness=Day', newsoptions)
  .then((response) => response.json())
  .then((articles) => {
    const newsArticles = articles;
    const news = JSON.stringify(newsArticles);
    localStorage.setItem("newsArticles", news);

    let text = localStorage.getItem("newsArticles");
    let news_articles = JSON.parse(text);

    document.getElementById('articleTitle1').innerHTML = news_articles.webPages.value[1].name;

    document.getElementById('articleBody1').innerHTML = news_articles.webPages.value[1].snippet;

    document.getElementById('articleURL1').innerHTML = news_articles.webPages.value[1].url;

    document.getElementById('articleTitle2').innerHTML = news_articles.webPages.value[2].name;

    document.getElementById('articleBody2').innerHTML = news_articles.webPages.value[2].snippet;

    document.getElementById('articleURL2').innerHTML = news_articles.webPages.value[2].url;

    document.getElementById('articleTitle3').innerHTML = news_articles.webPages.value[3].name;

    document.getElementById('articleBody3').innerHTML = news_articles.webPages.value[3].snippet;

    document.getElementById('articleURL3').innerHTML = news_articles.webPages.value[3].url;

});