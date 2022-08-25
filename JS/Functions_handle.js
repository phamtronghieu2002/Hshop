const renderProducts = (id, thumb, name, price, old_price, slider = false) => {
    let toggleClass = slider == true ? '' : 'col-p-4 col-t-3 col-m-2';
    return `<li class='${toggleClass}'>
            <div class='item-product'> 
                    <a id_pro='${id}' href='detail_product.html' class='thumb'> <img src='${thumb}'class='img-fluid'> </a> 
                <div class='infor-pro'>
            <a id_pro='${id}' href='detail_product.html' class='name'>  ${name} </a>
            <p class='price'> ${price} <del class='old-price ms-2'>${old_price} </del> </p> 
                </div> 
        <div class='buy d-flex justify-content-between flex-wrap'>
            <div class='add-cart'> <a  id_pro='${id}'  href='cart.html'>Thêm giỏ hàng</a></div>
            <div class='buy-now'> <a id_pro='${id}'    href='detail_product.html'>Mua ngay</a> </div>
        </div>
            </div> 
              </li>`;
};
