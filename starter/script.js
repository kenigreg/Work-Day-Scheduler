let txt1; let txt2; let txt3;
let Ind;
const now = dayjs()

//Get data from Local Storage
function getLocalStorage() {
  window.onload = function () {
    
        $("#txtArea0").html(localStorage.getItem("text0"));
       
        $("#txtArea1").append(localStorage.getItem("text1"));
      
        $("#txtArea2").append(localStorage.getItem("text2"));
       
        $("#txtArea3").append(localStorage.getItem("text3"));
       
        $("#txtArea4").append(localStorage.getItem("text4"));
       
        $("#txtArea5").append(localStorage.getItem("text5"));
      
        $("#txtArea6").append(localStorage.getItem("text6"));
       
        $("#txtArea7").append(localStorage.getItem("text7"));
      
        $("#txtArea8").append(localStorage.getItem("text8"));
    }
  
  }
  
  getLocalStorage();

//jquery to target the current day element 
const currentDay = $("#currentDay")


//Function to generate current day
const updateDate = () => {
  const currentTime = now.format('MMMM D, YYYY HH:mm A');
  currentDay.text(currentTime);
};
updateDate();

setInterval(updateDate, 1000);

// Code for formatted current time for standard business hours
const workTime = now.format('h A');

// Code for Timeblock for standard business hours
const workTableTime = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];



//Function to create Elements for the Timeblocks, Text Area and Save button
function createElements() {

  workTableTime.forEach((time, index) => {
    txt1 = $("<div></div>").addClass("col-md-1 hour").attr("id", index).text(time);
    txt2 = $("<textarea></textarea>").addClass("col-md-10 description").attr("id", "txtArea" + index);
    txt3 = $("<button></button>").addClass("btn saveBtn col-md-1").attr("id", "btn").text("Save");
    $( "#hr9" ).append(txt1, txt2, txt3);
  
//Code to apply Color code to the timeblock for past, present, and future events
    if (workTableTime[index] < workTime) {
      txt2.addClass( "past" );
    } else if (workTime < workTableTime[index]) {
      txt2.addClass( "future" );
    } else txt2.addClass("present");
    
  })
}
createElements();


//Event Listener to get User Input
$(document).ready(function () {
  $("textarea").on("keydown", function (event) {
      event.preventDefault;
      Ind = event.target.id;
     
      return Ind;
    },
  );

});


//Event Listener to Save User Input in Local Stotage
$(document).ready(function () {
  $("button").on("click", function (event) {
      event.preventDefault;
   
      let val;
     
      switch (Ind) {
        case "txtArea0":
          val = $("#txtArea0").val();
          localStorage.setItem("text0", val);
          break;
        case "txtArea1":
          val = $("#txtArea1").val();
          localStorage.setItem("text1", val);
          break;
        case "txtArea2":
          val = $("#txtArea2").val();
          localStorage.setItem("text2", val);
          break;
        case "txtArea3":
          val = $("#txtArea3").val();
          localStorage.setItem("text3", val);
          break;
        case "txtArea4":
          val = $("#txtArea4").val();
          localStorage.setItem("text4", val);
          break;
        case "txtArea5":
          val = $("#txtArea5").val();
          localStorage.setItem("text5", val);
          break;
        case "txtArea6":
          val = $("#txtArea6").val();
          localStorage.setItem("text6", val);
          break;
        case "txtArea7":
          val = $("#txtArea7").val();
          localStorage.setItem("text7", val);
          break;
        case "txtArea8":
          val = $("#txtArea8").val();
          localStorage.setItem("text8", val);
      }
    
  });

});







