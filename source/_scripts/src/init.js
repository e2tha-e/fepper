(function (d) {
  'use strict';

  var menuToggle = d.querySelector('.nav-toggle-menu');
  var menuNav = d.querySelector('.nav');

  if (menuToggle) {
    menuToggle.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        if (menuNav) {
          if (menuNav.classList.contains('active')) {
            menuNav.classList.remove('active');
            menuToggle.blur();
          }
          else {
            menuNav.classList.add('active');
          }
        }
      }
    );
  }

  var searchToggle = d.querySelector('.nav-toggle-search');
  var searchForm = d.querySelector('.header .search-form');

  if (searchToggle) {
    searchToggle.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        if (searchForm) {
          if (searchForm.classList.contains('active')) {
            searchForm.classList.remove('active');
            searchToggle.blur();
          }
          else {
            searchForm.classList.add('active');
          }
        }
      }
    );
  }

  window.addEventListener(
    'resize',
    function () {
      if (menuNav) {
        menuNav.classList.remove('active');
      }

      if (searchForm) {
        searchForm.classList.remove('active');
      }
    }
  );
})(document);
