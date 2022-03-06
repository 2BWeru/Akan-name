
function calcDate() {
const days = ["Sundays" , "Monday" , "tuesday", "wednesday" , "thusrday", "friday", "saturday"];
const d = new Date ();
let day = days[d.getDay()];
document.getElementById("bornDay").innerHTML = d.getDay();
}
calcDate();

