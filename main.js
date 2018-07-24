var gummiData = [
            {likes: 1,
            comments: ['this', 'that', 'the other'],
            caption: 'Gummi Bins',
            url: 'https://images.unsplash.com/photo-1507696460378-fc372bb90ed3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=156afbbc2bdbc645d1ec16cf7c042573'},
            {likes: 2,
            comments: ['this', 'that', 'the other'],
            caption: 'Glistening Gummi Worm',
            url: 'https://images.unsplash.com/photo-1516747773440-e114ee0d3c07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c00ef145d0c418619cc1d8ada8d4c7ea'},
            {likes: 3,
            comments: ['this', 'that', 'the other'],
            caption: 'Gummi Board',
            url: 'https://images.unsplash.com/photo-1507032248589-d4fabcffff6c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38178e995c50a28f124135169eab6bcb'},
            {likes: 4,
            comments: ['this', 'that', 'the other'],
            caption: 'Gummi Skewers',
            url: 'https://images.unsplash.com/photo-1523872449040-e9f3c438d0bb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d68f73cbb13b743488760ff49d41985'},
            {likes: 6,
            comments: ['this', 'that', 'the other'],
            caption: 'Easter Gummi',
            url: 'https://images.unsplash.com/photo-1523374311137-07f0aa18832b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=01aefcf755374bbff49f661d2a62935c'},
            {likes: 7,
            comments: ['this', 'that', 'the other'],
            caption: 'Gummi Yummy',
            url: 'https://images.unsplash.com/photo-1523872352054-4d35b4c058f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a954816295c5c5c843b422eda7ea1a0'},
            {likes: 8,
            comments: ['this', 'that', 'the other'],
            caption: 'Gummi Smoothie',
            url: 'https://images.unsplash.com/photo-1502579347381-2a885e40f6b0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0cc5078735c75706097cf4ea13ac627'},
            {likes: 9,
            comments: ['this', 'that', 'the other'],
            caption: 'Classic Gummi Worms',
            url: 'https://images.unsplash.com/photo-1529573978589-43d04495b62f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79a83be17690e9a25e2e0d6d60e84ebd'},
            {likes: 10,
            comments: ['this', 'that', 'the other'],
            caption: 'Gummi Blast',
            url: 'https://images.unsplash.com/photo-1524821902305-7b8dc7ed4e41?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a70045eb8f99f2a44c2ac0f244de7afe'}
          ];

var showModal = function(event) {
  var modalContainers = document.querySelectorAll('.modal-container');
  var modals = document.querySelectorAll('.modal');
  cover.classList.add('cover-show');
  modalContainers[event.target.dataset.index].classList.add('show');
  modals[event.target.dataset.index].classList.add('fix-click');
}

var hideModal = function() {
  var modalContainers = document.querySelectorAll('.modal-container');
  var modals = document.querySelectorAll('.modal');
  cover.classList.remove('cover-show');
  for (var i = 0; i < modalContainers.length; i++) {
    modalContainers[i].classList.remove('show');
  }
  for (var i = 0; i < modals.length; i++) {
    modals[i].classList.remove('fix-click');
  }
}

var gummiList = document.querySelector('.gummi-list');

// Create list
for (var i = 0; i < gummiData.length; i++) {
  var gummiItem = document.createElement('li');
  gummiItem.classList.add('gummi-item');
  gummiItem.tabIndex = 0;
  gummiList.appendChild(gummiItem);

  var gummiImageContainer = document.createElement('div');
  gummiImageContainer.classList.add('gummi-image-container');
  gummiItem.appendChild(gummiImageContainer)

  var gummiImage = document.createElement('img');
  gummiImage.setAttribute('src', gummiData[i].url + '&auto=format&fit=crop&w=400&q=60');
  gummiImage.classList.add('gummi-image');
  gummiImage.dataset.index = i;
  gummiImageContainer.appendChild(gummiImage);

  var gummiCaption = document.createElement('p');
  gummiCaption.textContent = gummiData[i].caption;
  gummiCaption.classList.add('gummi-caption');
  gummiItem.appendChild(gummiCaption);

  var gummiButtonContainer = document.createElement('div');
  gummiButtonContainer.classList.add('gummi-button-container');
  gummiItem.appendChild(gummiButtonContainer);

  var gummiLikeButton = document.createElement('button');
  gummiLikeButton.textContent = 'Likes: ' + gummiData[i].likes;
  gummiLikeButton.classList.add('gummi-button');
  gummiButtonContainer.appendChild(gummiLikeButton);
  gummiLikeButton.dataset.index = i;

  gummiLikeButton.addEventListener('click', (event) => {
    gummiData[event.currentTarget.dataset.index].likes++;
    event.currentTarget.textContent = 'Likes: ' + gummiData[event.currentTarget.dataset.index].likes;
  })

  var gummiCommentButton = document.createElement('button');
  gummiCommentButton.textContent = 'Comments: ' + gummiData[i].comments.length;
  gummiCommentButton.classList.add('gummi-button', 'comment-button');
  gummiCommentButton.dataset.index = i;
  gummiButtonContainer.appendChild(gummiCommentButton);
}

// Create Modals
for (var i = 0; i < gummiData.length; i++) {
  var modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');
  var modal = document.createElement('div');
  modal.classList.add('modal');

  var modalImage = document.createElement('img');
  modalImage.setAttribute('src', gummiData[i].url + '&auto=format&fit=crop&w=800&q=60');
  modalImage.classList.add('modal-image');
  modal.appendChild(modalImage);

  var modalContents = document.createElement('div');
  modalContents.classList.add('modal-contents');

  var modalClose = document.createElement('div');
  modalClose.textContent = 'X';
  modalClose.classList.add('modal-close');
  modalClose.dataset.index = i;
  modalContents.appendChild(modalClose);

  modalClose.addEventListener('click', hideModal);

  var modalCommentContainer = document.createElement('div');
  modalCommentContainer.classList.add('modal-comment-container');
  modalContents.appendChild(modalCommentContainer);


  for (var j = 0; j < gummiData[i].comments.length; j++) {
    var modalComment = document.createElement('p');
    modalComment.textContent = gummiData[i].comments[j];
    modalCommentContainer.appendChild(modalComment);
  }

  var modalLikes = document.createElement('div');
  modalLikes.textContent = 'Likes: ' + gummiData[i].likes;
  modalLikes.classList.add('modal-likes');
  modalContents.appendChild(modalLikes);

  modal.appendChild(modalContents);

  modalContainer.appendChild(modal);
  document.body.appendChild(modalContainer);
}

// Event Listeners
var gummiImages = document.querySelectorAll('.gummi-image');
for (var i = 0; i < gummiImages.length; i++) {
  gummiImages[i].addEventListener('click', showModal);
}

var commentButtons = document.querySelectorAll('.comment-button');
for (var i = 0; i < commentButtons.length; i++) {
  commentButtons[i].addEventListener('click', showModal);
}

var cover = document.querySelector('.cover');
cover.addEventListener('click', () => {
  if (event.target == event.currentTarget){
    hideModal();
  }
});