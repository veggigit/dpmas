export default {
    init() {

        // NAV LINKS GO TO DIV ID
        $('#nav-dpmas').find('a').click(function (e) {
            e.preventDefault();
            var section = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(section).offset().top - 88,
            });
        });

        // SCROLL DETECTED POSITION
        window.addEventListener('scroll', eva);

        function eva(){
            const servicesPosition = document.getElementById('services').getBoundingClientRect().top
            const navHeight = document.getElementById('nav-dpmas').getBoundingClientRect().height
            var once = false

                if(servicesPosition < navHeight && servicesPosition > 0) {
                    console.log('service section: listener => detected!')
                     once = true;
                }

                if (once == true) {
                    window.removeEventListener('scroll', eva)
                    console.log('service section: remove scroll listener => '+once)
                }
            }


    },
    finalize() {
        // JavaScript to be fired on the home page, after the init JS
    },
};
