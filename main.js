var gummiData = [
            {likes: 1,
            comments: ['Organized gummis are happy gummis! 😇', 'Eww.. brown gummis!? 🤮', 'I like sour gummis. 🤩'],
            caption: 'Gummi Bins',
            url: 'https://images.unsplash.com/photo-1507696460378-fc372bb90ed3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=156afbbc2bdbc645d1ec16cf7c042573'},
            {likes: 2,
            comments: ['Mmm.. crystals. 🤡', 'Wormy texture. 🧐', 'Pretty colors! 😍'],
            caption: 'Glistening Gummi Worm',
            url: 'https://images.unsplash.com/photo-1516747773440-e114ee0d3c07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c00ef145d0c418619cc1d8ada8d4c7ea'},
            {likes: 3,
            comments: ['Yummy symmetry 👍', 'Candy corn or gummies? 🧐', 'I eat food. 😋'],
            caption: 'Gummi Board',
            url: 'https://images.unsplash.com/photo-1507032248589-d4fabcffff6c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38178e995c50a28f124135169eab6bcb'},
            {likes: 4,
            comments: ['Tasty! 🍭', 'Spear the evil gummified fruit. 😈', 'Too much yellow 🤪'],
            caption: 'Gummi Skewers',
            url: 'https://images.unsplash.com/photo-1523872449040-e9f3c438d0bb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d68f73cbb13b743488760ff49d41985'},
            {likes: 6,
            comments: ['Gummi eggi goodness 😁', 'Hippity hoppity gummity. 🐰', 'Happy Easter! 😇'],
            caption: 'Easter Gummi',
            url: 'https://images.unsplash.com/photo-1523374311137-07f0aa18832b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=01aefcf755374bbff49f661d2a62935c'},
            {likes: 7,
            comments: ['Have your gummi and eat it, too! 🎂', 'Pretty pastelicious 🌈', 'Confetti Gummetti!!! 🤩'],
            caption: 'Gummi Yummy',
            url: 'https://images.unsplash.com/photo-1523872352054-4d35b4c058f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a954816295c5c5c843b422eda7ea1a0'},
            {likes: 8,
            comments: ['A healthier gummi option. 🤗', 'How will the gummi fit through the straw!? 😧', 'Blend before consumption. 🙃'],
            caption: 'Gummi Smoothie',
            url: 'https://images.unsplash.com/photo-1502579347381-2a885e40f6b0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0cc5078735c75706097cf4ea13ac627'},
            {likes: 9,
            comments: ['Old school gummi goodness. 🤣', 'Gummi color blending 🙌',],
            caption: 'Classic Gummi Worms',
            url: 'https://images.unsplash.com/photo-1529573978589-43d04495b62f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79a83be17690e9a25e2e0d6d60e84ebd'},
            {likes: 10,
            comments: ['My eyes!  The colors... 😱', 'I am lost in sugary chaos! 😜', 'Is that a purple toucan?  Yes! 🤡'],
            caption: 'Gummi Blast',
            url: 'https://images.unsplash.com/photo-1524821902305-7b8dc7ed4e41?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a70045eb8f99f2a44c2ac0f244de7afe'}
          ];

var showModal = function(i) {
  var modalContainers = document.querySelectorAll('.modal-container');
  var modals = document.querySelectorAll('.modal');
  cover.classList.add('cover-show');
  modalContainers[(modalContainers.length + i - 1) % modalContainers.length].classList.add('right');
  modalContainers[i].classList.add('show', 'center');
  modalContainers[(modalContainers.length + i + 1) % modalContainers.length].classList.add('left');
  modals[i].classList.add('fix-click');
}

var increaseLikes = function(button, i) {
  gummiData[i].likes++;
  button.textContent = 'Likes: ' + gummiData[i].likes;
  var modalLikes = document.querySelectorAll('.modal-likes')[i];
  modalLikes.textContent = 'Likes: ' + gummiData[i].likes;
};

var hideModal = function() {
  var modalContainers = document.querySelectorAll('.modal-container');
  var modals = document.querySelectorAll('.modal');
  cover.classList.remove('cover-show');
  for (var i = 0; i < modalContainers.length; i++) {
    if (Array(modalContainers[i].classList).includes('center')) {
      modalContainers[i].classList.remove('center');
    } else {
      modalContainers[i].classList.remove('show', 'left', 'right', 'center');
    }
  }
  for (var i = 0; i < modals.length; i++) {
    modals[i].classList.remove('fix-click');
  }
}

var cardList = document.querySelector('.card-list');

