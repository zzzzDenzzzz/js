const service_url = 'https://jsonplaceholder.typicode.com';

$.ajax({
  url: service_url + '/albums',
  method: 'get',
  dataType: 'json',
  success: function (data) {
    data.forEach(album => {
      drawAlbum(album)
    });

    loadPhotos();

  }
});

function drawAlbum(album) {
  const div = document.createElement('div');
  div.classList.add('album');

  const title = document.createElement('h3')
  title.innerText = album.title;

  const photosBox = document.createElement('div');
  photosBox.setAttribute('id', 'photosBox_' + album.id)
  photosBox.classList.add('photos-box')

  const button = document.createElement('span');
  button.innerText = 'Photo';
  button.classList.add('photos_button')

  div.append(title);
  div.append(button);
  div.append(photosBox);

  addOpenButtonListener(button);

  document.getElementById('albums').append(div);
}

function addOpenButtonListener(button) {

  button.addEventListener('click', function (e) {
    let photoBox = e.target.parentElement.querySelector('.photos-box');

    if (photoBox.style.display === 'block'){
      photoBox.style.display = 'none'
    } else {
      photoBox.style.display = 'block';
    }
  })
}

function loadPhotos() {
  $.ajax({
    url: service_url + '/photos',
    method: 'get',
    dataType: 'json',
    success: function (data) {
      data.forEach(photo => {

        drawFoto(photo)

      });
    }
  });
}

function drawFoto(photo) {
  const div = document.createElement('div');
  div.classList.add('photo');

  const title = document.createElement('h3')
  title.innerText = photo.title;

  const urlPhoto = document.createElement('img');
  urlPhoto.setAttribute('src', photo.thumbnailUrl);

  div.append(title);
  div.append(urlPhoto);

  const photosBox = document.getElementById('photosBox_' + photo.albumId);

  photosBox.append(div);
}