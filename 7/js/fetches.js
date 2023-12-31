(function getCategories(){
    $.ajax({
        url: api + '/products/categories',        
        dataType: 'json',         
        success: function(categories){   
            categories.forEach(category => {
                catalog.append($(`<a class='catalog-link' target='_blank' href='${api + '/products/category/' + category}'>${category}</a>`))
            });
        }
    })
})();


function getProducts(element, limit = null){
    $.ajax({
        url: api + '/products?limit='+limit,        
        dataType: 'json',         
        success: function(products){   
            products.forEach(product => {
                element.append(createProductHtml(product))
            });
        }
    })
}

getProducts($('#section-item-1'), 4)


function createProductHtml(product){
    console.log(product.rating.rate);
    return $(`
        <div class="section-items-item" id=''>
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