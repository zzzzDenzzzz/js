const api = 'https://fakestoreapi.com';
let products = [];
let currentPage = 1;

function _setProducts(array){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: api + '/products?limit',        
            dataType: 'json',         
            success: function(response){   
                response.forEach(product => {
                    array.push(product);
                });
                resolve();
            },
            error: function(error){
                reject(error);
            }
        });
    });
}

_setProducts(products)
    .then(() => {
        _createHtml($('#_section-item-1'), products, 1);
    })
    .catch((error) => {
        console.error('Произошла ошибка:', error);
});

_createHtml($('#_section-item-1'), products)

function _createHtml(htmlElement, array, page)
{
    const startIndex = (page - 1) * 3;
    const endIndex = startIndex + 3;

    $(htmlElement).empty();

    for (let i = startIndex; i < endIndex && i < array.length; i++) {
        $(htmlElement).append(_createProductHtml(array[i]));
    }
}

function _createPaginationButtons() {
    const totalPages = Math.ceil(products.length / 3);

    $('#pagination').empty();

    for (let i = 1; i <= totalPages; i++) {
        const button = $('<button>').text(i).click(() => handlePageChange(i));

        if (i === currentPage) {
            button.addClass('active');
        }

        $('#pagination').append(button);
    }
}

function handlePageChange(page) {
    currentPage = page;
    _createHtml($('#_section-item-1'), products, currentPage);
 
    $('.active').removeClass('active');
    $(`#pagination button:nth-child(${currentPage})`).addClass('active');
}

_setProducts(products)
    .then(() => {
        _createHtml($('#_section-item-1'), products, currentPage);
        _createPaginationButtons();
    })
    .catch((error) => {
        console.error('Произошла ошибка:', error);
});

function _createProductHtml(array){
    return $(`
        <div class="page-content-items-item" id=''>
            <div class="section-items-item-photo">
                <div class="section-items-item-photo-mainImg">
                    <img src="${array.image}" alt="not found">
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
                    <h3>${array.price}</h3>
                </div>
            </div>
            <div class="section-items-item-description">
                ${array.title}
            </div>
            <div class="section-items-item-estimate">
                ${_getRating(array.rating.rate).prop('outerHTML')}
            </div>
            <div class="section-items-item-button">
                В корзину
            </div>
        </div>
    `)
}

function _zeroRatingHtml()
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

function _oneRatingHtml()
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

function _twoRatingHtml()
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

function _threeRatingHtml()
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

function _fourRatingHtml()
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

function _fiveRatingHtml()
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

function _getRating(rating)
{
    switch (true) {
        case parseFloat(rating) < 1:
            return _zeroRatingHtml();
        case parseFloat(rating) < 1.5:
            return _oneRatingHtml();
        case parseFloat(rating) < 2.5:
            return _twoRatingHtml();
        case parseFloat(rating) < 3.5:
            return _threeRatingHtml();
        case parseFloat(rating) < 4.5:
            return _fourRatingHtml();
        case parseFloat(rating) > 4.5:
            return _fourRatingHtml();
        default:
            return _fourRatingHtml();
    }
};