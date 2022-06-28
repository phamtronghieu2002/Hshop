
$(function()
{
       



   //  localStorage.clear()
     $('.list-cat li a').click(function()
     {
        id_cat= $(this).attr("id_cat");
  
        localStorage.setItem('id_cat',JSON.stringify(id_cat));
        console.log(id_cat)
        localStorage.setItem('check_click',true);
       

     })
   

     $('.cat .list-cat .sub-menu  .list-brand  li a').click(function()
     {
        id_cat= $(this).attr("id_cat");
        code_brand=$(this).attr('code_brand');
            
        
        localStorage.setItem('id_cat_brand',JSON.stringify(id_cat));
        localStorage.setItem('code_brand',JSON.stringify(code_brand));
          localStorage.setItem('check_click',false);

          console.log(id_cat)
          
          console.log(code_brand)


     })
   

     $('.list-product  a').click(function()
{
     var id_pro=$(this).attr('id_pro')
    localStorage.setItem('id_pro',id_pro);



})

$('#cart a').click(function()
{
    localStorage.setItem('check_click_cart',true);
})
      




})
