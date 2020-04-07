$(document).ready(function() {
  let tabs = $(".menu-item");
  tabs.on("click", function(ev) {
    ev.preventDefault();
    let activeTabs = $(this).attr("href");
    $(".visible").toggleClass("visible");
    $(activeTabs).toggleClass("visible");
    $(".menu-item-active").toggleClass("menu-item-active");
    $(this).toggleClass("menu-item-active");
  });
});
