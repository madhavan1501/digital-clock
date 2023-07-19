

        const clock=document.querySelector("#clock");
        const month=document.querySelector("#month");
        const day=document.querySelector("#day");
        const btn=document.querySelector("#btn");
        const date=document.querySelector(".date");
        const text=document.querySelector("#text");
        btn.addEventListener("click",()=>{
            clock.classList.toggle("clock2");
            date.classList.toggle("date2");
            if(btn.textContent == "Change to ~ 24-HRS"){
                btn.textContent="Change to ~ 12-HRS";
            }
            else{
                btn.textContent="Change to ~ 24-HRS";
            }
        });


function dgclock(){
    const time=new Date();
    let hours=time.getHours();
    const min=time.getMinutes();
    const sec=time.getSeconds();
    const date=time.getDate();
    const year=time.getFullYear();
    let may=time.getDay();
    const mon=time.getMonth()+1;

    if(btn.textContent == "Change to ~ 24-HRS"){

        if(hours > 12){
            hours=hours-12;
            text.textContent="PM";
        }
        else if(hours==0){
            text.textContent="AM";
            hours=12;
        }
        else if(hours == 12){
            text.textContent="PM";
        }
        clock.innerHTML=`${hours<10?"0"+hours:hours} : ${min<10?"0"+min:min} : ${sec<10?"0"+sec:sec} <p id="text"> ${text.textContent}<p>`;
    }
    else{
        clock.innerHTML=`${hours<10?"0"+hours:hours} : ${min<10?"0"+min:min} : ${sec<10?"0"+sec:sec}`;
    }

    month.innerHTML=`${date<10?"0"+date:date} - ${mon<10?"0"+mon:mon} - ${year<10?"0"+year:year}`;
    
    switch (may) {
           case 0:{
               may="Sun";
               break;
           }
           case 1:{
               may="Mon";
               break;
           }
           case 2:{
               may="Tue";
               break;
           }
           case 3:{
               may="Wed";
               break;
           }
           case 4:{
               may="Thu";
               break;
           }
           case 5:{
               may="Fri";
               break;
           }
           case 6:{
               may="Sat";
               break;
           }
           default:{
               may="you all are in mars"
               break;
           }
    }
    day.innerHTML=may;
}
dgclock();
setInterval(dgclock,1000);
















