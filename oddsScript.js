const oddsoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '35ae043db2msh31e6f118f6fc8f9p11ee0fjsn977b28636f2e',
		'X-RapidAPI-Host': 'odds.p.rapidapi.com'
	}
};

fetch('https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/odds?regions=us&oddsFormat=american&markets=totals&dateFormat=iso', oddsoptions)
  .then((response) => response.json())
  .then((odds) => {
    const teamOdds = odds;
    const team_odds = JSON.stringify(teamOdds);
    localStorage.setItem("teamOdds", team_odds);

    let text = localStorage.getItem("teamOdds");
    let nfl_odds = JSON.parse(text);

    document.getElementById('sportsbook').innerHTML = nfl_odds[0].bookmakers[1].title;

    document.getElementById('homeTeam1').innerHTML = nfl_odds[0].home_team;

    document.getElementById('awayTeam1').innerHTML = nfl_odds[0].away_team;

    document.getElementById('cover1').innerHTML = nfl_odds[0].bookmakers[1].markets[0].outcomes[0].name;

    document.getElementById('cover2').innerHTML = nfl_odds[0].bookmakers[1].markets[0].outcomes[1].name;

    document.getElementById('price1').innerHTML = nfl_odds[0].bookmakers[1].markets[0].outcomes[0].price;

    document.getElementById('price2').innerHTML = nfl_odds[0].bookmakers[1].markets[0].outcomes[1].price;

    document.getElementById('point1').innerHTML = nfl_odds[0].bookmakers[1].markets[0].outcomes[0].point;

    document.getElementById('point2').innerHTML = nfl_odds[0].bookmakers[1].markets[0].outcomes[1].point;

    //

    document.getElementById('sportsbook2').innerHTML = nfl_odds[1].bookmakers[4].title;

    document.getElementById('homeTeam2').innerHTML = nfl_odds[1].home_team;

    document.getElementById('awayTeam2').innerHTML = nfl_odds[1].away_team;

    document.getElementById('cover3').innerHTML = nfl_odds[1].bookmakers[4].markets[0].outcomes[0].name;

    document.getElementById('cover4').innerHTML = nfl_odds[1].bookmakers[4].markets[0].outcomes[1].name;

    document.getElementById('price3').innerHTML = nfl_odds[1].bookmakers[4].markets[0].outcomes[0].price;

    document.getElementById('price4').innerHTML = nfl_odds[1].bookmakers[4].markets[0].outcomes[1].price;

    document.getElementById('point3').innerHTML = nfl_odds[1].bookmakers[4].markets[0].outcomes[0].point;

    document.getElementById('point4').innerHTML = nfl_odds[1].bookmakers[4].markets[0].outcomes[1].point;
    
    //

    document.getElementById('sportsbook3').innerHTML = nfl_odds[2].bookmakers[5].title;

    document.getElementById('homeTeam3').innerHTML = nfl_odds[2].home_team;

    document.getElementById('awayTeam3').innerHTML = nfl_odds[2].away_team;

    document.getElementById('cover5').innerHTML = nfl_odds[2].bookmakers[5].markets[0].outcomes[0].name;

    document.getElementById('cover6').innerHTML = nfl_odds[2].bookmakers[5].markets[0].outcomes[1].name;

    document.getElementById('price5').innerHTML = nfl_odds[2].bookmakers[5].markets[0].outcomes[0].price;

    document.getElementById('price6').innerHTML = nfl_odds[2].bookmakers[5].markets[0].outcomes[1].price;

    document.getElementById('point5').innerHTML = nfl_odds[2].bookmakers[5].markets[0].outcomes[0].point;

    document.getElementById('point6').innerHTML = nfl_odds[2].bookmakers[5].markets[0].outcomes[1].point;

    //

    document.getElementById('sportsbook4').innerHTML = nfl_odds[3].bookmakers[2].title;

    document.getElementById('homeTeam4').innerHTML = nfl_odds[3].home_team;

    document.getElementById('awayTeam4').innerHTML = nfl_odds[3].away_team;

    document.getElementById('cover7').innerHTML = nfl_odds[3].bookmakers[2].markets[0].outcomes[0].name;

    document.getElementById('cover8').innerHTML = nfl_odds[3].bookmakers[2].markets[0].outcomes[1].name;

    document.getElementById('price7').innerHTML = nfl_odds[3].bookmakers[2].markets[0].outcomes[0].price;

    document.getElementById('price8').innerHTML = nfl_odds[3].bookmakers[2].markets[0].outcomes[1].price;

    document.getElementById('point7').innerHTML = nfl_odds[3].bookmakers[2].markets[0].outcomes[0].point;

    document.getElementById('point8').innerHTML = nfl_odds[3].bookmakers[2].markets[0].outcomes[1].point;
});