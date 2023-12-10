let txt1; let txt2; let txt3;

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
    txt2 = $("<textarea></textarea>").addClass("col-md-10 description").attr("id", index);
    txt3 = $("<button></button>").addClass("btn saveBtn col-md-1").text("Save");
    $( "#hr9" ).append(txt1, txt2, txt3);
  
    
    if (workTableTime[index] < workTime && workTableTime[index] != workTime ) {
      txt2.addClass( "past" );
    } else if (workTime < workTableTime[index]) {
      txt2.addClass( "future" );
    } else txt2.addClass("present");
    
  })

  
}
createElements();







