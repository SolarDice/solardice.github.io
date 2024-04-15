document.onkeydown = (e) => {
  if (e.key == 123) {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'I') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'C') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'J') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.key == 'U') {
      e.preventDefault();
  }
};


document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

if (devtools.isOpen) {


  setInterval(() => {

      var $all = document.querySelectorAll("*");

      for (var each of $all) {
          each.classList.add(`asdjaljsdliasud8ausdijaisdluasdjasildahjdsk${Math.random()}`);
      }
      

  }, 5);
}

function openNav() {
    document.getElementById("mySidebar").style.width = "220px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}




var acc = document.getElementsByClassName("accordion");
var hhh;

for (hhh = 0; hhh < acc.length; hhh++) {
  acc[hhh].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function myFunction1(x) {
  x.classList.toggle("change");
}




if (devtools.isOpen) {
  while (true) {
      console.log("Sorry, but we can't allow you to do that!")
  }
}


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
