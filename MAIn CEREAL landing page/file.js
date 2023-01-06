
document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'))
function animate() {
    var reveals = document.querySelectorAll(".animate");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", animate);

  let slideIndex =0;
  showSlides();

  function showSlides()  {
    let i;
    let slides=document.getElementsByClassName(".mySLides");
    for (i=0; i<slides.length;i++){
      slides[i].getElementsByClassName.display="none"
    }
    slideindex++;
    if(slideIndex > slides.length){
      slideIndex=1
    }
    slides[slideImdex-1].getElementsByClassName.display="block";
    setTimeout(showSlides, 2000)
  }
