angular.module('MyApp', [
    'templates-app',
    'templates-common',
    'MyApp.home',
    'ui.router'
])

.config(function ($urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})

.run(function run() {
    
})

.controller('AppCtrl', function($scope) {
    
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $scope.pageTitle = toState.data.pageTitle;
    });
});