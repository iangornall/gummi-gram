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

var showModal = function(i) {
  var modalContainer = $(`.modal-container:eq(${i})`);
  console.log(modalContainer);
  var modals = $(`.modal:eq(${i})`);
  cover.addClass('cover-show');
  modalContainer.addClass('show');
  modals.addClass('fix-click');
}

var increaseLikes = function(button, i) {
  gummiData[i].likes++;
  button.text('Likes: ' + gummiData[i].likes);
  var modalLikes = $(`.modal-likes:eq(${i})`);
  modalLikes.text('Likes: ' + gummiData[i].likes);
};

var hideModal = function() {
  var modalContainers = $('.modal-container');
  var modals = $('.modal');
  cover.removeClass('cover-show');
  modalContainers.removeClass('show');
  modals.removeClass('fix-click');
}

var cardList = $('.card-list');

// Create list
gummiData.forEach((gummiItem, i) => {
  var cardItem = $('<li>');
  cardItem.addClass('card-item');
  cardList.append(cardItem);

  var cardImageContainer = $('<div>');
  cardImageContainer.addClass('card-image-container');
  cardItem.append(cardImageContainer);

  var cardImage = $('<img>');
  cardImage.attr('src', gummiItem.url + '&auto=format&fit=crop&w=400&q=60');
  cardImage.addClass('card-image');
  cardImageContainer.append(cardImage);

  var cardCaption = $('<p>');
  cardCaption.text(gummiItem.caption);
  cardCaption.addClass('card-caption');
  cardItem.append(cardCaption);

  var cardButtonContainer = $('<div>');
  cardButtonContainer.addClass('card-button-container');
  cardItem.append(cardButtonContainer);

  var cardLikeButton = $('<button>');
  cardLikeButton.text('Likes: ' + gummiItem.likes);
  cardLikeButton.addClass('card-button');
  cardButtonContainer.append(cardLikeButton);

  var cardCommentButton = $('<button>');
  cardCommentButton.text('Comments: ' + gummiItem.comments.length);
  cardCommentButton.addClass('card-button', 'comment-button');
  cardButtonContainer.append(cardCommentButton);
  var imageClick = function() {
    showModal(i);
  };
  var likeClick = function() {
    increaseLikes(cardLikeButton, i);
  }
  cardImage.on('click', imageClick);
  cardLikeButton.on('click', likeClick);
  cardCommentButton.on('click', imageClick);
});

// Create Modals
gummiData.forEach((gummiItem, i) => {
  var modalContainer = $('<div>');
  modalContainer.addClass('modal-container');
  var modal = $('<div>');
  modal.addClass('modal');

  var modalImageContainer = $('<div>');
  modalImageContainer.addClass('modal-image-container');
  modal.append(modalImageContainer);

  var modalInline = $('<div>');
  modalInline.addClass('modal-inline');
  modalImageContainer.append(modalInline);

  var modalImage = $('<img>');
  modalImage.attr('src', gummiItem.url + '&auto=format&fit=crop&w=800&q=60');
  modalImage.addClass('modal-image');
  modalImageContainer.append(modalImage);

  var modalImageArrowLeft = $('<div>');
  modalImageArrowLeft.text('<');
  modalImageArrowLeft.addClass('modal-arrow-left modal-image-arrow');
  modalImageContainer.append(modalImageArrowLeft);

  var modalImageArrowRight = $('<div>');
  modalImageArrowRight.text('>');
  modalImageArrowRight.addClass('modal-arrow-right modal-image-arrow');
  modalImageContainer.append(modalImageArrowRight);

  var modalContents = $('<div>');
  modalContents.addClass('modal-contents');

  var modalSpacer = $('<div>');
  modalSpacer.addClass('spacer');
  modalContents.append(modalSpacer);

  var modalClose = $('<div>');
  modalClose.text('X');
  modalClose.addClass('modal-close');
  modalContents.append(modalClose);

  var modalCommentContainer = $('<div>');
  modalCommentContainer.addClass('modal-comment-container');
  modalContents.append(modalCommentContainer);


  for (var j = 0; j < gummiItem.comments.length; j++) {
    var modalComment = $('<p>');
    modalComment.text(gummiItem.comments[j]);
    modalCommentContainer.append(modalComment);
  }

  var modalLikes = $('<div>');
  modalLikes.text('Likes: ' + gummiItem.likes);
  modalLikes.addClass('modal-likes');
  modalContents.append(modalLikes);

  modal.append(modalContents);

  var modalArrowLeft = $('<div>');
  modalArrowLeft.text('<');
  modalArrowLeft.addClass('modal-arrow-left modal-container-arrow');
  modal.append(modalArrowLeft);

  var modalArrowRight = $('<div>');
  modalArrowRight.text('>');
  modalArrowRight.addClass('modal-arrow-right modal-container-arrow');
  modal.append(modalArrowRight);

  modalContainer.append(modal);
  $('body').append(modalContainer);
  // Event Listeners
  modalClose.on('click', hideModal);
  var showLastModal = function() {
    console.log(i);
    hideModal();
    showModal((gummiData.length + i - 1) % gummiData.length);
  }
  var showNextModal = function() {
    hideModal();
    showModal((i + 1) % gummiData.length);
  }
  modalArrowLeft.on('click', showLastModal);
  modalImageArrowLeft.on('click', showLastModal);
  modalArrowRight.on('click', showNextModal);
  modalImageArrowRight.on('click', showNextModal);

  var modalSwipeHandler = new Hammer(modal[0]);
  modalSwipeHandler.on('swipeleft swiperight', (event) => {
    if (event.type === 'swiperight') {
      showLastModal();
    }
    if (event.type === 'swipeleft') {
      showNextModal();
    }
  });
});

// Event Listeners
var cover = $('.cover');
cover.on('click', () => {
  if (event.target == event.currentTarget){
    hideModal();
  }
});