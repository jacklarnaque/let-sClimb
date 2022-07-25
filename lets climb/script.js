
function copy() {
  
    /* Save value of myText to input variable */
    var text = +'00330785447633'
   
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(text);
     
    ("Copied Text: " + text);
    alert('copier dans le presse-papier!')

}

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://allsportdb-com.p.rapidapi.com/calendar',
  params: {objectType: '0'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'allsportdb-com.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
