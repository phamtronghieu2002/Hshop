
$(function()
{
  // xử lí respon-menu
    function active_respon_menu()
    {
      $('#wp-header #respon-menu').toggleClass('active-respon-menu')
    }
      
    function active_bg_opacity()
    {
         $('#bg-opacity ').fadeToggle()

    }

    $('#close-bar').click(function()
    {
         active_bg_opacity();
          active_respon_menu();
    })

    $('#nav-bar').click(function()
    {      
          active_bg_opacity();
          active_respon_menu();
    })

    $('#bg-opacity ').click(function()
    {
      active_respon_menu();
      active_bg_opacity();
     
    })
   
    $('#wp-header #respon-menu #content .list-cat li').click(function()
    {
      $(this).find('.items-menu').toggleClass('border-0');
        $(this).find('.act').toggleClass('fa-chevron-down');
        $(this).find('.act').toggleClass('fa-chevron-up');
        $(this).find('.sub-menu').slideToggle();
        $(this).find('.items-menu>a').toggleClass('fw-bold');
      
    })

//xử lí menu đa cấp content
      
 var li=$('#wp-content .wp-inner #side-bar .box-body .list-cat li');
 



function fix(selector)
{

  selector.find('.active').removeClass('fa-chevron-left');
  selector.find('.active').removeClass('fa-chevron-right');
  selector.find('.active').addClass('fa-chevron-up');

}

fix(li);
 function active_sub_menu_cat(selector)
 {

selector.find('.active').toggleClass('fa-chevron-up');
selector.find('.active').toggleClass('fa-chevron-down');
selector.find('.sub-menu').slideToggle();
 }
 li.hover(function()
 {
  active_sub_menu_cat($(this));
 },function(){
  active_sub_menu_cat($(this));
 })
  
  
// xử lí slider thumb

$('.main-thumb  .thumb').hide();
$('.main-thumb  .thumb:first-child').show();
$('.sub-thumb  .thumb:first-child').addClass('active-thumb')
$('.sub-thumb  .thumb').click(function()
{
  $('.sub-thumb  .thumb').removeClass('active-thumb')
   $(this).toggleClass('active-thumb')
   var index=$(this).index();
   $('.main-thumb  .thumb').hide();
   $('.main-thumb  .thumb:eq('+ index+')').fadeToggle(1000)
})


 
 





                   
// xử lí nút số lượng
$('input.input-qty').each(function() {
  var $this = $(this),
    qty = $this.parent().find('.is-form'),
    min = Number($this.attr('min')),
    max = Number($this.attr('max'))
  if (min == 0) {
    var d = 0
  } else d = min
  $(qty).on('click', function() {
    if ($(this).hasClass('minus')) {
      if (d > min) d += -1
    } else if ($(this).hasClass('plus')) {
      var x = Number($this.val()) + 1
      if (x <= max) d += 1
    }
    $this.attr('value', d).val(d)
  })
})
         
      

// xử lí cập hiển thị số sp trong giỏ hàng
var product_cart=JSON.parse(localStorage.getItem('product_cart'));
if(product_cart.length!=0)
{ 
    var i=0;
    product_cart.forEach(elm => {
       i+=1; 
    });
    $('#qty').text(i);
}
else
{
  $('#qty').text(0);
}
// owl-carousrel
// $(".owl-carousel").owlCarousel();
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  autoplayTimeout:2000,
  responsiveClass:true,
  dots:true,
  nav:false,

  responsive:{
      0:{
          items:2,
          nav:true
      },
      600:{
          items:3,
          nav:true
      },
      1000:{
          items:4,
          nav:true,
          loop:true
      }
  }
})
})
