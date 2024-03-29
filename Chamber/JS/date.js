//select the date element to manipulate(output to)
const datefield = document.querySelector(".date");

//derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`; 

//Footer //

/*document.getElementById("it").textContent = 'deu certo';


document.getElementById(".last").textContent ='agora vai';

*/

let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  let d = new Date();
  let dayName = daynames[d.getDay()];
  let monthName = months[d.getMonth()];
  
  let fulldat =  dayName + " " + monthName + " " + d.getDate() + ", " + d.getFullYear();
  
 document.getElementById("last").textContent = "Last Updated: " + fulldat;
  
  try { 
      let options = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
      };
      document.getElementById("last").textContent = "Last Update: " + new Date().toLocaleDateString("en-US", options);
  } catch (e) {
    alert("Error with code or your browser does not support Locale");
  }
  