'use strict';

(function () {
var CLASS_HIDDEN = 'visually-hidden';
var ESC_KEY_CODE = 27;
var popup = document.querySelector('.popup');
var closePopup = document.querySelector('.popup__close');
var openPopup = document.querySelector('.header__contact-callback');
var popupBackground = document.querySelector('.header__contact-callback');

var delClass = function (nameElement) {
  nameElement.classList.remove(CLASS_HIDDEN);
};

var addClass = function (nameElement) {
  nameElement.classList.add(CLASS_HIDDEN);
};

if (openPopup) {
	openPopup.addEventListener('click', function(evt) {
		evt.preventDefault();
		delClass(popup);
	});
}

if (closePopup) {
	closePopup.addEventListener('click', function(evt) {
		addClass(popup);
	});
}

if (popupBackground) {
	popupBackground.addEventListener('click', function(evt) {
		addClass(popup);
	});
}

if (popup) {
	document.addEventListener('keydown', function(evt) {
		if (evt.keyCode === ESC_KEY_CODE) {
			addClass(popup);
		}
	});
}








})();