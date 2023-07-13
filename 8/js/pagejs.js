const api = 'https://fakestoreapi.com';

function getProducts(element, limit = null){
    $.ajax({
        url: api + '/products?limit=' + limit,        
        dataType: 'json',         
        success: function(products){   
            products.forEach(product => {
                element.append(createProductHtml(product))
            });
        }
    })
}

//getProducts($('#section-item-1'), 3)

function createProductHtml(product){
    return $(`
        <div class="page-content-items-item" id=''>
            <div class="section-items-item-photo">
                <div class="section-items-item-photo-mainImg">
                    <img src="${product.image}" alt="not found">
                </div>
                <div class="section-items-item-photo-discountImg">
                    <img src="./img/discount.png" alt="not found">
                </div>
                <div class="section-items-item-photo-likeImg">
                    <img src="./img/like.png" alt="not found">
                </div>
            </div>
            <div class="section-items-item-price">
                <div class="section-items-item-price-withCard">
                    <h3>${product.price}</h3>
                </div>
            </div>
            <div class="section-items-item-description">
                ${product.title}
            </div>
            <div class="section-items-item-estimate">
                ${getRating(product.rating.rate).prop('outerHTML')}
            </div>
            <div class="section-items-item-button">
                В корзину
            </div>
        </div>
    `)
}

$(document).ready(function() {
    const productsContainer = $('.products-container');
    
    // Получаем товары и добавляем их на страницу
    getProducts(productsContainer, 3);
    
     const paginationContainer = document.querySelector('.pagination-container');
     /*
     // Создаем HTML-код всех групп товаров
     const productsHtml = createProductHtml(products);
     
     // Добавляем HTML-код на страницу
     productsContainer.html(productsHtml);
     */
     // Разбиваем фрагменты HTML-кода по группам товаров
     const productGroups = Array.from(document.querySelectorAll('.product-group'));
     
     // Создаем номера для каждой группы товаров и добавляем их в контейнер пагинации
   for (let i = 0; i < productGroups.length; i++) {
       const pageNumber = i + 1;
       const paginationItem = document.createElement('span');
       
       paginationItem.textContent = pageNumber;
       
       // Добавляем обработчик события для отображения соответствующей группы товаров при нажатии на номер
       paginationItem.addEventListener('click', () => {
         productGroups.forEach(group => group.style.display = 'none');
         productGroups[i].style.display = 'block';
         
         // Устанавливаем класс активного элемента пагинации
         $(paginationItem).addClass('active').siblings().removeClass('active');
       });
       
       // Добавляем номер в контейнер пагинации
       paginationContainer.appendChild(paginationItem);
   }
});

function zeroRatingHtml()
{
    return $(`
    <div>
        <img src="./img/starEmpty.png" alt="not found">
        <img src="./img/starEmpty.png" alt="not found">
        <img src="./img/starEmpty.png" alt="not found">
        <img src="./img/starEmpty.png" alt="not found">
        <img src="./img/starEmpty.png" alt="not found">
    </div>
    `)
}

function oneRatingHtml()
{
    return $(`
    <div>
        <img src="./img/StarFull.png" alt="not found">
        <img src="./img/starEmpty.png" alt="not found">
        <img src="./img/starEmpty.png" alt="not found">
        <img src="./img/starEmpty.png" alt="not found">
        <img src="./img/starEmpty.png" alt="not found">
    </div>
    `)
}

function twoRatingHtml()
{
    return $(`
    <div>
        <img src="./img/StarFull.png" alt="not found">
        <img src="./img/StarFull.png" alt="not found">
        <img src="./img/starEmpty.png" alt="not found">
        <img src="./img/starEmpty.png" alt="not found">
        <img src="./img/starEmpty.png" alt="not found">
    </div>
    `)
}

function threeRatingHtml()
{
    return $(`
    <div>
        <img src="./img/StarFull.png" alt="not found">
        <img src="./img/StarFull.png" alt="not found">
        <img src="./img/StarFull.png" alt="not found">
        <img src="./img/starEmpty.png" alt="not found">
        <img src="./img/starEmpty.png" alt="not found">
    </div>
    `)
}

function fourRatingHtml()
{
    return $(`
    <div>
        <img src="./img/StarFull.png" alt="not found">
        <img src="./img/StarFull.png" alt="not found">
        <img src="./img/StarFull.png" alt="not found">
        <img src="./img/StarFull.png" alt="not found">
        <img src="./img/starEmpty.png" alt="not found">
    </div>
    `)
}

function fiveRatingHtml()
{
    return $(`
    <div>
        <img src="./img/StarFull.png" alt="not found">
        <img src="./img/StarFull.png" alt="not found">
        <img src="./img/StarFull.png" alt="not found">
        <img src="./img/StarFull.png" alt="not found">
        <img src="./img/StarFull.png" alt="not found">
    </div>
    `)
}

function getRating(rating)
{
    switch (true) {
        case parseFloat(rating) < 1:
            return zeroRatingHtml();
        case parseFloat(rating) < 1.5:
            return oneRatingHtml();
        case parseFloat(rating) < 2.5:
            return twoRatingHtml();
        case parseFloat(rating) < 3.5:
            return threeRatingHtml();
        case parseFloat(rating) < 4.5:
            return fourRatingHtml();
        case parseFloat(rating) > 4.5:
            return fourRatingHtml();
    }
};