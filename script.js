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

// schedule
const scheduleOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '35ae043db2msh31e6f118f6fc8f9p11ee0fjsn977b28636f2e',
		'X-RapidAPI-Host': 'nfl-schedule.p.rapidapi.com',
    'Content-Type': 'application/json'
	}
};
let schedule = {
  fetchSchedule: function(){
    fetch("https://nfl-schedule.p.rapidapi.com/2020-2021-regular", scheduleOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      schedule.displaySchedule(data);
    })
    .catch(err => {
      console.error(err);
    });
  },
  displaySchedule: function(data){
    const { message } = data;
    const { homeTeam } = data.homeTeam[0];
    const { homeTeamScore } = data.HomeTeam[1];
    const { awayTeam } = data.awayTeam[0];
    const { awayTeamScore } = data.awayTeam[1];
    const { date } = data[0];
    const {shortHand } = data[3];
    const { name } = data[2];
    const { venue } = data[1];
    console.log(message,homeTeam,homeTeamScore,awayTeam,awayTeamScore,date,shortHand,name,venue);
  }
};

  // team news
const nflTeamNewsOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '35ae043db2msh31e6f118f6fc8f9p11ee0fjsn977b28636f2e',
    'X-RapidAPI-Host':'nfl-news-api.p.rapidapi.com'
  }
};

fetch('https://nfl-news-api.p.rapidapi.com/AllNews', nflTeamNewsOptions)
  .then(response => response.json())
  .then(teamNews => {
    const b = JSON.stringify(teamNews,undefined,2);
    document.getElementById('news').innerHTML = b;
  })
  .catch((error) => console.log(error))

