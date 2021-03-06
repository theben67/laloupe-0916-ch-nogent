class navbarController {

    constructor(sessionFactory, $rootScope, $window, $location, categorieService) {
        this.categorieService = categorieService;
        this.loadCategories();
        this.isLogged = sessionFactory.isLogged;
        this.sessionFactory = sessionFactory;
        this.$rootScope = $rootScope;
        this.$location = $location;

        $(window).scroll(function() {
            if ($(window).scrollTop() > $('#scrollspy').height()) {
                $('#push').addClass('navbar-fixed');
                $('#topFixed').css({
                    'margin-top': '100px'
                });
            }
            if ($(window).scrollTop() < $('#scrollspy').height()) {
                $('#push').removeClass('navbar-fixed');
                $('#topFixed').css({
                    'margin-top': '0'
                });
            }
        });


        $rootScope.$on('loginStatusChanged', (event, isLogged) => {
            this.isLogged = isLogged;
            this.user = sessionFactory.user;
        });
        this.isToggled = false;
        this.toggleEmergencies = function() {
            this.isToggled = !this.isToggled;
        };
    }

    logout() {
        this.sessionFactory.isLogged = false;
        this.sessionFactory.user = {};
        this.sessionFactory.token = null;
        this.$rootScope.$emit('loginStatusChanged', false);
        this.isLogged = false;
        this.$location.path('/login');
    }

    loadCategories() {
        this.categorieService.getChildrenOf('0').then((res) => {
            this.categories = res.data;
            setTimeout(function() {
                $(".dropdown-button").dropdown();
            }, 0);
        });
    }

}
