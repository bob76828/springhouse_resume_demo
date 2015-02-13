var app = angular.module('BookApp', ['ngMaterial']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .backgroundPalette('blue');
});;

app.controller('AppCtrl', ['$scope', function($scope){
    var tabs = [
        { title: '文章'},
        { title: '書籍'},
    ];
    $scope.tabs = tabs;
    $scope.selectedIndex = 0;
}]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['BookApp']);
});
