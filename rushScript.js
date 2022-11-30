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