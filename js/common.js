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

  $(".nav_list:nth-child(1) ").on("click", function () {
    $(".nav_list:nth-child(1) ul").addClass("on").stop().slideToggle(400)
  })

  $(".nav_list:nth-child(2) ").on("click", function () {
    $(".nav_list:nth-child(2) ul").addClass("on").stop().slideToggle(400)
  })

  $(".nav_list:nth-child(3) ").on("click", function () {
    $(".nav_list:nth-child(3) ul").addClass("on").stop().slideToggle(400)
  })

  $(".nav_list:nth-child(4) ").on("click", function () {
    $(".nav_list:nth-child(4) ul").addClass("on").stop().slideToggle(400)
  })

  $(".nav_list:nth-child(5) ").on("click", function () {
    $(".nav_list:nth-child(5) ul").addClass("on").stop().slideToggle(400)
  })
})
