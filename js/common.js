$(function () {
  $(".gotop").click(function () {
    $("html").animate({ scrollTop: 0 }, 1000)
  })

  $(".search").on("click", function () {
    $(".search_box").addClass("on")
  })

  $(".close").on("click", function () {
    $(".search_box").removeClass("on")
  })

  $(".nav").click(function () {
    $(this).children(".nav_list").toggleClass("on").stop().slideToggle(200)
  })
})
