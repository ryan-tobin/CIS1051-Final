const newsoptions = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': '35ae043db2msh31e6f118f6fc8f9p11ee0fjsn977b28636f2e',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
};


fetch('https://bing-news-search1.p.rapidapi.com/news/search?q=NFL&freshness=Day&textFormat=Raw&safeSearch=Off', newsoptions)
  .then((response) => response.json())
  .then((articles) => {
    const newsArticles = articles;
    const news = JSON.stringify(newsArticles);
    localStorage.setItem("newsArticles", news);

    let text = localStorage.getItem("newsArticles");
    let news_articles = JSON.parse(text);

    document.getElementById('articleTitle1').innerHTML = news_articles.value[0].name;

    document.getElementById('articleBody1').innerHTML = news_articles.value[0].description;

    document.getElementById('articleSource1').innerHTML = news_articles.value[0].provider[0].name;

    document.getElementById('articleURL1').innerHTML = news_articles.value[0].url;

    document.getElementById('articleImage1').src = news_articles.value[0].image.thumbnail.contentUrl;
});