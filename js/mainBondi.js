let listUnstyled = document.querySelectorAll(".list-unstyled li"),
    boxImg = Array.from(document.querySelectorAll(".box .img-fluid")),
    boxS = Array.from(document.querySelectorAll(".box"));
function removeActive() {
    listUnstyled.forEach((e) => {
        e.classList.remove("active"), this.classList.add("active");
    });
}
function mangeImgs() {
    boxImg.forEach((e) => {
        e.style.display = "none";
    }),
        document.querySelectorAll(this.dataset.cat).forEach((e) => {
            e.style.display = "block";
        });
}
function box() {
    boxS.forEach((e) => {
        e.style.backgroundColor = "#eff7fa";
    });
}
listUnstyled.forEach((e) => {
    e.addEventListener("click", removeActive), e.addEventListener("click", mangeImgs), e.addEventListener("click", box);
});
let buttonUp = document.querySelector(".up-bt");
(window.onscroll = function () {
    this.scrollY >= 250 ? buttonUp.classList.add("show") : buttonUp.classList.remove("show");
}),
    buttonUp.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
let allLinks = document.querySelectorAll(".all-links a");
function scrollSomeWhere(e) {
    e.forEach((e) => {
        e.addEventListener("click", function (e) {
            e.preventDefault(), document.querySelector(e.target.dataset.section).scrollIntoView({ behavior: "smooth" });
        });
    });
}
scrollSomeWhere(allLinks),
    $(".img-item").click(function () {
        let e = $(this).attr("src");
        $("#mainImage").attr("src", e);
    });

    $(document).ready(function(){
        $("#loading .spinner").fadeOut(2000,function(){
          $("#loading").fadeOut(1000,function(){
            $("body").css("overflow-y","auto")
          })
        })
      })