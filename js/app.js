//
// capture the list or grid button once clicked

const list = document.querySelector(".btn-list")
const grid = document.querySelector(".btn-grid")

const prdGrid = document.querySelector(".products-grid")

// when this list button is clicked 
list.addEventListener("click", () => {
    prdGrid.classList.add("list")
    list.classList.add("active")
    grid.classList.remove("active")
})

// when the grid button is clicked.
grid.addEventListener("click", () => {
    prdGrid.classList.remove("list")
    grid.classList.add("active")
    list.classList.remove("active")
})


$(function () {
    $(".acc__title").click(function (j) {
        var dropDown = $(this).closest(".acc__card").find(".acc__panel");
        $(this).closest(".acc").find(".acc__panel").not(dropDown).slideUp();
  
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
        else {
            $(this).closest(".acc").find(".acc__title.active").removeClass("active");
            $(this).addClass("active");
        }
  
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
});