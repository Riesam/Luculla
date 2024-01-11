function myBtn() {
    let element = document.getElementById("animateArrow");
    element.classList.toggle("arrowDown");

    let moreCntnt = document.getElementById("moreContent");

    if (moreCntnt.style.display == "block") {
        moreCntnt.style.display = "none";
    }
    else {
        moreCntnt.style.display = "block";
    }

}


var modal = document.getElementById("myModal");

var btn = document.getElementById("calvinBtn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal1 = document.getElementById("myModal1");

var btn1 = document.getElementById("versaceBtn");

var span = document.getElementsByClassName("close")[1];


btn1.onclick = function() {
  modal1.style.display = "block";
}

span.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal1.style.display = "none";
  }
}

var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("diorBtn");

var span = document.getElementsByClassName("close")[2];


btn2.onclick = function() {
  modal2.style.display = "block";
}

span.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
}

var modal3 = document.getElementById("myModal3");

var btn3 = document.getElementById("faqBtn");

var span = document.getElementsByClassName("close")[3];


btn3.onclick = function() {
  modal3.style.display = "block";
}

span.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal3.style.display = "none";
  }
}

function soldOut() {
    alert("Sold Out!");
}

