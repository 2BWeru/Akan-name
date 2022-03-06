// collect data from text box
   // document.getElementById("Lname").value;
   // console.log(Lname);

// //let declare it as a variable
  let lname = document.getElementById("lname").value;
  let bornDate = document.getElementById("bornDate").value;

function myDay () {
   let bornDate = document.getElementById("bornDate").value;
    let myDay = alert("Calculating You Akan Name")
 }


let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let d = new Date();
let day = days[d.getDay()];
document.getElementById("theDay").innerHTML = day;


