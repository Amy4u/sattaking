// current time with updated seconds
// function showTime() {
//   var date = new Date();
//   var h = date.getHours(); // 0 - 23
//   var m = date.getMinutes(); // 0 - 59
//   var s = date.getSeconds(); // 0 - 59
//   var session = "AM";

//   if (h == 0) {
//     h = 12;
//   }

//   if (h > 12) {
//     h = h - 12;
//     session = "PM";
//   }

//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

//   var time = h + ":" + m + ":" + s + " " + session;
//   document.getElementById("MyClockDisplay").innerText = time;
//   document.getElementById("MyClockDisplay").textContent = time;

//   setTimeout(showTime, 1000);
// }
// showTime();

// month date year
// Date object
  // var mL = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // var mS = [
  //   "Jan",
  //   "Feb",
  //   "Mar",
  //   "Apr",
  //   "May",
  //   "June",
  //   "July",
  //   "Aug",
  //   "Sept",
  //   "Oct",
  //   "Nov",
  //   "Dec",
  // ];

  // const date = new Date();

  // let currentDay = String(date.getDate()).padStart(2, "0");

  // let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

  // let currentYear = date.getFullYear();

  // let currentDate = `${mL[Number(currentMonth) - 1]} ${currentDay}, ${currentYear}`;
  // document.getElementById('clock_month').innerText = currentDate;
  // console.log(document.getElementById('clock_month').innerText = currentDate);