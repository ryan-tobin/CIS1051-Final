// TODO // 
// ! Bengals
fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=690",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("chase").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingChase").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsChase").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("tdsChase").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsChase").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=691",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("higgins").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingHiggins").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsHiggins").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsHiggins").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsHiggins").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=689",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("boyd").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingBoyd").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsBoyd").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("touchdownsBoyd").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsBoyd").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });
  // ! Bucs
  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1716",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("mevans").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingmEvans").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsmEvans").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("tdsmEvans").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsmEvans").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1719",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("godwin").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingGodwin").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsGodwin").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("touchdownsGodwin").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsGodwin").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1717",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("gage").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingGage").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsGage").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsGage").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsGage").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  // ! Dolphins
  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1792",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("hill").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingHill").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsHill").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("tdsHill").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsHill").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1795",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("waddle").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingWaddle").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsWaddle").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("touchdownsWaddle").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsWaddle").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1799",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("gesicki").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingGesicki").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsGesicki").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsGesicki").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsGesicki").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  // ! Eagles

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=838",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("brown").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingBrown").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsBrown").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("tdsBrown").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsBrown").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=842",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("smith").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingSmith").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsSmith").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("touchdownsSmith").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsSmith").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=846",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("goedert").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingGoedert").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsGoedert").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsGoedert").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsGoedert").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  // ! Raiders
  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=10",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("adams").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingAdams").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsAdams").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("tdsAdams").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsAdams").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=14",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("renfrow").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingRenfrow").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsRenfrow").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsRenfrow").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsRenfrow").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=12",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("hollins").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingHollins").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[1].value;

      document.getElementById("yardsHollins").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[2].value;

      document.getElementById("touchdownsHollins").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[4].value;

      document.getElementById("receptionsHollins").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[0].value;
  
  });

  // ! 49ers
  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=991",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("samuel").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingSamuel").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsSamuel").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("tdsSamuel").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsSamuel").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=987",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("aiyuk").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingAiyuk").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsAiyuk").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("touchdownsAiyuk").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsAiyuk").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=996",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("kittle").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingKittle").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsKittle").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsKittle").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsKittle").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  // ! Rams
  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2239",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("kupp").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingKupp").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[1].value;

      document.getElementById("yardsKupp").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[2].value;

      document.getElementById("tdsKupp").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[4].value;

      document.getElementById("receptionsKupp").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2242",
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
  
      document.getElementById("receivingRobinson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsRobinson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsRobinson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsRobinson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2237",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("vJefferson").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingvJefferson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsvJefferson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsvJefferson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsvJefferson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  // ! Bills
  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1426",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("diggs").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingDiggs").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsDiggs").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("tdsDiggs").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsDiggs").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1425",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("davis").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingDavis").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsDavis").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsDavis").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsDavis").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1434",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("knox").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingKnox").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsKnox").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsKnox").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsKnox").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  // ! Chargers
  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2159",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("kAllen").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingkAllen").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardskAllen").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("tdskAllen").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionskAllen").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2166",
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
  
      document.getElementById("receivingWilliams").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsWilliams").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsWilliams").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsWilliams").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2164",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("palmer").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingPalmer").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsPalmer").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("touchdownsPalmer").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsPalmer").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  // ! Broncos
  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2013",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("sutton").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingSutton").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsSutton").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("tdsSutton").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsSutton").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2007",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("hamler").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingHamler").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsHamler").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("touchdownsHamler").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsHamler").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2009",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("jeudy").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingJeudy").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsJeudy").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("touchdownsJeudy").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsJeudy").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  // ! Steelers
  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1574",
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
  
      document.getElementById("receivingJohnson").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsJohnson").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("tdsJohnson").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsJohnson").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1577",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("pickens").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingPickens").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsPickens").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("touchdownsPickens").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsPickens").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1580",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("freirmuth").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingFreirmuth").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsFreirmuth").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsFreirmuth").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsFreirmuth").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  // ! Cowboys
  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2088",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("lamb").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingLamb").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

      document.getElementById("yardsLamb").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

      document.getElementById("tdsLamb").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

      document.getElementById("receptionsLamb").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2086",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("gallup").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingGallup").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsGallup").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsGallup").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsGallup").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2097",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("shultz").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingShultz").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsShultz").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsShultz").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsShultz").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  // ! Seahawks
  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1645",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("metcalf").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingMetcalf").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsMetcalf").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("tdsMetcalf").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsMetcalf").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1644",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("lockett").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingLockett").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsLockett").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsLockett").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsLockett").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

  fetch(
    "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1649",
    playerStatsOptions
  )
    .then((response) => response.json())
    .then((player0Stats) => {
      const p0Stats = player0Stats;
      const playerZeroStats = JSON.stringify(p0Stats);
      localStorage.setItem("p0Stats", playerZeroStats);
    
      let text = localStorage.getItem("p0Stats");
      let pzeroStats = JSON.parse(text);
        
      document.getElementById("fant").innerHTML = pzeroStats.response[0].player.name;
  
      document.getElementById("receivingFant").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

      document.getElementById("yardsFant").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

      document.getElementById("touchdownsFant").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

      document.getElementById("receptionsFant").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;
  
  });

