fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=756",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("conner").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingConner").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsConner").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsConner").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprConner").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=757",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("kIngram").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingkIngram").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardskIngram").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownskIngram").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprkIngram").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=532",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("patterson").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingPatterson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsPatterson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsPatterson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprPatterson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=529",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("allgeier").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingAllgeier").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsAllgeier").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsAllgeier").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprAllgeier").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=296",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("edwards").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingEdwards").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsEdwards").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsEdwards").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprEdwards").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=295",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("drake").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingDrake").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsDrake").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsDrake").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprDrake").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });
  
  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1421",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("singletary").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingSingletary").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsSingletary").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsSingletary").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprSingletary").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1417",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("jCook").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingjCook").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsjCook").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsjCook").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprjCook").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1345",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("foreman").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingForeman").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsForeman").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsForeman").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprForeman").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1346",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("hubbard").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingHubbard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsHubbard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsHubbard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprHubbard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1126",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("montgomery").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingMontgomery").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsMontgomery").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsMontgomery").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprMontgomery").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1124",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("evans").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingEvans").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsEvans").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsEvans").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprEvans").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=686",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("mixon").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingMixon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsMixon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsMixon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprMixon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=687",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("perine").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingPerine").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsPerine").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsPerine").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprPerine").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=610",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("chubb").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingChubb").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsChubb").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsChubb").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprChubb").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=613",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("hunt").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingHunt").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsHunt").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsHunt").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprHunt").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2080",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("elliot").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingElliot").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsElliot").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsElliot").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprElliot").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2082",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("pollard").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingPollard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsPollard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsPollard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprPollard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1929",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("murray").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingMurray").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsMurray").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsMurray").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprMurray").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=982",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("mack").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingMack").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsMack").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsMack").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprMack").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=455",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("swift").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingSwift").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsSwift").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsSwift").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprSwift").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=456",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("williams").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingWilliams").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsWilliams").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsWilliams").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprWilliams").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1054",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("jones").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingJones").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsJones").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsJones").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprJones").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1051",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("dillon").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingDillon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsDillon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsDillon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprDillon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1859",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("pierce").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingPierce").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsPierce").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsPierce").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprPierce").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1855",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("burkhead").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingBurkhead").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsBurkhead").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsBurkhead").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprBurkhead").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1494",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("taylor").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingTaylor").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsTaylor").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsTaylor").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprTaylor").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1420",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("moss").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingMoss").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsMoss").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsMoss").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprMoss").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=72",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("etienne").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingEtienne").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsEtienne").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsEtienne").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprEtienne").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=73",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("hasty").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingHasty").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsHasty").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsHasty").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprHasty").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1202",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("pacheco").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingPacheco").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsPacheco").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsPacheco").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprPacheco").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1201",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("mckinnon").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingMckinnon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsMckinnon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsMckinnon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprMckinnon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2153",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("ekeler").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingEkeler").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsEkeler").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsEkeler").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprEkeler").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2154",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("kelley").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingKelley").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsKelley").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsKelley").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprKelley").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2229",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("akers").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingAkers").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsAkers").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsAkers").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprAkers").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2234",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("jwilliams").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingjWilliams").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsjWilliams").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsjWilliams").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprjWilliams").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=6",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("jacobs").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingJacobs").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsJacobs").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsJacobs").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprJacobs").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=3",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("abdullah").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingAbdullah").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsAbdullah").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsAbdullah").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprAbdullah").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=985",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("wilson").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingWilson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsWilson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsWilson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprWilson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1786",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("gaskin").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingGaskin").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsGaskin").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsGaskin").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprGaskin").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2311",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("cook").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingCook").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsCook").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsCook").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprCook").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2313",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("mattison").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingMattison").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsMattison").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsMattison").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprMattison").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=145",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("stevenson").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingStevenson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsStevenson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsStevenson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprStevenson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=143",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("harris").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingHarris").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsHarris").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsHarris").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprHarris").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1928",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("kamara").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingKamara").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsKamara").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsKamara").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprKamara").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1926",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("ingram").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingIngram").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsIngram").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsIngram").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprIngram").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=219",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("barkley").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingBarkley").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsBarkley").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsBarkley").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprBarkley").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=220",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("breida").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingBreida").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsBreida").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsBreida").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprBreida").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=906",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("carter").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingCarter").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsCarter").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsCarter").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprCarter").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=908",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("johnson").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingJohnson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsJohnson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsJohnson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprJohnson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=834",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("sanders").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingSanders").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsSanders").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsSanders").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprSanders").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=833",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("gainwell").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingGainwell").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsGainwell").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsGainwell").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprGainwell").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1565",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("nHarris").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingnHarris").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsnHarris").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsnHarris").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprnHarris").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1568",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("snell").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingSnell").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsSnell").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsSnell").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprSnell").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1348",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("mccaffrey").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingMccaffrey").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsMccaffrey").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsMccaffrey").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprMccaffrey").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=986",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("jus").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingJus").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsJus").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsJus").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprJus").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1640",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("walker").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingWalker").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsWalker").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsWalker").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprWalker").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1637",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("homer").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingHomer").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsHomer").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsHomer").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprHomer").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1713",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("white").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingWhite").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsWhite").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsWhite").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprWhite").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1712",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("vaughn").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingVaughn").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsVaughn").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsVaughn").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprVaughn").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=373",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("henry").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingHenry").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsHenry").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsHenry").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprHenry").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=374",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("hilliard").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingHilliard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsHilliard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsHilliard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprHilliard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1265",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("robinson").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingRobinson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsRobinson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("tdsRobinson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprRobinson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1262",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("gibson").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("rushingGibson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

      document.getElementById("yardsGibson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("touchdownsGibson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[5].value;

      document.getElementById("yprGibson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;
  
  });