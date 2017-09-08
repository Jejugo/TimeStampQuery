var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

	app.get('/:dateVal', function(req, res){

		var months = ['January', 'Fabruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		var url = req.params.dateVal;

		if (url.indexOf(' ') < 0 && url.indexOf('%20') < 0){
			var time = new Date(url * 1000);

			//year
			var year = time.getFullYear();
			//month
			var month = time.getMonth();
			//day
			var day = time.getDay();

			if(month == '1'){
				month = months[0];
			}
			else if(month == '2'){
				month = months[1];
			}
			else if(month == '3'){
				month = months[2];
			}
			else if(month == '4'){
				month = months[3];
			}
			else if(month == '5'){
				month = months[4];
			}
			else if(month == '6'){
				month = months[5];
			}
			else if(month == '7'){
				month = months[6];
			}
			else if(month == '8'){
				month = months[7];
			}
			else if(month == '9'){
				month = months[8];
			}
			else if(month == '10'){
				month = months[9];
			}
			else if(month == '11'){
				month = months[10];
			}
			else if(month == '12'){
				month = months[11];
			}
			else{
				month = null;
			}

			if(month == null){
				var natural = null
			}

			else{
				var natural = month + " " + day +  ", " + year;
			}

			var jsonFormat = {
				unix: url,
				natural: natural
			};


			res.json(jsonFormat);
		}

		else if(url.indexOf(' ') > 0){

			var naturalDate = url;
			url = url.split(' ');	//transformar string num vetor
			var newDate = url[1] + "/" + url[0] + "/" + url[2];  
			var unixTime = new Date(newDate).getTime();

			var jsonFormat = {
				unix: unixTime,
				natural: naturalDate
			};

			res.json(jsonFormat);
		}
		
	});
};