// ! Saints
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1937",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("olave").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingOlave").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsOlave").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("tdsOlave").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsOlave").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1935",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("landry").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingLandry").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsLandry").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsLandry").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsLandry").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1938",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("shaheed").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingShaheed").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsShaheed").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsShaheed").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsShaheed").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

// ! Cardinals
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=766",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("hopkins").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingHopkins").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsHopkins").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("tdsHopkins").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsHopkins").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=763",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("mBrown").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingmBrown").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsmBrown").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsmBrown").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsmBrown").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1350",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("anderson").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingAnderson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsAnderson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsAnderson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsAnderson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

// ! Falcons
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=542",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("london").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingLondon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsLondon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("tdsLondon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsLondon").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=544",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("zaccheaus").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingZaccheaus").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsZaccheaus").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsZaccheaus").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsZaccheaus").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=538",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("byrd").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingByrd").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsByrd").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsByrd").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsByrd").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

// ! Ravens
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=302",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("duvernay").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingDuvernay").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsDuvernay").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("tdsDuvernay").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsDuvernay").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=3428",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("jackson").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingJackson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsJackson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsJackson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsJackson").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=309",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("andrews").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingAndrews").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsAndrews").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsAndrews").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsAndrews").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

// ! Panthers
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1353",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("moore").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingMoore").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsMoore").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("tdsMoore").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsMoore").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1356",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("shenault").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingShenault").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsShenault").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsShenault").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsShenault").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1362",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("thomas").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingThomas").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsThomas").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsThomas").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsThomas").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

// ! Bears
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1131",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("mooney").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingMooney").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsMooney").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("tdsMooney").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsMooney").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1573",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("claypool").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingClaypool").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsClaypool").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsClaypool").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsClaypool").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1139",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("kmet").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingKmet").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsKmet").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsKmet").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsKmet").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

// ! Browns
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=618",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("cooper").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingCooper").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsCooper").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("tdsCooper").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsCooper").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=630",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("njoku").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingNjoku").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsNjoku").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsNjoku").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsNjoku").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=621",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("peoples_jones").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingPeoples_Jones").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsPeoples_Jones").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsPeoples_Jones").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsPeoples_Jones").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

// ! Lions
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=464",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("st_brown").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingSt_Brown").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsSt_Brown").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("tdsSt_Brown").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsSt_Brown").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=460",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("chark").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingChark").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsChark").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsChark").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsChark").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=462",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("raymond").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingRaymond").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsRaymond").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsRaymond").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsRaymond").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

// ! Packers
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1059",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("lazard").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingLazard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsLazard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("tdsLazard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsLazard").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1063",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("watson").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingWatson").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsWatson").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsWatson").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsWatson").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1056",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("cobb").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingCobb").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsCobb").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsCobb").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsCobb").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

//  ! Texans
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1862",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("cooks").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingCooks").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsCooks").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("tdsCooks").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsCooks").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1860",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("collins").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingCollins").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsCollins").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsCollins").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsCollins").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1866",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("cMoore").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingcMoore").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardscMoore").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownscMoore").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionscMoore").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

// ! Colts
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1501",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("pittman").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingPittman").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsPittman").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("tdsPittman").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsPittman").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1495",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("campbell").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingCampbell").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsCampbell").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsCampbell").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsCampbell").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1500",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("aPierce").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingaPierce").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsaPierce").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsaPierce").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsaPierce").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