// Create list
gummiData.forEach((gummiItem, i) => {
  var cardItem = document.createElement('li');
  cardItem.classList.add('card-item');
  cardList.appendChild(cardItem);

  var cardImageContainer = document.createElement('div');
  cardImageContainer.classList.add('card-image-container');
  cardItem.appendChild(cardImageContainer);

  var cardImage = document.createElement('img');
  cardImage.setAttribute('src', gummiItem.url + '&auto=format&fit=crop&w=400&q=60');
  cardImage.classList.add('card-image');
  cardImageContainer.appendChild(cardImage);

  var cardCaption = document.createElement('p');
  cardCaption.textContent = gummiItem.caption;
  cardCaption.classList.add('card-caption');
  cardItem.appendChild(cardCaption);

  var cardButtonContainer = document.createElement('div');
  cardButtonContainer.classList.add('card-button-container');
  cardItem.appendChild(cardButtonContainer);

  var cardLikeButton = document.createElement('button');
  cardLikeButton.textContent = 'Likes: ' + gummiItem.likes;
  cardLikeButton.classList.add('card-button');
  cardButtonContainer.appendChild(cardLikeButton);

  var cardCommentButton = document.createElement('button');
  cardCommentButton.textContent = 'Comments: ' + gummiItem.comments.length;
  cardCommentButton.classList.add('card-button', 'comment-button');
  cardButtonContainer.appendChild(cardCommentButton);
  var imageClick = function() {
    cardList.classList.add('remove-scroll');
    showModal(i);
  };
  var likeClick = function() {
    increaseLikes(cardLikeButton, i);
  }
  cardImage.addEventListener('click', imageClick);
  cardLikeButton.addEventListener('click', likeClick);
  cardCommentButton.addEventListener('click', imageClick);
});

// Create Modals
gummiData.forEach((gummiItem, i) => {
  var modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');
  var modal = document.createElement('div');
  modal.classList.add('modal');

  var modalImageContainer = document.createElement('div');
  modalImageContainer.classList.add('modal-image-container');
  modal.appendChild(modalImageContainer);

  var modalInline = document.createElement('div');
  modalInline.classList.add('modal-inline');
  modalImageContainer.appendChild(modalInline);

  var modalImage = document.createElement('img');
  modalImage.setAttribute('src', gummiItem.url + '&auto=format&fit=crop&w=800&q=60');
  modalImage.classList.add('modal-image');
  modalImageContainer.appendChild(modalImage);

  var modalImageArrowLeft = document.createElement('div');
  modalImageArrowLeft.textContent = '<';
  modalImageArrowLeft.classList.add('modal-arrow-left', 'modal-image-arrow');
  modalImageContainer.appendChild(modalImageArrowLeft);

  var modalImageArrowRight = document.createElement('div');
  modalImageArrowRight.textContent = '>';
  modalImageArrowRight.classList.add('modal-arrow-right', 'modal-image-arrow');
  modalImageContainer.appendChild(modalImageArrowRight);

  var modalContents = document.createElement('div');
  modalContents.classList.add('modal-contents');

  var modalSpacer = document.createElement('div');
  modalSpacer.classList.add('spacer');
  modalContents.appendChild(modalSpacer);

  var modalClose = document.createElement('div');
  modalClose.textContent = 'X';
  modalClose.classList.add('modal-close');
  modalContents.appendChild(modalClose);

  var modalCommentContainer = document.createElement('div');
  modalCommentContainer.classList.add('modal-comment-container');
  modalContents.appendChild(modalCommentContainer);

  var modalTitle = document.createElement('h1');
  modalTitle.classList.add('modal-title');
  modalTitle.textContent = gummiItem.caption;
  modalCommentContainer.appendChild(modalTitle);


  for (var j = 0; j < gummiItem.comments.length; j++) {
    var modalComment = document.createElement('p');
    modalComment.textContent = gummiItem.comments[j];
    modalCommentContainer.appendChild(modalComment);
  }

  var modalSpacer2 = document.createElement('div');
  modalSpacer2.classList.add('spacer');
  modalContents.appendChild(modalSpacer2);

  var modalLikes = document.createElement('div');
  modalLikes.textContent = 'Likes: ' + gummiItem.likes;
  modalLikes.classList.add('modal-likes');
  modalContents.appendChild(modalLikes);

  modal.appendChild(modalContents);

  var modalArrowLeft = document.createElement('div');
  modalArrowLeft.textContent = '<';
  modalArrowLeft.classList.add('modal-arrow-left', 'modal-container-arrow');
  modal.appendChild(modalArrowLeft);

  var modalArrowRight = document.createElement('div');
  modalArrowRight.textContent = '>';
  modalArrowRight.classList.add('modal-arrow-right', 'modal-container-arrow');
  modal.appendChild(modalArrowRight);

  modalContainer.appendChild(modal);
  document.body.appendChild(modalContainer);
  // Event Listeners
  modalClose.addEventListener('click', () => {
    cardList.classList.remove('remove-scroll');
    hideModal();
  });
  var showLastModal = function() {
    console.log('click');
    hideModal();
    showModal((gummiData.length + i - 1) % gummiData.length);
  }
  var showNextModal = function() {
    hideModal();
    showModal((i + 1) % gummiData.length);
  }
  modalArrowLeft.addEventListener('click', showLastModal);
  modalImageArrowLeft.addEventListener('click', showLastModal);
  modalArrowRight.addEventListener('click', showNextModal);
  modalImageArrowRight.addEventListener('click', showNextModal);
  var modalSwipeHandler = new Hammer(modal);
  modalSwipeHandler.on('swipeleft swiperight', (event) => {
    if (event.type === 'swiperight') {
      showNextModal();
    }
    if (event.type === 'swipeleft') {
      showLastModal();
    }
  });
});

// Event Listeners
var cover = document.querySelector('.cover');
cover.addEventListener('click', () => {
  if (event.target == event.currentTarget){
    hideModal();
  }
});