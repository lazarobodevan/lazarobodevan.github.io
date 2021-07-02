window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "80px";
    document.getElementById("header").style.backgroundImage = "linear-gradient(#071931, #0D0118)";
    document.getElementById("header").style.transition = "all 0.7s ease";
  } else {
    document.getElementById("header").style.height = "120px";
    document.getElementById("header").style.backgroundImage = "none";
  }
}