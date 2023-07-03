const service_url = 'https://jsonplaceholder.typicode.com';

$.ajax({
    url: service_url + '/albums',        
    method: 'get',            
    dataType: 'json',       
    success: function(data){ 
	    data.forEach(album => {
            drawAlbum(album)
        });

        loadPhotos();
    }
});

function drawAlbum(album){
    const div = document.createElement('div');
    div.classList.add('album');

    const title = document.createElement('h3')
    title.innerText = album.title;

    const imgBox = document.createElement('div');
    imgBox.setAttribute('id', 'commentsBox_'+ album.id)
    imgBox.classList.add('img-box')

    div.append(title);
    div.append(imgBox)

    document.getElementById('albums').append(div);
}

function loadPhotos(){
    $.ajax({
        url: service_url + '/photos',        
        method: 'get',            
        dataType: 'json',       
        success: function(data){ 
            data.forEach(photo => {
                drawPhoto(photo)
            });
        }
    });
}

function drawPhoto(photo){
    const div = document.createElement('div');
    div.classList.add('photo');

    const img = document.createElement('img')
    img.setAttribute('src', photo.url);

    div.append(img);

    document.getElementById('albums').append(div);
}