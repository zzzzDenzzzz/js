function createCategoryHtml(category){

    return $(`
        <a href='#'>
            <div class="category" id=''>
                ${category}
            </div>
        </a>
    `)
}

function createProductHtml(product){

    return $(`
        <div class="product_${product.id} section-items-item ">
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
                <img src="./img/StarFull.png" alt="not found">
                <img src="./img/StarFull.png" alt="not found">
                <img src="./img/starEmpty.png" alt="not found">
                <img src="./img/starEmpty.png" alt="not found">
                <img src="./img/starEmpty.png" alt="not found">  
            </div>
            <div class="section-items-item-button">
                В корзину
            </div>
        </div>
    `)
}

