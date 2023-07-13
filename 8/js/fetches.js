function setCategories(element){
    $.ajax({
        url: api + '/products/categories',        
        dataType: 'json',         
        success: function(categories){  
            categories.forEach(category => {
                
                element.append(createCategoryHtml(category))
            });
        }
    })
};


function setProducts(element, limit = null, fake = false){
    if(fake){
        fakeProducts.forEach(fakeProduct => {
            element.append(createProductHtml(fakeProduct))
        });
    }else{
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
};


