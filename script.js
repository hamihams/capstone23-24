let z = 0;
function myMoveFunction() {
    document.getElementById("heart").innerHTML = z+=1;
  }

  function mouseOver() {
    document.getElementById("one").style.color = "orange";
  }
  
  function mouseOut() {
    document.getElementById("one").style.color = "blue";
  }


  
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
}