const now = dayjs()

const currentDay = $("#currentDay")

const updateDate = () => {
  const currentTime = dayjs().format('DD-MM-YYYY HH:mm:ss');
  currentDay.text(currentTime);
};
updateDate();

setInterval(updateDate, 1000);

const workTime = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']

console.log(now);

