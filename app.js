const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  "a,.container,.navbar,.navbar-container,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

var redirectpage= "https://monsterhighuniverse.github.io/NewGhoulAtSchool_i/";
$('.external').each(
    function(){
    $(this).attr("href", "https://linkvertise.com/1024769/monster-high-new-ghoul/1"
 +$(this).attr('href') ); 

    $(this).attr("target","_blank");
    }


)