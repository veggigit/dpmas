// IMPORT ICONS
const feather = require('feather-icons')

export default {
  init() {

    // ICONS
    feather.replace()

    // NAV SPY DIV => https://getbootstrap.com/docs/4.0/components/scrollspy/
    // _body * require postion relative
    var body = document.getElementsByTagName('body')[0]
    body.style.position = 'relative'
    // _body * requires the following attributes
    body.setAttribute('data-spy', 'scroll')
    body.setAttribute('data-target', '#nav-dpmas')
    body.setAttribute('data-offset', '88')

    // NAV TOGGLE CLASS SCROLL
    $(document).scroll(function () {
      var $nav = $('#nav-dpmas');
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });


  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
