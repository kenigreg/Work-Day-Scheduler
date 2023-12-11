let txt1; let txt2; let txt3;
let Ind;

const now = dayjs()

//jquery to target the current day element 
const currentDay = $("#currentDay")

//Function to generate current day
const updateDate = () => {
  const currentTime = now.format('MMMM D, YYYY HH:mm A');
  currentDay.text(currentTime);
};
updateDate();

setInterval(updateDate, 1000);

const workTime = now.format('h A');


const workTableTime = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];



//Function to create Elements for the Timeblocks, Text Area and Save button
function createElements() {

  workTableTime.forEach((time, index) => {
    txt1 = $("<div></div>").addClass("col-md-1 hour").attr("id", index).text(time);
    txt2 = $("<textarea></textarea>").addClass("col-md-10 description").attr("id", "txtArea" + index);
    txt3 = $("<button></button>").addClass("btn saveBtn col-md-1").attr("id", "btn").text("Save");
    $( "#hr9" ).append(txt1, txt2, txt3);
  
    
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
          $("#txtArea0").append(localStorage.getItem("text0"));
          break;
        case "txtArea1":
          val = $("#txtArea1").val();
          localStorage.setItem("text1", val);
          $("#txtArea1").append(localStorage.getItem("text1"));
          break;
        case "txtArea2":
          val = $("#txtArea2").val();
          localStorage.setItem("text2", val);
          $("#txtArea2").append(localStorage.getItem("text2"));
          break;
        case "txtArea3":
          val = $("#txtArea3").val();
          localStorage.setItem("text3", val);
          $("#txtArea3").append(localStorage.getItem("text3"));
          break;
        case "txtArea4":
          val = $("#txtArea4").val();
          localStorage.setItem("text4", val);
          $("#txtArea4").append(localStorage.getItem("text4"));
          break;
        case "txtArea5":
          val = $("#txtArea5").val();
          localStorage.setItem("text5", val);
          $("#txtArea5").append(localStorage.getItem("text5"));
          break;
        case "txtArea6":
          val = $("#txtArea6").val();
          localStorage.setItem("text6", val);
          $("#txtArea6").append(localStorage.getItem("text6"));
          break;
        case "txtArea7":
          val = $("#txtArea7").val();
          localStorage.setItem("text7", val);
          $("#txtArea7").append(localStorage.getItem("text7"));
          break;
        case "txtArea8":
          val = $("#txtArea8").val();
          localStorage.setItem("text8", val);
          $("#txtArea8").append(localStorage.getItem("text8"));
      }
      
  }
  
      );

});



