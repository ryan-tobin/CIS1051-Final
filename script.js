function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "35ae043db2msh31e6f118f6fc8f9p11ee0fjsn977b28636f2e",
    "X-RapidAPI-Host": "nfl-schedule.p.rapidapi.com",
  },
};

fetch("https://nfl-schedule.p.rapidapi.com/v1/schedules", options)
  .then((response) => response.json())
  .then((schedule) => {
    const sched = schedule;
    const myJSON = JSON.stringify(sched);
    localStorage.setItem("schedule", myJSON);

    let text = localStorage.getItem("schedule");
    let obj = JSON.parse(text);
    // first box
    document.getElementById("homeTeam_0").innerHTML = obj.data[0].homeTeam.name;
    document.getElementById("awayTeam_0").innerHTML = obj.data[0].awayTeam.name;
    document.getElementById("homeTeamRecord_0").innerHTML =
      obj.data[0].homeTeam.score;
    document.getElementById("awayTeamRecord_0").innerHTML =
      obj.data[0].awayTeam.score;
    document.getElementById("shortName_0").innerHTML = obj.data[0].shortName;
    if (obj.data[0].homeTeam.score > obj.data[0].awayTeam.score) {
      document.getElementById("homeTeamRecord_0").style.color = color =
        "#c29bb6";
    } else {
      document.getElementById("awayTeamRecord_0").style.color = color =
        "#c29bb6";
    }
    // second box
    document.getElementById("homeTeam_1").innerHTML = obj.data[1].homeTeam.name;
    document.getElementById("awayTeam_1").innerHTML = obj.data[1].awayTeam.name;
    document.getElementById("homeTeamRecord_1").innerHTML =
      obj.data[1].homeTeam.score;
    document.getElementById("awayTeamRecord_1").innerHTML =
      obj.data[1].awayTeam.score;
    document.getElementById("shortName_1").innerHTML = obj.data[1].shortName;
    if (obj.data[1].homeTeam.score > obj.data[1].awayTeam.score) {
      document.getElementById("homeTeamRecord_1").style.color = color =
        "#c29bb6";
    } else {
      document.getElementById("awayTeamRecord_1").style.color = color =
        "#c29bb6";
    }
    // third box
    document.getElementById("homeTeam_2").innerHTML = obj.data[2].homeTeam.name;
    document.getElementById("awayTeam_2").innerHTML = obj.data[2].awayTeam.name;
    document.getElementById("homeTeamRecord_2").innerHTML =
      obj.data[2].homeTeam.score;
    document.getElementById("awayTeamRecord_2").innerHTML =
      obj.data[2].awayTeam.score;
    document.getElementById("shortName_2").innerHTML = obj.data[2].shortName;
    if (obj.data[2].homeTeam.score > obj.data[2].awayTeam.score) {
      document.getElementById("homeTeamRecord_2").style.color = color =
        "#c29bb6";
    } else {
      document.getElementById("awayTeamRecord_2").style.color = color =
        "#c29bb6";
    }
    // fourth box
    document.getElementById("homeTeam_3").innerHTML = obj.data[3].homeTeam.name;
    document.getElementById("awayTeam_3").innerHTML = obj.data[3].awayTeam.name;
    document.getElementById("homeTeamRecord_3").innerHTML =
      obj.data[3].homeTeam.score;
    document.getElementById("awayTeamRecord_3").innerHTML =
      obj.data[3].awayTeam.score;
    document.getElementById("shortName_3").innerHTML = obj.data[3].shortName;
    if (obj.data[3].homeTeam.score > obj.data[3].awayTeam.score) {
      document.getElementById("homeTeamRecord_3").style.color = color =
        "#c29bb6";
    } else {
      document.getElementById("awayTeamRecord_3").style.color = color =
        "#c29bb6";
    }
    // fifth box
    document.getElementById("homeTeam_4").innerHTML = obj.data[4].homeTeam.name;
    document.getElementById("awayTeam_4").innerHTML = obj.data[4].awayTeam.name;
    document.getElementById("homeTeamRecord_4").innerHTML =
      obj.data[4].homeTeam.score;
    document.getElementById("awayTeamRecord_4").innerHTML =
      obj.data[4].awayTeam.score;
    document.getElementById("shortName_4").innerHTML = obj.data[4].shortName;
    if (obj.data[4].homeTeam.score > obj.data[4].awayTeam.score) {
      document.getElementById("homeTeamRecord_4").style.color = color =
        "#c29bb6";
    } else {
      document.getElementById("awayTeamRecord_4").style.color = color =
        "#c29bb6";
    }
    // sixth box
    document.getElementById("homeTeam_5").innerHTML = obj.data[5].homeTeam.name;
    document.getElementById("awayTeam_5").innerHTML = obj.data[5].awayTeam.name;
    document.getElementById("homeTeamRecord_5").innerHTML =
      obj.data[5].homeTeam.score;
    document.getElementById("awayTeamRecord_5").innerHTML =
      obj.data[5].awayTeam.score;
    document.getElementById("shortName_5").innerHTML = obj.data[5].shortName;
    if (obj.data[5].homeTeam.score > obj.data[5].awayTeam.score) {
      document.getElementById("homeTeamRecord_5").style.color = color =
        "#c29bb6";
    } else {
      document.getElementById("awayTeamRecord_5").style.color = color =
        "#c29bb6";
    }
    // seventh box
    document.getElementById("homeTeam_6").innerHTML = obj.data[6].homeTeam.name;
    document.getElementById("awayTeam_6").innerHTML = obj.data[6].awayTeam.name;
    document.getElementById("homeTeamRecord_6").innerHTML =
      obj.data[6].homeTeam.score;
    document.getElementById("awayTeamRecord_6").innerHTML =
      obj.data[6].awayTeam.score;
    document.getElementById("shortName_6").innerHTML = obj.data[6].shortName;
    if (obj.data[6].homeTeam.score > obj.data[6].awayTeam.score) {
      document.getElementById("homeTeamRecord_6").style.color = color =
        "#c29bb6";
    } else {
      document.getElementById("awayTeamRecord_6").style.color = color =
        "#c29bb6";
    }
  })
  .catch((error) => console.log(error));

const teamStatOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "nfl-team-stats.p.rapidapi.com",
    "X-RapidAPI-Key": "35ae043db2msh31e6f118f6fc8f9p11ee0fjsn977b28636f2e",
  },
};

fetch(
  "https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/win-stats/2022",
  teamStatOptions
)
  .then((response) => response.json())
  .then((winStats) => {
    const wins = winStats;
    const winsJSON = JSON.stringify(wins);
    localStorage.setItem("wins", winsJSON);

    let text = localStorage.getItem("wins");
    let win_obj = JSON.parse(text);

    // Texans
    document.getElementById("teamName_0").innerHTML =
      win_obj._embedded.teamWinStatsList[0].name;
    // Panthers
    document.getElementById("teamName_1").innerHTML =
      win_obj._embedded.teamWinStatsList[1].name;
    // Bears
    document.getElementById("teamName_2").innerHTML =
      win_obj._embedded.teamWinStatsList[2].name;
    // Browns
    document.getElementById("teamName_3").innerHTML =
      win_obj._embedded.teamWinStatsList[3].name;
    // Broncos
    document.getElementById("teamName_4").innerHTML =
      win_obj._embedded.teamWinStatsList[4].name;
    // Jaguars
    document.getElementById("teamName_5").innerHTML =
      win_obj._embedded.teamWinStatsList[5].name;
    // Raiders
    document.getElementById("teamName_6").innerHTML =
      win_obj._embedded.teamWinStatsList[6].name;
    // Rams
    document.getElementById("teamName_7").innerHTML =
      win_obj._embedded.teamWinStatsList[7].name;
    // Steelers
    document.getElementById("teamName_8").innerHTML =
      win_obj._embedded.teamWinStatsList[8].name;
    // Cardinals
    document.getElementById("teamName_9").innerHTML =
      win_obj._embedded.teamWinStatsList[9].name;
    // Lions
    document.getElementById("teamName_10").innerHTML =
      win_obj._embedded.teamWinStatsList[10].name;
    // Packers
    document.getElementById("teamName_11").innerHTML =
      win_obj._embedded.teamWinStatsList[11].name;
    // Colts
    document.getElementById("teamName_12").innerHTML =
      win_obj._embedded.teamWinStatsList[12].name;
    // Saints
    document.getElementById("teamName_13").innerHTML =
      win_obj._embedded.teamWinStatsList[13].name;
    // Falcons
    document.getElementById("teamName_14").innerHTML =
      win_obj._embedded.teamWinStatsList[14].name;
    // Chargers
    document.getElementById("teamName_15").innerHTML =
      win_obj._embedded.teamWinStatsList[15].name;
    // Buccaneers
    document.getElementById("teamName_16").innerHTML =
      win_obj._embedded.teamWinStatsList[16].name;
    // Bengals
    document.getElementById("teamName_17").innerHTML =
      win_obj._embedded.teamWinStatsList[17].name;
    // Patriots
    document.getElementById("teamName_18").innerHTML =
      win_obj._embedded.teamWinStatsList[18].name;
    // Jets
    document.getElementById("teamName_19").innerHTML =
      win_obj._embedded.teamWinStatsList[19].name;
    // 49ers
    document.getElementById("teamName_20").innerHTML =
      win_obj._embedded.teamWinStatsList[20].name;
    // Seahawks
    document.getElementById("teamName_21").innerHTML =
      win_obj._embedded.teamWinStatsList[21].name;
    // Commanders
    document.getElementById("teamName_22").innerHTML =
      win_obj._embedded.teamWinStatsList[22].name;
    // Ravens
    document.getElementById("teamName_23").innerHTML =
      win_obj._embedded.teamWinStatsList[23].name;
    // Bills
    document.getElementById("teamName_24").innerHTML =
      win_obj._embedded.teamWinStatsList[24].name;
    // Cowboys
    document.getElementById("teamName_25").innerHTML =
      win_obj._embedded.teamWinStatsList[25].name;
    // Dolphins
    document.getElementById("teamName_26").innerHTML =
      win_obj._embedded.teamWinStatsList[26].name;
    // Giants
    document.getElementById("teamName_27").innerHTML =
      win_obj._embedded.teamWinStatsList[27].name;
    // Titans
    document.getElementById("teamName_28").innerHTML =
      win_obj._embedded.teamWinStatsList[28].name;
    // Chiefs
    document.getElementById("teamName_29").innerHTML =
      win_obj._embedded.teamWinStatsList[29].name;
    // Vikings
    document.getElementById("teamName_30").innerHTML =
      win_obj._embedded.teamWinStatsList[30].name;
    // Eagles
    document.getElementById("teamName_31").innerHTML =
      win_obj._embedded.teamWinStatsList[31].name;
    // wins / losses 1
    document.getElementById("wins_1").innerHTML =
      win_obj._embedded.teamWinStatsList[1].wins;
    document.getElementById("losses_1").innerHTML =
      win_obj._embedded.teamWinStatsList[1].losses;
    // wins / losses 14
    document.getElementById("wins_14").innerHTML =
      win_obj._embedded.teamWinStatsList[14].wins;
    document.getElementById("losses_14").innerHTML =
      win_obj._embedded.teamWinStatsList[14].losses;
    // wins / losses 13
    document.getElementById("wins_13").innerHTML =
      win_obj._embedded.teamWinStatsList[13].wins;
    document.getElementById("losses_13").innerHTML =
      win_obj._embedded.teamWinStatsList[13].losses;
    // wins / losses 16
    document.getElementById("wins_16").innerHTML =
      win_obj._embedded.teamWinStatsList[16].wins;
    document.getElementById("losses_16").innerHTML =
      win_obj._embedded.teamWinStatsList[16].losses;
    // wins / losses 31
    document.getElementById("wins_31").innerHTML =
      win_obj._embedded.teamWinStatsList[31].wins;
    document.getElementById("losses_31").innerHTML =
      win_obj._embedded.teamWinStatsList[31].losses;
    // wins / losses 27
    document.getElementById("wins_27").innerHTML =
      win_obj._embedded.teamWinStatsList[27].wins;
    document.getElementById("losses_27").innerHTML =
      win_obj._embedded.teamWinStatsList[27].losses;
    // wins / losses 25
    document.getElementById("wins_25").innerHTML =
      win_obj._embedded.teamWinStatsList[25].wins;
    document.getElementById("losses_25").innerHTML =
      win_obj._embedded.teamWinStatsList[25].losses;
    // wins / losses 22
    document.getElementById("wins_22").innerHTML =
      win_obj._embedded.teamWinStatsList[22].wins;
    document.getElementById("losses_22").innerHTML =
      win_obj._embedded.teamWinStatsList[22].losses;
    // wins / losses 9
    document.getElementById("wins_9").innerHTML =
      win_obj._embedded.teamWinStatsList[9].wins;
    document.getElementById("losses_9").innerHTML =
      win_obj._embedded.teamWinStatsList[9].losses;
    // wins / losses 7
    document.getElementById("wins_7").innerHTML =
      win_obj._embedded.teamWinStatsList[7].wins;
    document.getElementById("losses_7").innerHTML =
      win_obj._embedded.teamWinStatsList[7].losses;
    // wins / losses 20
    document.getElementById("wins_20").innerHTML =
      win_obj._embedded.teamWinStatsList[20].wins;
    document.getElementById("losses_20").innerHTML =
      win_obj._embedded.teamWinStatsList[20].losses;
    // wins / losses 21
    document.getElementById("wins_21").innerHTML =
      win_obj._embedded.teamWinStatsList[21].wins;
    document.getElementById("losses_21").innerHTML =
      win_obj._embedded.teamWinStatsList[21].losses;
    // wins / losses 2
    document.getElementById("wins_2").innerHTML =
      win_obj._embedded.teamWinStatsList[2].wins;
    document.getElementById("losses_2").innerHTML =
      win_obj._embedded.teamWinStatsList[2].losses;
    // wins / losses 10
    document.getElementById("wins_10").innerHTML =
      win_obj._embedded.teamWinStatsList[10].wins;
    document.getElementById("losses_10").innerHTML =
      win_obj._embedded.teamWinStatsList[10].losses;
    // wins / losses 11
    document.getElementById("wins_11").innerHTML =
      win_obj._embedded.teamWinStatsList[11].wins;
    document.getElementById("losses_11").innerHTML =
      win_obj._embedded.teamWinStatsList[11].losses;
    // wins / losses 30
    document.getElementById("wins_30").innerHTML =
      win_obj._embedded.teamWinStatsList[30].wins;
    document.getElementById("losses_30").innerHTML =
      win_obj._embedded.teamWinStatsList[30].losses;
    // wins / losses 0
    document.getElementById("wins_0").innerHTML =
      win_obj._embedded.teamWinStatsList[0].wins;
    document.getElementById("losses_0").innerHTML =
      win_obj._embedded.teamWinStatsList[0].losses;
    // wins / losses 12
    document.getElementById("wins_12").innerHTML =
      win_obj._embedded.teamWinStatsList[12].wins;
    document.getElementById("losses_12").innerHTML =
      win_obj._embedded.teamWinStatsList[12].losses;
    // wins / losses 5
    document.getElementById("wins_5").innerHTML =
      win_obj._embedded.teamWinStatsList[5].wins;
    document.getElementById("losses_5").innerHTML =
      win_obj._embedded.teamWinStatsList[5].losses;
    // wins / losses 28
    document.getElementById("wins_28").innerHTML =
      win_obj._embedded.teamWinStatsList[28].wins;
    document.getElementById("losses_28").innerHTML =
      win_obj._embedded.teamWinStatsList[28].losses;
    // wins / losses 24
    document.getElementById("wins_24").innerHTML =
      win_obj._embedded.teamWinStatsList[24].wins;
    document.getElementById("losses_24").innerHTML =
      win_obj._embedded.teamWinStatsList[24].losses;
    // wins / losses 26
    document.getElementById("wins_26").innerHTML =
      win_obj._embedded.teamWinStatsList[26].wins;
    document.getElementById("losses_26").innerHTML =
      win_obj._embedded.teamWinStatsList[26].losses;
    // wins / losses 18
    document.getElementById("wins_18").innerHTML =
      win_obj._embedded.teamWinStatsList[18].wins;
    document.getElementById("losses_18").innerHTML =
      win_obj._embedded.teamWinStatsList[18].losses;
    // wins / losses 19
    document.getElementById("wins_19").innerHTML =
      win_obj._embedded.teamWinStatsList[19].wins;
    document.getElementById("losses_19").innerHTML =
      win_obj._embedded.teamWinStatsList[19].losses;
    // wins / losses 4
    document.getElementById("wins_4").innerHTML =
      win_obj._embedded.teamWinStatsList[4].wins;
    document.getElementById("losses_4").innerHTML =
      win_obj._embedded.teamWinStatsList[4].losses;
    // wins / losses 29
    document.getElementById("wins_29").innerHTML =
      win_obj._embedded.teamWinStatsList[29].wins;
    document.getElementById("losses_29").innerHTML =
      win_obj._embedded.teamWinStatsList[29].losses;
    // wins / losses 15
    document.getElementById("wins_15").innerHTML =
      win_obj._embedded.teamWinStatsList[15].wins;
    document.getElementById("losses_15").innerHTML =
      win_obj._embedded.teamWinStatsList[15].losses;
    // wins / losses 6
    document.getElementById("wins_6").innerHTML =
      win_obj._embedded.teamWinStatsList[6].wins;
    document.getElementById("losses_6").innerHTML =
      win_obj._embedded.teamWinStatsList[6].losses;
    // wins / losses 23
    document.getElementById("wins_23").innerHTML =
      win_obj._embedded.teamWinStatsList[23].wins;
    document.getElementById("losses_23").innerHTML =
      win_obj._embedded.teamWinStatsList[23].losses;
    // wins / losses 17
    document.getElementById("wins_17").innerHTML =
      win_obj._embedded.teamWinStatsList[17].wins;
    document.getElementById("losses_17").innerHTML =
      win_obj._embedded.teamWinStatsList[17].losses;
    // wins / losses 3
    document.getElementById("wins_3").innerHTML =
      win_obj._embedded.teamWinStatsList[3].wins;
    document.getElementById("losses_3").innerHTML =
      win_obj._embedded.teamWinStatsList[3].losses;
    // wins / losses 8
    document.getElementById("wins_8").innerHTML =
      win_obj._embedded.teamWinStatsList[8].wins;
    document.getElementById("losses_8").innerHTML =
      win_obj._embedded.teamWinStatsList[8].losses;
  })
  .catch(function (err) {
    console.log(err);
  });

const passingStatOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "nfl-team-stats.p.rapidapi.com",
    "X-RapidAPI-Key": "35ae043db2msh31e6f118f6fc8f9p11ee0fjsn977b28636f2e",
  },
};

fetch(
  "https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/passing-stats/offense/2022",
  passingStatOptions
)
  .then((response) => response.json())
  .then((passingStats) => {
    const passing = passingStats;
    const passingJSON = JSON.stringify(passing);
    localStorage.setItem("passing", passingJSON);

    let text = localStorage.getItem("passing");
    let passing_obj = JSON.parse(text);

    //passing yards 0
    document.getElementById("passing_yards_4").innerHTML =
      passing_obj._embedded.teamPassingStatsList[0].passYards;
    // passing yards 1
    document.getElementById("passing_yards_11").innerHTML =
      passing_obj._embedded.teamPassingStatsList[1].passYards;
    // passing yards 2
    document.getElementById("passing_yards_22").innerHTML =
      passing_obj._embedded.teamPassingStatsList[2].passYards;
    // passing yards 3
    document.getElementById("passing_yards_25").innerHTML =
      passing_obj._embedded.teamPassingStatsList[3].passYards;
    //passing yards 4
    document.getElementById("passing_yards_21").innerHTML =
      passing_obj._embedded.teamPassingStatsList[4].passYards;
    // passing yards 5
    document.getElementById("passing_yards_15").innerHTML =
      passing_obj._embedded.teamPassingStatsList[5].passYards;
    // passing yards 6
    document.getElementById("passing_yards_14").innerHTML =
      passing_obj._embedded.teamPassingStatsList[6].passYards;
    // passing yards 7
    document.getElementById("passing_yards_3").innerHTML =
      passing_obj._embedded.teamPassingStatsList[7].passYards;
    //passing yards 8
    document.getElementById("passing_yards_29").innerHTML =
      passing_obj._embedded.teamPassingStatsList[8].passYards;
    // passing yards 9
    document.getElementById("passing_yards_16").innerHTML =
      passing_obj._embedded.teamPassingStatsList[9].passYards;
    // passing yards 10
    document.getElementById("passing_yards_10").innerHTML =
      passing_obj._embedded.teamPassingStatsList[10].passYards;
    // passing yards 11
    document.getElementById("passing_yards_31").innerHTML =
      passing_obj._embedded.teamPassingStatsList[11].passYards;
    //passing yards 12
    document.getElementById("passing_yards_23").innerHTML =
      passing_obj._embedded.teamPassingStatsList[12].passYards;
    // passing yards 13
    document.getElementById("passing_yards_17").innerHTML =
      passing_obj._embedded.teamPassingStatsList[13].passYards;
    // passing yards 14
    document.getElementById("passing_yards_5").innerHTML =
      passing_obj._embedded.teamPassingStatsList[14].passYards;
    // passing yards 15
    document.getElementById("passing_yards_26").innerHTML =
      passing_obj._embedded.teamPassingStatsList[15].passYards;
    //passing yards 16
    document.getElementById("passing_yards_20").innerHTML =
      passing_obj._embedded.teamPassingStatsList[16].passYards;
    // passing yards 17
    document.getElementById("passing_yards_19").innerHTML =
      passing_obj._embedded.teamPassingStatsList[17].passYards;
    // passing yards 18
    document.getElementById("passing_yards_30").innerHTML =
      passing_obj._embedded.teamPassingStatsList[18].passYards;
    // passing yards 19
    document.getElementById("passing_yards_24").innerHTML =
      passing_obj._embedded.teamPassingStatsList[19].passYards;
    //passing yards 20
    document.getElementById("passing_yards_13").innerHTML =
      passing_obj._embedded.teamPassingStatsList[20].passYards;
    // passing yards 21
    document.getElementById("passing_yards_8").innerHTML =
      passing_obj._embedded.teamPassingStatsList[21].passYards;
    // passing yards 22
    document.getElementById("passing_yards_7").innerHTML =
      passing_obj._embedded.teamPassingStatsList[22].passYards;
    // passing yards 23
    document.getElementById("passing_yards_2").innerHTML =
      passing_obj._embedded.teamPassingStatsList[23].passYards;
    //passing yards 24
    document.getElementById("passing_yards_6").innerHTML =
      passing_obj._embedded.teamPassingStatsList[24].passYards;
    // passing yards 25
    document.getElementById("passing_yards_18").innerHTML =
      passing_obj._embedded.teamPassingStatsList[25].passYards;
    //passing yards 26
    document.getElementById("passing_yards_0").innerHTML =
      passing_obj._embedded.teamPassingStatsList[26].passYards;
    // passing yards 27
    document.getElementById("passing_yards_28").innerHTML =
      passing_obj._embedded.teamPassingStatsList[27].passYards;
    // passing yards 28
    document.getElementById("passing_yards_1").innerHTML =
      passing_obj._embedded.teamPassingStatsList[28].passYards;
    // passing yards 29
    document.getElementById("passing_yards_9").innerHTML =
      passing_obj._embedded.teamPassingStatsList[29].passYards;
    //passing yards 30
    document.getElementById("passing_yards_27").innerHTML =
      passing_obj._embedded.teamPassingStatsList[30].passYards;
    // passing yards 31
    document.getElementById("passing_yards_12").innerHTML =
      passing_obj._embedded.teamPassingStatsList[31].passYards;
    // null

    // team name 0
    document.getElementById("team_name_4").innerHTML =
      passing_obj._embedded.teamPassingStatsList[0].name;
    // team name 1
    document.getElementById("team_name_11").innerHTML =
      passing_obj._embedded.teamPassingStatsList[1].name;
    // team name 2
    document.getElementById("team_name_22").innerHTML =
      passing_obj._embedded.teamPassingStatsList[2].name;
    // team name 3
    document.getElementById("team_name_25").innerHTML =
      passing_obj._embedded.teamPassingStatsList[3].name;
    // team name 4
    document.getElementById("team_name_21").innerHTML =
      passing_obj._embedded.teamPassingStatsList[4].name;
    // team name 5
    document.getElementById("team_name_15").innerHTML =
      passing_obj._embedded.teamPassingStatsList[5].name;
    // team name 6
    document.getElementById("team_name_14").innerHTML =
      passing_obj._embedded.teamPassingStatsList[6].name;
    // team name 7
    document.getElementById("team_name_3").innerHTML =
      passing_obj._embedded.teamPassingStatsList[7].name;
    // team name 8
    document.getElementById("team_name_29").innerHTML =
      passing_obj._embedded.teamPassingStatsList[8].name;
    // team name 9
    document.getElementById("team_name_16").innerHTML =
      passing_obj._embedded.teamPassingStatsList[9].name;
    // team name 10
    document.getElementById("team_name_10").innerHTML =
      passing_obj._embedded.teamPassingStatsList[10].name;
    // team name 11
    document.getElementById("team_name_31").innerHTML =
      passing_obj._embedded.teamPassingStatsList[11].name;
    // team name 12
    document.getElementById("team_name_23").innerHTML =
      passing_obj._embedded.teamPassingStatsList[12].name;
    // team name 13
    document.getElementById("team_name_17").innerHTML =
      passing_obj._embedded.teamPassingStatsList[13].name;
    // team name 14
    document.getElementById("team_name_5").innerHTML =
      passing_obj._embedded.teamPassingStatsList[14].name;
    // team name 15
    document.getElementById("team_name_26").innerHTML =
      passing_obj._embedded.teamPassingStatsList[15].name;
    // team name 16
    document.getElementById("team_name_20").innerHTML =
      passing_obj._embedded.teamPassingStatsList[16].name;
    // team name 17
    document.getElementById("team_name_19").innerHTML =
      passing_obj._embedded.teamPassingStatsList[17].name;
    // team name 18
    document.getElementById("team_name_30").innerHTML =
      passing_obj._embedded.teamPassingStatsList[18].name;
    // team name 19
    document.getElementById("team_name_24").innerHTML =
      passing_obj._embedded.teamPassingStatsList[19].name;
    // team name 20
    document.getElementById("team_name_13").innerHTML =
      passing_obj._embedded.teamPassingStatsList[20].name;
    // team name 21
    document.getElementById("team_name_8").innerHTML =
      passing_obj._embedded.teamPassingStatsList[21].name;
    // team name 22
    document.getElementById("team_name_7").innerHTML =
      passing_obj._embedded.teamPassingStatsList[22].name;
    // team name 23
    document.getElementById("team_name_2").innerHTML =
      passing_obj._embedded.teamPassingStatsList[23].name;
    // team name 24
    document.getElementById("team_name_6").innerHTML =
      passing_obj._embedded.teamPassingStatsList[24].name;
    // team name 25
    document.getElementById("team_name_18").innerHTML =
      passing_obj._embedded.teamPassingStatsList[25].name;
    // team name 26
    document.getElementById("team_name_0").innerHTML =
      passing_obj._embedded.teamPassingStatsList[26].name;
    // team name 27
    document.getElementById("team_name_28").innerHTML =
      passing_obj._embedded.teamPassingStatsList[27].name;
    // team name 28
    document.getElementById("team_name_1").innerHTML =
      passing_obj._embedded.teamPassingStatsList[28].name;
    // team name 29
    document.getElementById("team_name_9").innerHTML =
      passing_obj._embedded.teamPassingStatsList[29].name;
    // team name 30
    document.getElementById("team_name_27").innerHTML =
      passing_obj._embedded.teamPassingStatsList[30].name;
    // team name 31
    document.getElementById("team_name_12").innerHTML =
      passing_obj._embedded.teamPassingStatsList[31].name;
  });

const rushingStatOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "nfl-team-stats.p.rapidapi.com",
    "X-RapidAPI-Key": "35ae043db2msh31e6f118f6fc8f9p11ee0fjsn977b28636f2e",
  },
};

fetch(
  "https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/rushing-stats/offense/2022",
  rushingStatOptions
)
  .then((response) => response.json())
  .then((rushingStats) => {
    const rushing = rushingStats;
    const rushingJSON = JSON.stringify(rushing);
    localStorage.setItem("rushing", rushingJSON);

    let text = localStorage.getItem("rushing");
    let rushing_obj = JSON.parse(text);

    // team name 0
    document.getElementById("rushing_yards_12").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[0].yards;
    // team name 1
    document.getElementById("rushing_yards_9").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[1].yards;
    // team name 2
    document.getElementById("rushing_yards_1").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[2].yards;
    // team name 3
    document.getElementById("rushing_yards_0").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[3].yards;
    // team name 4
    document.getElementById("rushing_yards_3").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[4].yards;
    // team name 5
    document.getElementById("rushing_yards_30").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[5].yards;
    // team name 6
    document.getElementById("rushing_yards_28").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[6].yards;
    // team name 7
    document.getElementById("rushing_yards_27").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[7].yards;
    // team name 8
    document.getElementById("rushing_yards_2").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[8].yards;
    // team name 9
    document.getElementById("rushing_yards_18").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[9].yards;
    // team name 10
    document.getElementById("rushing_yards_4").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[10].yards;
    // team name 11
    document.getElementById("rushing_yards_13").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[11].yards;
    // team name 12
    document.getElementById("rushing_yards_14").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[12].yards;
    // team name 13
    document.getElementById("rushing_yards_6").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[13].yards;
    // team name 14
    document.getElementById("rushing_yards_10").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[14].yards;
    // team name 15
    document.getElementById("rushing_yards_26").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[15].yards;
    // team name 16
    document.getElementById("rushing_yards_8").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[16].yards;
    // team name 17
    document.getElementById("rushing_yards_25").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[17].yards;
    // team name 18
    document.getElementById("rushing_yards_20").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[18].yards;
    // team name 19
    document.getElementById("rushing_yards_31").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[19].yards;
    // team name 20
    document.getElementById("rushing_yards_16").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[20].yards;
    // team name 21
    document.getElementById("rushing_yards_19").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[21].yards;
    // team name 22
    document.getElementById("rushing_yards_7").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[22].yards;
    // team name 23
    document.getElementById("rushing_yards_29").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[23].yards;
    // team name 24
    document.getElementById("rushing_yards_21").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[24].yards;
    // team name 25
    document.getElementById("rushing_yards_22").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[25].yards;
    // team name 26
    document.getElementById("rushing_yards_17").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[26].yards;
    // team name 27
    document.getElementById("rushing_yards_15").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[27].yards;
    // team name 28
    document.getElementById("rushing_yards_11").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[28].yards;
    // team name 29
    document.getElementById("rushing_yards_24").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[29].yards;
    // team name 30
    document.getElementById("rushing_yards_23").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[30].yards;
    // team name 31
    document.getElementById("rushing_yards_5").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[31].yards;

    // team name 0
    document.getElementById("r_name_12").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[0].name;
    // team name 1
    document.getElementById("r_name_9").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[1].name;
    // team name 2
    document.getElementById("r_name_1").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[2].name;
    // team name 3
    document.getElementById("r_name_0").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[3].name;
    // team name 4
    document.getElementById("r_name_3").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[4].name;
    // team name 5
    document.getElementById("r_name_30").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[5].name;
    // team name 6
    document.getElementById("r_name_28").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[6].name;
    // team name 7
    document.getElementById("r_name_27").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[7].name;
    // team name 8
    document.getElementById("r_name_2").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[8].name;
    // team name 9
    document.getElementById("r_name_18").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[9].name;
    // team name 10
    document.getElementById("r_name_4").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[10].name;
    // team name 11
    document.getElementById("r_name_13").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[11].name;
    // team name 12
    document.getElementById("r_name_14").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[12].name;
    // team name 13
    document.getElementById("r_name_6").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[13].name;
    // team name 14
    document.getElementById("r_name_10").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[14].name;
    // team name 15
    document.getElementById("r_name_26").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[15].name;
    // team name 16
    document.getElementById("r_name_8").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[16].name;
    // team name 17
    document.getElementById("r_name_25").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[17].name;
    // team name 18
    document.getElementById("r_name_20").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[18].name;
    // team name 19
    document.getElementById("r_name_31").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[19].name;
    // team name 20
    document.getElementById("r_name_16").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[20].name;
    // team name 21
    document.getElementById("r_name_19").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[21].name;
    // team name 22
    document.getElementById("r_name_7").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[22].name;
    // team name 23
    document.getElementById("r_name_29").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[23].name;
    // team name 24
    document.getElementById("r_name_21").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[24].name;
    // team name 25
    document.getElementById("r_name_22").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[25].name;
    // team name 26
    document.getElementById("r_name_17").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[26].name;
    // team name 27
    document.getElementById("r_name_15").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[27].name;
    // team name 28
    document.getElementById("r_name_11").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[28].name;
    // team name 29
    document.getElementById("r_name_24").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[29].name;
    // team name 30
    document.getElementById("r_name_23").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[30].name;
    // team name 31
    document.getElementById("5").innerHTML =
      rushing_obj._embedded.teamRushingStatsList[31].name;
  });
