'use strict';

(function () {
  var CLASS_HIDDEN = 'visually-hidden';
  var ESC_KEY_CODE = 27;
  var popup = document.querySelector('.popup');
  var closePopup = document.querySelector('.popup__close');
  var openPopup = document.querySelector('.header__contact-callback');
  // var popupBackground = document.querySelector('.header__contact-callback');
  var popupContainer = document.querySelector('.popup__container');
  // var contactList = document.querySelector('.footer__contacts-address');
  // var contactSubList = document.querySelector('.footer__contacts-telephones');
  // var sectionList = document.querySelector('.footer__sections-list');
  // var listButton = document.querySelector('.footer__contacts-button');
  // var classActive = 'active';
  // var contacts = 'footer__contacts';
  // var sections = 'footer__sections';

  var delClass = function (nameElement) {
    nameElement.classList.remove(CLASS_HIDDEN);
  };

  var addClass = function (nameElement) {
    nameElement.classList.add(CLASS_HIDDEN);
  };

  if (openPopup) {
    openPopup.addEventListener('click', function (evt) {
      evt.preventDefault();
      delClass(popup);
    });
  }

  if (closePopup) {
    closePopup.addEventListener('click', function () {
      addClass(popup);
    });
  }

  if (popup) {
    popup.addEventListener('click', function (evt) {
      if (evt.className !== popupContainer) {
        addClass(popup);
      }
    });
  }

  if (popup) {
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESC_KEY_CODE) {
        addClass(popup);
      }
    });
  }

  // if (listButton) {
  // 	listButton.addEventListener('click', function (evt) {
  // 		if (evt.target.className === contacts) {
  // 			console.log(contacts);
  // 		}
  // 		else if (evt.target.classList.contains('footer__sections')) {
  // 			console.log(sections);
  // 		}
  // 	});
  // }

  var elements = document.querySelectorAll('input[type="tel"]');
  for (var i = 0; i < elements.length; i++) {
    new IMask(elements[i], {
      mask: '+{7 }(000) 000 - 00 - 00',
    });
  }
})();
