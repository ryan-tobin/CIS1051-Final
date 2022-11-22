function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '35ae043db2msh31e6f118f6fc8f9p11ee0fjsn977b28636f2e',
		'X-RapidAPI-Host': 'nfl-schedule.p.rapidapi.com'
	}
};

fetch('https://nfl-schedule.p.rapidapi.com/v1/schedules', options)
  .then(response => response.json())
  .then(schedule => {
    const sched = schedule;
    const myJSON = JSON.stringify(sched);
    localStorage.setItem("schedule", myJSON);

    let text = localStorage.getItem("schedule");
    let obj = JSON.parse(text);
    // first box
    document.getElementById("homeTeam_0").innerHTML = obj.data[0].homeTeam.name;
    document.getElementById("awayTeam_0").innerHTML = obj.data[0].awayTeam.name;
    document.getElementById("homeTeamRecord_0").innerHTML = obj.data[0].homeTeam.score;
    document.getElementById("awayTeamRecord_0").innerHTML = obj.data[0].awayTeam.score;
    document.getElementById("shortName_0").innerHTML = obj.data[0].shortName;
    if (obj.data[0].homeTeam.score > obj.data[0].awayTeam.score) {
      document.getElementById("homeTeamRecord_0").style.color = color = "#c29bb6";
    } else {
      document.getElementById("awayTeamRecord_0").style.color = color = "#c29bb6";
    };
    // second box
    document.getElementById("homeTeam_1").innerHTML = obj.data[1].homeTeam.name;
    document.getElementById("awayTeam_1").innerHTML = obj.data[1].awayTeam.name;
    document.getElementById("homeTeamRecord_1").innerHTML = obj.data[1].homeTeam.score;
    document.getElementById("awayTeamRecord_1").innerHTML = obj.data[1].awayTeam.score;
    document.getElementById("shortName_1").innerHTML = obj.data[1].shortName;
    if (obj.data[1].homeTeam.score > obj.data[1].awayTeam.score) {
      document.getElementById("homeTeamRecord_1").style.color = color = "#c29bb6";
    } else {
      document.getElementById("awayTeamRecord_1").style.color = color = "#c29bb6";
    };
    // third box
    document.getElementById("homeTeam_2").innerHTML = obj.data[2].homeTeam.name;
    document.getElementById("awayTeam_2").innerHTML = obj.data[2].awayTeam.name;
    document.getElementById("homeTeamRecord_2").innerHTML = obj.data[2].homeTeam.score;
    document.getElementById("awayTeamRecord_2").innerHTML = obj.data[2].awayTeam.score;
    document.getElementById("shortName_2").innerHTML = obj.data[2].shortName;if (obj.data[2].homeTeam.score > obj.data[2].awayTeam.score) {
      document.getElementById("homeTeamRecord_2").style.color = color = "#c29bb6";
    } else {
      document.getElementById("awayTeamRecord_2").style.color = color = "#c29bb6";
    };
    // fourth box
    document.getElementById("homeTeam_3").innerHTML = obj.data[3].homeTeam.name;
    document.getElementById("awayTeam_3").innerHTML = obj.data[3].awayTeam.name;
    document.getElementById("homeTeamRecord_3").innerHTML = obj.data[3].homeTeam.score;
    document.getElementById("awayTeamRecord_3").innerHTML = obj.data[3].awayTeam.score;
    document.getElementById("shortName_3").innerHTML = obj.data[3].shortName;
    if (obj.data[3].homeTeam.score > obj.data[3].awayTeam.score) {
      document.getElementById("homeTeamRecord_3").style.color = color = "#c29bb6";
    } else {
      document.getElementById("awayTeamRecord_3").style.color = color = "#c29bb6";
    };
    // fifth box
    document.getElementById("homeTeam_4").innerHTML = obj.data[4].homeTeam.name;
    document.getElementById("awayTeam_4").innerHTML = obj.data[4].awayTeam.name;
    document.getElementById("homeTeamRecord_4").innerHTML = obj.data[4].homeTeam.score;
    document.getElementById("awayTeamRecord_4").innerHTML = obj.data[4].awayTeam.score;
    document.getElementById("shortName_4").innerHTML = obj.data[4].shortName;
    if (obj.data[4].homeTeam.score > obj.data[4].awayTeam.score) {
      document.getElementById("homeTeamRecord_4").style.color = color = "#c29bb6";
    } else {
      document.getElementById("awayTeamRecord_4").style.color = color = "#c29bb6";
    };
    // sixth box
    document.getElementById("homeTeam_5").innerHTML = obj.data[5].homeTeam.name;
    document.getElementById("awayTeam_5").innerHTML = obj.data[5].awayTeam.name;
    document.getElementById("homeTeamRecord_5").innerHTML = obj.data[5].homeTeam.score;
    document.getElementById("awayTeamRecord_5").innerHTML = obj.data[5].awayTeam.score;
    document.getElementById("shortName_5").innerHTML = obj.data[5].shortName;
    if (obj.data[5].homeTeam.score > obj.data[5].awayTeam.score) {
      document.getElementById("homeTeamRecord_5").style.color = color = "#c29bb6";
    } else {
      document.getElementById("awayTeamRecord_5").style.color = color = "#c29bb6";
    };
    // seventh box
    document.getElementById("homeTeam_6").innerHTML = obj.data[6].homeTeam.name;
    document.getElementById("awayTeam_6").innerHTML = obj.data[6].awayTeam.name;
    document.getElementById("homeTeamRecord_6").innerHTML = obj.data[6].homeTeam.score;
    document.getElementById("awayTeamRecord_6").innerHTML = obj.data[6].awayTeam.score;
    document.getElementById("shortName_6").innerHTML = obj.data[6].shortName;
    if (obj.data[6].homeTeam.score > obj.data[6].awayTeam.score) {
      document.getElementById("homeTeamRecord_6").style.color = color = "#c29bb6";
    } else {
      document.getElementById("awayTeamRecord_6").style.color = color = "#c29bb6";
    };
  })
  .catch((error) => console.log(error))

const teamStatOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com',
    'X-RapidAPI-Key': "35ae043db2msh31e6f118f6fc8f9p11ee0fjsn977b28636f2e"
  }
};

fetch('https://nfl-team-stats.p.rapidapi.com/v1/nfl-stas/teams/win-stats/2022', teamStatOptions)
  .then(response => response.json())
  .then(winStats => {
    const wins = winStats;
    const winsJSON = JSON.stringify(wins);
    localStorage.setItem("wins", winsJSON);

    let text = localStorage.getItem("schedule");
    let win_obj = JSON.parse(text);

    // Texans
    document.getElementById("teamName_0").innerHTML = win_obj.teamWinStatistics[0].name;
    document.getElementById("wins_0").innerHTML = win_obj.teamWinStatistics[0].wins
    document.getElementById("losses_0").innerHTML = win_obj.teamWinStatistics[0].losses
    // Panthers
    document.getElementById("teamName_1").innerHTML = win_obj.teamWinStatistics[1].name;
    document.getElementById("wins_1").innerHTML = win_obj.teamWinStatistics[1].wins
    document.getElementById("losses_1").innerHTML = win_obj.teamWinStatistics[1].losses
    // Bears
    document.getElementById("teamName_2").innerHTML = win_obj.teamWinStatistics[2].name;
    document.getElementById("wins_2").innerHTML = win_obj.teamWinStatistics[2].wins
    document.getElementById("losses_2").innerHTML = win_obj.teamWinStatistics[2].losses
    // Browns
    document.getElementById("teamName_3").innerHTML = win_obj.teamWinStatistics[3].name;
    document.getElementById("wins_3").innerHTML = win_obj.teamWinStatistics[3].wins
    document.getElementById("losses_3").innerHTML = win_obj.teamWinStatistics[3].losses
    // Broncos
    document.getElementById("teamName_4").innerHTML = win_obj.teamWinStatistics[4].name;
    document.getElementById("wins_4").innerHTML = win_obj.teamWinStatistics[4].wins
    document.getElementById("losses_4").innerHTML = win_obj.teamWinStatistics[4].losses
    // Jaguars
    document.getElementById("teamName_5").innerHTML = win_obj.teamWinStatistics[5].name;
    document.getElementById("wins_5").innerHTML = win_obj.teamWinStatistics[5].wins
    document.getElementById("losses_5").innerHTML = win_obj.teamWinStatistics[5].losses
    // Raiders
    document.getElementById("teamName_6").innerHTML = win_obj.teamWinStatistics[6].name;
    document.getElementById("wins_6").innerHTML = win_obj.teamWinStatistics[6].wins
    document.getElementById("losses_6").innerHTML = win_obj.teamWinStatistics[6].losses
    // Rams
    document.getElementById("teamName_7").innerHTML = win_obj.teamWinStatistics[7].name;
    document.getElementById("wins_7").innerHTML = win_obj.teamWinStatistics[7].wins
    document.getElementById("losses_7").innerHTML = win_obj.teamWinStatistics[7].losses
    // Steelers
    document.getElementById("teamName_8").innerHTML = win_obj.teamWinStatistics[8].name;
    document.getElementById("wins_8").innerHTML = win_obj.teamWinStatistics[8].wins
    document.getElementById("losses_8").innerHTML = win_obj.teamWinStatistics[8].losses
    // Cardinals
    document.getElementById("teamName_9").innerHTML = win_obj.teamWinStatistics[9].name;
    document.getElementById("wins_9").innerHTML = win_obj.teamWinStatistics[9].wins
    document.getElementById("losses_9").innerHTML = win_obj.teamWinStatistics[9].losses
    // Lions
    document.getElementById("teamName_10").innerHTML = win_obj.teamWinStatistics[10].name;
    document.getElementById("wins_10").innerHTML = win_obj.teamWinStatistics[10].wins
    document.getElementById("losses_10").innerHTML = win_obj.teamWinStatistics[10].losses
    // Packers
    document.getElementById("teamName_11").innerHTML = win_obj.teamWinStatistics[11].name;
    document.getElementById("wins_11").innerHTML = win_obj.teamWinStatistics[11].wins
    document.getElementById("losses_11").innerHTML = win_obj.teamWinStatistics[11].losses
    // Colts
    document.getElementById("teamName_12").innerHTML = win_obj.teamWinStatistics[12].name;
    document.getElementById("wins_12").innerHTML = win_obj.teamWinStatistics[12].wins
    document.getElementById("losses_12").innerHTML = win_obj.teamWinStatistics[12].losses
    // Saints
    document.getElementById("teamName_13").innerHTML = win_obj.teamWinStatistics[13].name;
    document.getElementById("wins_13").innerHTML = win_obj.teamWinStatistics[13].wins
    document.getElementById("losses_13").innerHTML = win_obj.teamWinStatistics[13].losses
    // Falcons
    document.getElementById("teamName_14").innerHTML = win_obj.teamWinStatistics[14].name;
    document.getElementById("wins_14").innerHTML = win_obj.teamWinStatistics[14].wins
    document.getElementById("losses_14").innerHTML = win_obj.teamWinStatistics[14].losses
    // Chargers
    document.getElementById("teamName_15").innerHTML = win_obj.teamWinStatistics[15].name;
    document.getElementById("wins_15").innerHTML = win_obj.teamWinStatistics[15].wins
    document.getElementById("losses_15").innerHTML = win_obj.teamWinStatistics[15].losses
    // Buccaneers
    document.getElementById("teamName_16").innerHTML = win_obj.teamWinStatistics[16].name;
    document.getElementById("wins_16").innerHTML = win_obj.teamWinStatistics[16].wins
    document.getElementById("losses_16").innerHTML = win_obj.teamWinStatistics[16].losses
    // Bengals
    document.getElementById("teamName_17").innerHTML = win_obj.teamWinStatistics[17].name;
    document.getElementById("wins_17").innerHTML = win_obj.teamWinStatistics[17].wins
    document.getElementById("losses_17").innerHTML = win_obj.teamWinStatistics[17].losses
    // Patriots
    document.getElementById("teamName_18").innerHTML = win_obj.teamWinStatistics[18].name;
    document.getElementById("wins_18").innerHTML = win_obj.teamWinStatistics[18].wins
    document.getElementById("losses_18").innerHTML = win_obj.teamWinStatistics[18].losses
    // Jets
    document.getElementById("teamName_19").innerHTML = win_obj.teamWinStatistics[19].name;
    document.getElementById("wins_19").innerHTML = win_obj.teamWinStatistics[19].wins
    document.getElementById("losses_19").innerHTML = win_obj.teamWinStatistics[19].losses
    // 49ers
    document.getElementById("teamName_20").innerHTML = win_obj.teamWinStatistics[20].name;
    document.getElementById("wins_20").innerHTML = win_obj.teamWinStatistics[20].wins
    document.getElementById("losses_20").innerHTML = win_obj.teamWinStatistics[20].losses
    // Seahawks
    document.getElementById("teamName_21").innerHTML = win_obj.teamWinStatistics[21].name;
    document.getElementById("wins_21").innerHTML = win_obj.teamWinStatistics[21].wins
    document.getElementById("losses_21").innerHTML = win_obj.teamWinStatistics[21].losses
    // Commanders
    document.getElementById("teamName_22").innerHTML = win_obj.teamWinStatistics[22].name;
    document.getElementById("wins_22").innerHTML = win_obj.teamWinStatistics[22].wins
    document.getElementById("losses_22").innerHTML = win_obj.teamWinStatistics[22].losses
    // Ravens
    document.getElementById("teamName_23").innerHTML = win_obj.teamWinStatistics[23].name;
    document.getElementById("wins_23").innerHTML = win_obj.teamWinStatistics[23].wins
    document.getElementById("losses_23").innerHTML = win_obj.teamWinStatistics[23].losses
    // Bills
    document.getElementById("teamName_24").innerHTML = win_obj.teamWinStatistics[24].name;
    document.getElementById("wins_24").innerHTML = win_obj.teamWinStatistics[24].wins
    document.getElementById("losses_24").innerHTML = win_obj.teamWinStatistics[24].losses
    // Cowboys
    document.getElementById("teamName_25").innerHTML = win_obj.teamWinStatistics[25].name;
    document.getElementById("wins_25").innerHTML = win_obj.teamWinStatistics[25].wins
    document.getElementById("losses_25").innerHTML = win_obj.teamWinStatistics[25].losses
    // Dolphins
    document.getElementById("teamName_26").innerHTML = win_obj.teamWinStatistics[26].name;
    document.getElementById("wins_26").innerHTML = win_obj.teamWinStatistics[26].wins
    document.getElementById("losses_26").innerHTML = win_obj.teamWinStatistics[26].losses
    // Giants
    document.getElementById("teamName_27").innerHTML = win_obj.teamWinStatistics[27].name;
    document.getElementById("wins_27").innerHTML = win_obj.teamWinStatistics[27].wins
    document.getElementById("losses_27").innerHTML = win_obj.teamWinStatistics[27].losses
    // Titans
    document.getElementById("teamName_28").innerHTML = win_obj.teamWinStatistics[28].name;
    document.getElementById("wins_28").innerHTML = win_obj.teamWinStatistics[28].wins
    document.getElementById("losses_28").innerHTML = win_obj.teamWinStatistics[28].losses
    // Chiefs
    document.getElementById("teamName_29").innerHTML = win_obj.teamWinStatistics[29].name;
    document.getElementById("wins_29").innerHTML = win_obj.teamWinStatistics[29].wins
    document.getElementById("losses_29").innerHTML = win_obj.teamWinStatistics[29].losses
    // Vikings
    document.getElementById("teamName_30").innerHTML = win_obj.teamWinStatistics[30].name;
    document.getElementById("wins_30").innerHTML = win_obj.teamWinStatistics[30].wins
    document.getElementById("losses_30").innerHTML = win_obj.teamWinStatistics[30].losses
    // Eagles
    document.getElementById("teamName_31").innerHTML = win_obj.teamWinStatistics[31].name;
    document.getElementById("wins_31").innerHTML = win_obj.teamWinStatistics[31].wins
    document.getElementById("losses_31").innerHTML = win_obj.teamWinStatistics[31].losses
  });