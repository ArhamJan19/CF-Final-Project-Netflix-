var right = 0;
var maxMargin;
var jumpMargin = 150;

function setWidth(){
  var boxwidth = document.querySelector(".container").offsetWidth;
  var displaywidth = document.querySelector(".row").offsetWidth;
  var displayheight = document.querySelector(".row").offsetHeight;
  var children = document.querySelectorAll(".row-container > .container").length;
  var outerboxwidth = children * boxwidth + (children*10);
  document.querySelector(".row-container").style.width = outerboxwidth+"px";
  document.querySelectorAll("button")[0].style.height = displayheight+"px";
  document.querySelectorAll("button")[1].style.height = displayheight+"px";
  maxMargin = outerboxwidth - displaywidth;
}

function setWidth2(){
  var boxwidth = document.querySelector(".container1").offsetWidth;
  var displaywidth = document.querySelector(".row").offsetWidth;
  var displayheight = document.querySelector(".row").offsetHeight;
  var children = document.querySelectorAll(".trend > .container1").length;
  var outerboxwidth = children * boxwidth + (children*10);
  document.querySelector(".trend").style.width = outerboxwidth+"px";
  document.querySelectorAll("button")[0].style.height = displayheight+"px";
  document.querySelectorAll("button")[1].style.height = displayheight+"px";
  maxMargin = outerboxwidth - displaywidth;
}


function setWidth3(){
  var boxwidth = document.querySelector(".container").offsetWidth;
  var displaywidth = document.querySelector(".row").offsetWidth;
  var displayheight = document.querySelector(".row").offsetHeight;
  var children = document.querySelectorAll(".pop > .container").length;
  var outerboxwidth = children * boxwidth + (children*10);
  document.querySelector(".pop").style.width = outerboxwidth+"px";
  document.querySelectorAll("button")[0].style.height = displayheight+"px";
  document.querySelectorAll("button")[1].style.height = displayheight+"px";
  maxMargin = outerboxwidth - displaywidth;
}

function setWidth4(){
  var boxwidth = document.querySelector(".container").offsetWidth;
  var displaywidth = document.querySelector(".row").offsetWidth;
  var displayheight = document.querySelector(".row").offsetHeight;
  var children = document.querySelectorAll(".gang > .container").length;
  var outerboxwidth = children * boxwidth + (children*10);
  document.querySelector(".gang").style.width = outerboxwidth+"px";
  document.querySelectorAll("button")[0].style.height = displayheight+"px";
  document.querySelectorAll("button")[1].style.height = displayheight+"px";
  maxMargin = outerboxwidth - displaywidth;
}

function setWidth5(){
  var boxwidth = document.querySelector(".container").offsetWidth;
  var displaywidth = document.querySelector(".row").offsetWidth;
  var displayheight = document.querySelector(".row").offsetHeight;
  var children = document.querySelectorAll(".india > .container").length;
  var outerboxwidth = children * boxwidth + (children*10);
  document.querySelector(".india").style.width = outerboxwidth+"px";
  document.querySelectorAll("button")[0].style.height = displayheight+"px";
  document.querySelectorAll("button")[1].style.height = displayheight+"px";
  maxMargin = outerboxwidth - displaywidth;
}

function slideLeft(event){
    var rowcont = document.querySelector(".row-container");
    if(right <= -maxMargin){
      event.preventDefault();
    }
    else{
      right -= jumpMargin;
    }
     rowcont.style.marginLeft = right+"px";
  }
  
  function slideRight(event){
    var rowcont = document.querySelector(".row-container");
    if(right==0){
      event.preventDefault();
    }
    else if(right >= maxMargin){
      event.preventDefault();
    }
    else{
       right += jumpMargin;
    }
    rowcont.style.marginLeft = right+"px";
  }
  function slideLefttrend (event){
    var rowcont = document.querySelector(".trend");
    if(right <= -maxMargin){
      event.preventDefault();
    }
    else{
      right -= jumpMargin;
    }
     rowcont.style.marginLeft = right+"px";
  }
  
  function slideRighttrend(event){
    var rowcont = document.querySelector(".trend");
    if(right==0){
      event.preventDefault();
    }
    else if(right >= maxMargin){
      event.preventDefault();
    }
    else{
       right += jumpMargin;
    }
    rowcont.style.marginLeft = right+"px";
  }
  function slideLeftpop(event){
    var rowcont = document.querySelector(".pop");
    if(right <= -maxMargin){
      event.preventDefault();
    }
    else{
      right -= jumpMargin;
    }
     rowcont.style.marginLeft = right+"px";
  }
  
  function slideRightpop(event){
    var rowcont = document.querySelector(".pop");
    if(right==0){
      event.preventDefault();
    }
    else if(right >= maxMargin){
      event.preventDefault();
    }
    else{
       right += jumpMargin;
    }
    rowcont.style.marginLeft = right+"px";
  }

  function slideLeftgang(event){
    var rowcont = document.querySelector(".gang");
    if(right <= -maxMargin){
      event.preventDefault();
    }
    else{
      right -= jumpMargin;
    }
     rowcont.style.marginLeft = right+"px";
  }
  
  function slideRightgang(event){
    var rowcont = document.querySelector(".gang");
    if(right==0){
      event.preventDefault();
    }
    else if(right >= maxMargin){
      event.preventDefault();
    }
    else{
       right += jumpMargin;
    }
    rowcont.style.marginLeft = right+"px";
  }

  function slideLeftindia(event){
    var rowcont = document.querySelector(".india");
    if(right <= -maxMargin){
      event.preventDefault();
    }
    else{
      right -= jumpMargin;
    }
     rowcont.style.marginLeft = right+"px";
  }
  
  function slideRightindia(event){
    var rowcont = document.querySelector(".india");
    if(right==0){
      event.preventDefault();
    }
    else if(right >= maxMargin){
      event.preventDefault();
    }
    else{
       right += jumpMargin;
    }
    rowcont.style.marginLeft = right+"px";
  }
window.onload=setWidth;