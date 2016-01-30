angular.module('MyApp.collections', [
    'ui.router'
])

.config(function config($stateProvider) {
    $stateProvider.state('collections', {
        url: '/collections',
        views: {
            "main": {
                controller: 'CollectionsCtrl',
                templateUrl: 'collections/index.tpl.html'
            }
        },
        data: {
            pageTitle: 'Collections'
        }
    });
})

.controller('CollectionsCtrl', function HomeController($scope) {

})

;

