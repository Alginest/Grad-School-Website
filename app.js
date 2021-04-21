//selectors
const secondsD =  document.querySelector('.seconds');
const hoursD =  document.querySelector('.hours');
const minutesD =  document.querySelector('.minutes');
const daysD =  document.querySelector('.days');

// functions
function countDown (){
    // get the dates
       const now = new Date();
       const day = now.getDay();
       const hours = now.getHours();
       const minutes = now.getMinutes();
       const sec = now.getSeconds();
       //display
       daysD.textContent = `${day < 10 ? '0': ''}${day}`;
       secondsD.textContent = `${sec < 10 ? '0': ''}${sec}`;
       hoursD.textContent = `${hours < 10 ? '0': ''}${hours}`;
       minutesD.textContent = `${minutes < 10 ? '0': ''}${minutes}`;
       
    };
 setInterval(() => {
      countDown();
 }, 1000);



//listeners
