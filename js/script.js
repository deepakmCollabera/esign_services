$(document).ready(function(){
  $(".modal_open").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    let modal = $(this).attr("data-modalName");
    $("#"+modal+"").addClass("active");
  })

  $(".custom_modal_header button").click(function(){
    $(this).parent().parent().parent(".custom_modal").removeClass("active");
  })

  // scroll_actions -active
  $(".scroll_actions li span").click(function(){
    $(this).parent().parent().parent(".scroll_actions").toggleClass("active");
  })

  // profile_card_show
  $(".profile_card_show").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $(this).children(".profile_card").toggleClass("active");
  })

  $(".close_card").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $(this).parent(".profile_card").removeClass("active");
  })
  
  $(".docs_mainwrap p, .info_table .accordion-toggle").click(function(e){
    e.stopPropagation();
    e.preventDefault();
  })
})
$(function() {
  $('.box').matchHeight();
});