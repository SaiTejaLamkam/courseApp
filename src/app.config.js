(function() {
    'use strict';

    function prohireConfigFunc($compileProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/prohires');
    //     $stateProvider
    //     .state('prohires', {
    //         url: '/prohires',
    //         // template:require('./home.html'),
    //         // abstract: true
    //     }
    // );

        $compileProvider.debugInfoEnabled(false);
        $compileProvider.commentDirectivesEnabled(false);
        //angular-translate configuration
        // $translatePartialLoaderProvider.addPart('assets/i18n');
        // $translateProvider.useLoader('$translatePartialLoader', {
        //     urlTemplate: '{part}/{lang}.json'
        // });
        // $translateProvider.registerAvailableLanguageKeys(['en', 'te'], {
        //     'en-*': 'en',
        //     'te-*': 'te'
        // })
        // $translateProvider.preferredLanguage('en');
        // $translateProvider.fallbackLanguage('en');
        // $translateProvider.useLoaderCache(true);
        // $translateProvider.useSanitizeValueStrategy(null);


        //angular loading bar configuration
        // cfpLoadingBarProvider.includeSpinner = false;
    }
    prohireConfigFunc.$inject = [
        '$compileProvider',
        '$stateProvider',
        '$urlRouterProvider',
        "$locationProvider"
        // '$translateProvider',
        // '$translatePartialLoaderProvider',
        // 'cfpLoadingBarProvider'
    ];

    module.exports = prohireConfigFunc;

})();