// ! Jaguars
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=82",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("kirk").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingKirk").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[1].value;

    document.getElementById("yardsKirk").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[2].value;

    document.getElementById("tdsKirk").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[4].value;

    document.getElementById("receptionsKirk").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=80",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("zJones").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingzJones").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardszJones").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownszJones").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionszJones").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=81",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("mJones").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingmJones").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsmJones").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsmJones").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsmJones").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

// ! Chiefs
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1209",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("smith_shuster").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingSmith_Shuster").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsSmith_Shuster").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("tdsSmith_Shuster").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsSmith_Shuster").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1210",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("valdes_scantling").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingValdes_Scantling").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsValdes_Scantling").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsValdes_Scantling").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsValdes_Scantling").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1215",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("kelce").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingKelce").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsKelce").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsKelce").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsKelce").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

// ! Vikings
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2319",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("jefferson").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingJefferson").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[1].value;

    document.getElementById("yardsJefferson").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[2].value;

    document.getElementById("tdsJefferson").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[4].value;

    document.getElementById("receptionsJefferson").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2325",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("thielen").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingThielen").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsThielen").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsThielen").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsThielen").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=2322",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("osborn").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingOsborn").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsOsborn").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsOsborn").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsOsborn").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

// ! Patriots
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=152",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("meyers").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingMeyers").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsMeyers").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("tdsMeyers").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsMeyers").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=155",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("parker").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingParker").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsParker").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsParker").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsParker").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=148",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("agholor").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingAgholor").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsAgholor").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsAgholor").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsAgholor").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

// ! Giants
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=234",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("slayton").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingSlayton").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsSlayton").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("tdsSlayton").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsSlayton").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=226",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("rJames").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingrJames").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsrJames").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsrJames").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsrJames").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=225",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("golladay").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingGolladay").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsGolladay").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsGolladay").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsGolladay").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

// ! Jets
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=919",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("gwilson").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivinggWilson").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[1].value;

    document.getElementById("yardsgWilson").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[2].value;

    document.getElementById("tdsgWilson").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[4].value;

    document.getElementById("receptionsgWilson").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=916",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("eMoore").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingeMoore").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardseMoore").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownseMoore").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionseMoore").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=911",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("braxton_berrios").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingBraxton_Berrios").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[1].value;

    document.getElementById("yardsBraxton_Berrios").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[2].value;

    document.getElementById("touchdownsBraxton_Berrios").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[4].value;

    document.getElementById("receptionsBraxton_Berrios").innerHTML = pzeroStats.response[0].teams[0].groups[2].statistics[0].value;

});

// ! Titans
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=384",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("woods").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingWoods").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsWoods").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("tdsWoods").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsWoods").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=376",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("burks").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingBurks").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsBurks").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsBurks").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsBurks").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=383",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("westbrook_ikhine").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingWestbrook_Ikhine").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[1].value;

    document.getElementById("yardsWestbrook_Ikhine").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[2].value;

    document.getElementById("touchdownsWestbrook_Ikhine").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[4].value;

    document.getElementById("receptionsWestbrook_Ikhine").innerHTML = pzeroStats.response[0].teams[0].groups[0].statistics[0].value;

});

// ! Commanders
fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1271",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("mclaurin").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingMclaurin").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsMclaurin").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("tdsMclaurin").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsMclaurin").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1274",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("cSamuel").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingcSamuel").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardscSamuel").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownscSamuel").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionscSamuel").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});

fetch(
  "https://api-american-football.p.rapidapi.com/players/statistics?season=2022&id=1268",
  playerStatsOptions
)
  .then((response) => response.json())
  .then((player0Stats) => {
    const p0Stats = player0Stats;
    const playerZeroStats = JSON.stringify(p0Stats);
    localStorage.setItem("p0Stats", playerZeroStats);
  
    let text = localStorage.getItem("p0Stats");
    let pzeroStats = JSON.parse(text);
      
    document.getElementById("dotson").innerHTML = pzeroStats.response[0].player.name;

    document.getElementById("receivingDotson").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[1].value;

    document.getElementById("yardsDotson").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[2].value;

    document.getElementById("touchdownsDotson").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[4].value;

    document.getElementById("receptionsDotson").innerHTML = pzeroStats.response[0].teams[0].groups[1].statistics[0].value;

});