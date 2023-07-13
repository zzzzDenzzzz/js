(function initFavoritesProductsStorage(){
    if(!localStorage.getItem('favoriteProducts')){
        const favoriteProductsStorage = [];
        localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProductsStorage))
    }
})();

function addFavoritesProductId(id){
    let favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts'));

    if(favoriteProducts.indexOf(Number(id)) == -1){
        favoriteProducts.push(Number(id));
    }else{
        removeFavoritesProductId(id);
        return;
    }

    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts))
}

function removeFavoritesProductId(id){
    let favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts'));

    const index = favoriteProducts.indexOf(Number(id));
    favoriteProducts.splice(index, 1);

    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts))
}

