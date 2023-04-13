/** *************Init JS*********************
	
	TABLE OF CONTENTS
	---------------------------
	1.Ready function
	2.Load function
	3.Full height function
	4.pinkman function
	5.Chat App function
	6.Resize function
 ** ***************************************/

"use strict";

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
/*****Ready function start*****/
$(document).ready(function () {
	pinkman();
	/*Disabled*/
	$(document).on("click", "a.disabled,a:disabled", function (e) {
		return false;
	});
});
/*****Ready function end*****/

/*****Load function start*****/
$(window).on("load", function () {
	$(".preloader-it").delay(500).fadeOut("slow");
});
/*****Load function* end*****/

/*Variables*/
var height, width,
	$wrapper = $(".hk-wrapper"),
	$nav = $(".hk-nav"),
	$vertnaltNav = $(".hk-wrapper.hk-vertical-nav,.hk-wrapper.hk-alt-nav"),
	$horizontalNav = $(".hk-wrapper.hk-horizontal-nav"),
	$navbar = $(".hk-navbar");

/***** pinkman function start *****/
var pinkman = function () {

	/*Navbar Collapse Animation*/
	var navbarNavCollapse = $('.hk-nav .navbar-nav  li');
	var navbarNavAnchor = '.hk-nav .navbar-nav  li a';
	$(document).on("click", navbarNavAnchor, function (e) {
		if ($(this).attr('aria-expanded') === "false")
			$(this).blur();
		$(this).parent().siblings().find('.collapse').collapse('hide');
		$(this).parent().find('.collapse').collapse('hide');
	});

	/*Card Remove*/
	$(document).on('click', '.card-close', function (e) {
		var effect = $(this).data('effect');
		$(this).closest('.card')[effect]();
		return false;
	});

	/*Accordion js*/
	$(document).on('show.bs.collapse', '.accordion .collapse', function (e) {
		$(this).siblings('.card-header').addClass('activestate');
	});

	$(document).on('hide.bs.collapse', '.accordion .collapse', function (e) {
		$(this).siblings('.card-header').removeClass('activestate');
	});

	/*Navbar Toggle*/
	$(document).on('click', '#navbar_toggle_btn', function (e) {
		$wrapper.toggleClass('hk-nav-toggle');
		$(window).trigger("resize");
		return false;
	});
	$(document).on('click', '#hk_nav_backdrop,#hk_nav_close', function (e) {
		$wrapper.removeClass('hk-nav-toggle');
		return false;
	});

	/*Settings panel Toggle*/
	$(document).on('click', '#settings_toggle_btn', function (e) {
		$wrapper.toggleClass('hk-settings-toggle');
		return false;
	});
	$(document).on('click', '#settings_panel_close', function (e) {
		$wrapper.removeClass('hk-settings-toggle');
		return false;
	});
	$(document).on('click', '#nav_light_select', function (e) {
		$nav.removeClass('hk-nav-dark').addClass('hk-nav-light');
		return false;
	});
	$(document).on('click', '#nav_dark_select', function (e) {
		$nav.removeClass('hk-nav-light').addClass('hk-nav-dark');
		return false;
	});
	$(document).on('click', '#nav_light_select,#nav_dark_select', function (e) {
		$('.hk-nav-select').find('.btn').removeClass('btn-outline-primary').addClass('btn-outline-light');
		$(this).removeClass('btn-outline-light').addClass('btn-outline-primary').blur();
		return false;
	});
	$(document).on('click', '#navtop_light_select,#navtop_dark_select', function (e) {
		$('.hk-navbar-select').find('.btn').removeClass('btn-outline-primary').addClass('btn-outline-light');
		$(this).removeClass('btn-outline-light').addClass('btn-outline-primary').blur();
		return false;
	});
	$(document).on('click', '#navtop_light_select', function (e) {
		$navbar.removeClass('navbar-dark').addClass('navbar-light').find('img.brand-img').attr('src', 'vendor/img/logo-light.png');
		return false;
	});
	$(document).on('click', '#navtop_dark_select', function (e) {
		$navbar.removeClass('navbar-light').addClass('navbar-dark').find('img.brand-img').attr('src', 'vendor/img/logo-dark.png');
		return false;
	});

	/*Search form Collapse*/
	$(document).on('click', '#navbar_search_btn', function (e) {
		$('html,body').animate({ scrollTop: 0 }, 'slow');
		$(".navbar-search input").focus();
		$wrapper.addClass('navbar-search-toggle');
		$(window).trigger("resize");
	});
	$(document).on('click', '#navbar_search_close', function (e) {
		$wrapper.removeClass('navbar-search-toggle');
		$(window).trigger("resize");
		return false;
	});

	/*Refresh Init Js*/
	var refreshMe = '.refresh';
	$(document).on("click", refreshMe, function (e) {
		var panelToRefresh = $(this).closest('.card').find('.refresh-container');
		var dataToRefresh = $(this).closest('.card').find('.panel-wrapper');
		var loadingAnim = panelToRefresh.find('.la-anim-1');
		panelToRefresh.show();
		setTimeout(function () {
			loadingAnim.addClass('la-animate');
		}, 100);
		function started() { } //function before timeout
		setTimeout(function () {
			function completed() { } //function after timeout
			panelToRefresh.fadeOut(800);
			setTimeout(function () {
				loadingAnim.removeClass('la-animate');
			}, 800);
		}, 1500);
		return false;
	});

	/*Fullscreen Init Js*/
	$(document).on("click", ".full-screen", function (e) {
		$(this).parents('.card').toggleClass('fullscreen');
		$(window).trigger("resize");
		return false;
	});

};
/***** pinkman function end *****/

/***** Full height function start *****/
var setHeightWidth = function () {
	height = window.innerHeight;
	width = window.innerWidth;
	$('.full-height').css('height', (height));
	$('.hk-pg-wrapper').css('min-height', (height));

};
/***** Full height function end *****/

/***** Resize function start *****/
$(window).on("resize", function () {
	setHeightWidth();
});
$(window).trigger("resize");
/***** Resize function end *****/

