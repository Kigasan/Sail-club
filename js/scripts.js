// header popup

let navigation = document.querySelector('.header-nav');
let navigationList = document.querySelector('.header-nav-list');
let accountButton = document.querySelector('.account');
let popupButton = document.querySelector('.mobile-nav');
let popupImage = document.querySelector('.mobile-nav img');
popupButton.onclick = function () {
  if (!navigation.classList.contains('mobile')) {
    navigation.classList.add('mobile');
    navigationList.classList.add('active');
    accountButton.classList.add('active');
    popupImage.src = 'img/popup-close.svg';
  } else {
    navigation.classList.remove('mobile');
    navigationList.classList.remove('active');
    accountButton.classList.remove('active');
    popupImage.src = 'img/nav-mobile.svg';
  }
};

// offers
let offerContents = document.querySelectorAll('.offer-content');

for (let offerContent of offerContents) {
  let offerButton = offerContent.querySelector('.offer-more');
  offerButton.onclick = function (evt) {
    evt.preventDefault();
    offerButton.classList.add('active');
    offerContent.classList.add('active');
  };
}

// rent Yacht

let rentMore = document.querySelector('.rent-more a');
let cards = document.querySelectorAll('.card');

rentMore.onclick = function (evt) {
  evt.preventDefault();
  if (!rentMore.classList.contains('active')) {
    rentMore.classList.add('active');
    rentMore.textContent = 'Свернуть';
    for (var card of cards) {
      card.classList.add('active');
    }
  } else {
    rentMore.textContent = 'Развернуть';
    rentMore.classList.remove('active');
    for (var i = 1; i < cards.length; i++) {
      cards[i].classList.remove('active');
    }
  }
};

for (let card of cards) {
  let cardInfo = card.querySelector('.card-info');
  let moreInfo = card.querySelector('.more-card-info');
  moreInfo.onclick = function (evt) {
    evt.preventDefault();
    moreInfo.classList.add('active');
    cardInfo.classList.add('active');
  };
}

// gallery slider
let mainImageLink = document.querySelector('.main-image-link');
mainImageLink.onclick = function (evt) {
  evt.preventDefault();
};

let mainImage = document.querySelector('.main-image');
let images = document.querySelectorAll('.gallery-images a');
for (let image of images) {
  image.onclick = function (evt) {
    evt.preventDefault();
    let active = document.querySelector('.gallery-images .active');
    mainImage.src = image.href;
    active.classList.remove('active');
    image.classList.add('active');
  };
}

// gallery-mobile
let leftButton = document.querySelector('.gallery-reverse');
let rightButton = document.querySelector('.gallery-forward');
rightButton.onclick = function gallery_forward() {
  for (let i = 0; i < images.length; i++) {
    if (mainImage.src === images[i].href && i + 1 < images.length) {
      mainImage.src = images[i + 1].href;
      break;
    } else if (mainImage.src === images[i].href && i + 1 === images.length) {
      mainImage.src = images[0].href;
      break;
    }
  }
};

leftButton.onclick = function gallery_reverse() {
  for (let i = images.length - 1; i >= 0; i--) {
    if (mainImage.src === images[i].href && i - 1 >= 0) {
      mainImage.src = images[i - 1].href;
      break;
    } else if (mainImage.src === images[i].href && i - 1 < 0) {
      mainImage.src = images[images.length - 1].href;
      break;
    }
  }
};

// footer

let footerContainers = document.querySelectorAll('.footer-topic');
for (let container of footerContainers) {
  let title = container.querySelector('h2');
  let list = container.querySelector('.footer-topic-list');
  title.onclick = function () {
    if (title.classList.contains('active')) {
      title.classList.remove('active');
      list.classList.remove('active');
    } else {
      title.classList.add('active');
      list.classList.add('active');
    }
  };
}
