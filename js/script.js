// Mobile nav menu functionality
const headerHamburger = document.querySelector(".header__hamburger");
const headerNav = document.querySelector(".header__nav");
const headerLinks = document.querySelectorAll(".header a");

headerHamburger.addEventListener("click", () => {
	headerHamburger.classList.toggle("header__hamburger--active");
	headerNav.classList.toggle("header__nav--open");
});

headerLinks.forEach((link) => {
	link.addEventListener("click", () => {
		headerHamburger.classList.remove("header__hamburger--active");
		headerNav.classList.remove("header__nav--open");
	});
});

// features section tabs functionality
const tabsBtns = document.querySelectorAll(".tabs__btn");
const tabsContent = document.querySelectorAll(".tabs__content");

tabsBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		tabsBtns.forEach((btn) => {
			btn.classList.remove("tabs__btn--selected");
		});
		btn.classList.add("tabs__btn--selected");

		tabsContent.forEach((tab) => {
			tab.classList.remove("tabs__content--active");
		});

		const tabNum = btn.dataset.tabBtn;
		document
			.querySelector(`.tabs__content[data-tab-content=${tabNum}]`)
			.classList.add("tabs__content--active");
	});
});

// accordion functionality
const accordions = document.querySelectorAll(".accordions__accordion");

accordions.forEach((accordion) => {
	accordion.addEventListener("click", () => {
		if (accordion.classList.contains("accordions__accordion--active")) {
			accordion.classList.remove("accordions__accordion--active");
		} else {
			accordions.forEach((notSelectedAccordion) => {
				notSelectedAccordion.classList.remove("accordions__accordion--active");
			});

			accordion.classList.add("accordions__accordion--active");
		}
	});
});

// contact validation
const contactForm = document.querySelector(".contact__form");
const contactInput = document.querySelector(".contact__input");
const contactSubmit = document.querySelector(".contact__submit");
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

contactForm.addEventListener("submit", (evObj) => {
	if (contactInput.value === "" || !contactInput.value.match(validRegex)) {
		contactForm.classList.add("contact__form--error");
		evObj.preventDefault();
	}
});
