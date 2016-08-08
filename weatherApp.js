var api_key = '8fb0eed6b05b1cc6ada64305212f246b';
var weather_Indy = 'http://api.openweathermap.org/data/2.5/weather?zip=46256,us&appid=8fb0eed6b05b1cc6ada64305212f246b&units=imperial';
var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?';
var forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?';
//var city = 'Indianapolis';


//$('#todayDate').text(month + "/" + day + "/" + year);


$(document).ready(function(){

	$('#getWeather').click(function(){
		$.ajax({
			url: weatherUrl,
			data:{
				q: $('#cityName').val(),
				units: 'imperial',
				appid: api_key
			},
			success: function(result){
				$('#showTemp').text(result.main.temp);
				$('#showConditions').text(result.weather[0].description);
				$('#showWind').text(result.wind.speed);
			}
		});
		$.ajax({
			url: forecastUrl,
			data:{
				q: $('#cityName').val(),
				units:'imperial',
				appid: api_key
			},
			success: function(result){

					var fcSize = result.list.length;
					console.log(fcSize);
					var currentTime = 0;
					var month = [];
					var day = [];
					var year = [];

				for(var i=0; i<fcSize; i++){
					currentTime = new Date((result.list[i].dt)*1000);
					month[i] = currentTime.getMonth(result.list[i].dt) + 1;
					day[i] = currentTime.getDate(result.list[i].dt);
					year[i] = currentTime.getFullYear(result.list[i].dt);	
				}

				//JSON like array... loop through the json array []
				//list.main[].temp?
				//idea 2: load forecast into array then print array instead of going directly through jQuery object
				$('#dayOne').text(month[0] + '/' + day[0] + '/' + year[0]);
				$('#dayTwo').text(month[1] + '/' + day[1] + '/' + year[1]);
				$('#dayThree').text(month[2] + '/' + day[2] + '/' + year[2]);
				$('#dayFour').text(month[3] + '/' + day[3] + '/' + year[3]);
				$('#dayFive').text(month[4] + '/' + day[4] + '/' + year[4]);
				$('#dayOneTemp').text(result.list[0].temp.max);
				$('#dayTwoTemp').text(result.list[1].temp.max);
				$('#dayThreeTemp').text(result.list[2].temp.max);
				$('#dayFourTemp').text(result.list[3].temp.max);
				$('#dayFiveTemp').text(result.list[4].temp.max);

				
			} //FUNCTION to loop through the data
		});

	});

});
