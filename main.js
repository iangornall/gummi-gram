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
var showCard = function(event) {
  var cardContainers = document.querySelectorAll('.card-container');
  var cards = document.querySelectorAll('.card');
  cover.classList.add('cover-show');
  cardContainers[event.target.dataset.index].classList.add('show');
  cards[event.target.dataset.index].classList.add('fix-click');
}

var hideCard = function() {
  console.log('clicked');
  var cardContainers = document.querySelectorAll('.card-container');
  var cards = document.querySelectorAll('.card');
  cover.classList.remove('cover-show');
  for (var i = 0; i < cardContainers.length; i++) {
    cardContainers[i].classList.remove('show');
  }
  for (var i = 0; i < cards.length; i++) {
    cards[i].classList.remove('fix-click');
  }
}

var gummiList = document.createElement('ul');
gummiList.classList.add('gummi-list');

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
document.body.appendChild(gummiList);

var cover = document.createElement('div');
cover.classList.add('cover');

document.body.appendChild(cover);

for (var i = 0; i < gummiData.length; i++) {
  var cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');
  var card = document.createElement('div');
  card.classList.add('card');

  var cardImage = document.createElement('img');
  cardImage.setAttribute('src', gummiData[i].url + '&auto=format&fit=crop&w=800&q=60');
  cardImage.classList.add('card-image');
  card.appendChild(cardImage);

  var cardContents = document.createElement('div');
  cardContents.classList.add('card-contents');

  var cardClose = document.createElement('div');
  cardClose.textContent = 'X';
  cardClose.classList.add('card-close');
  cardClose.dataset.index = i;
  cardContents.appendChild(cardClose);

  cardClose.addEventListener('click', hideCard);

  var cardCommentContainer = document.createElement('div');
  cardCommentContainer.classList.add('card-comment-container');
  cardContents.appendChild(cardCommentContainer);


  for (var j = 0; j < gummiData[i].comments.length; j++) {
    var cardComment = document.createElement('p');
    cardComment.textContent = gummiData[i].comments[j];
    cardCommentContainer.appendChild(cardComment);
  }

  var cardLikes = document.createElement('div');
  cardLikes.textContent = 'Likes: ' + gummiData[i].likes;
  cardLikes.classList.add('card-likes');
  cardContents.appendChild(cardLikes);

  card.appendChild(cardContents);
  cardContainer.appendChild(card);
  document.body.appendChild(cardContainer);
}

var gummiImages = document.querySelectorAll('.gummi-image');

for (var i = 0; i < gummiImages.length; i++) {
  gummiImages[i].addEventListener('click', showCard);
}

var commentButtons = document.querySelectorAll('.comment-button');

for (var i = 0; i < commentButtons.length; i++) {
  commentButtons[i].addEventListener('click', showCard);
}

cover.addEventListener('click', () => {
  if (event.target == event.currentTarget){
    hideCard();
  }
});

// document.addEventListener('click', (event) => {
//   if (gummiImages.indexOf(event.target) != -1) {
//     document.body.removeChild(event.target)
//   }
// })