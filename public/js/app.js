angular.module('app', ['ngRoute'])
    .factory('sessionFactory', sessionFactory)
    .service('userService', userService)
    .service('todoService', todoService)
    .service('annuaireService', annuaireService)
    .service('categorieService', categorieService)
    .service('contactService', contactService)
    .service('aproposService', aproposService)
    .service('btn1Service', btn1Service)
    .service('btn2Service', btn2Service)
    .service('btn3Service', btn3Service)
    .service('btn4Service', btn4Service)
    .controller('annuaireController', annuaireController)
    .controller('categorieController', categorieController)
    .controller('contactController', contactController)
    .controller('loginController', loginController)
    .controller('mainController', mainController)
    .controller('navbarController', navbarController)
    .controller('aproposController', aproposController)
    .controller('btn1Controller', btn1Controller)
    .controller('btn2Controller', btn2Controller)
    .controller('btn3Controller', btn3Controller)
    .controller('btn4Controller', btn4Controller)
    .config(routes)
    .run(loginStatus);
