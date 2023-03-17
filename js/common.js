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

  $(".nav_list").click(function () {
    $(this).children("ul").toggleClass("on").stop().slideToggle(400)
  })
})
