// import external dependencies
import 'jquery';

// Import everything from autoload
import './autoload/**/*'

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());

// function scrolled and spy section
(function scroll() {

  // SCROLLSPY BOOTSTRAP 4 => https://getbootstrap.com/docs/4.0/components/scrollspy/
  // _require body postion relative
  var body = document.getElementsByTagName('body')[0]
  body.style.position = 'relative'
  // _require body atributes
  body.setAttribute('data-spy', 'scroll')
  body.setAttribute('data-target', '#nav-dpmas')
  body.setAttribute('data-offset', '88')

  //SCROLLED CHANGE COLOR. WHEN SCROLL, NAV CHANGE COLOR => ADD CLASS .SCROLLED
  $(document).scroll(function () {
    var $nav = $('#nav-dpmas');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

  // NAV LINK ANIMATE
  $('#nav-dpmas').find('a').click(function(e) {
    e.preventDefault();
    var section = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(section).offset().top - 88,
    });
  });


}());

