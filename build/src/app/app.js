angular.module('MyApp', [
    'templates-app',
    'templates-common',
    'MyApp.collections',
    'ui.router'
])

.config(function ($urlRouterProvider){
    $urlRouterProvider.otherwise('/collections');
})

.run(function run() {
    
})

.controller('AppCtrl', function($scope) {
    
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $scope.pageTitle = toState.data.pageTitle;
    });
});