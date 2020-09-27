


function clock(){
  const fulldate=new Date();
  var hour=fulldate.getHours();
  var min=fulldate.getMinutes();
  var sec=fulldate.getSeconds();


  if(hour<10){
    hour="0"+hour;
  }
  if(min<10){
    min="0"+min;
  }
  if(sec<10){
    sec="0"+sec;
  }
  if(hour<=12){
    
    document.querySelector(".ap").innerHTML="AM";
    
  }
  if(hour>=12){
    document.querySelector(".ap").innerHTML="PM";
    hour=hour%12;
  }
  

  
  document.querySelector(".hour").innerHTML=hour;
  document.querySelector(".min").innerHTML=":"+min;
  document.querySelector(".sec").innerHTML=":"+sec;
  
}

setInterval(clock,1000)