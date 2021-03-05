const moment = require('moment')
const date = moment();
console.log ("Date is: ",date); 
function citySearch() {
    var searchCity = "";
    document.getElementById("find-city").innerHTML = searchCity;
    console.log(searchCity);
}
