$(".pageBox").scroll(function() {
    var scrollTop = $(this).scrollTop();

        $(".scrollPrompt").css({
        opacity: function() {
            var elementHeight = $(".scrollPrompt").height(),
            opacity = ((elementHeight - scrollTop) / elementHeight);
            return opacity;
        }
    });
});

$(window).scroll(function(){ 
  var $el = $('.filter'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 96 && !isPositionFixed){ 
    $el.css({'position': 'fixed', 'top': '0px'}); 
  }
  if ($(this).scrollTop() < 96 && isPositionFixed){
    $el.css({'position': 'relative', 'top': '0px'}); 
  } 
});