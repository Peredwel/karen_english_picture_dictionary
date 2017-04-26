myApp.controller('StudentController', ['$scope', '$http', '$location', 'ItemService', 'UserService', function($scope, $http, $location, ItemService, UserService) {
  console.log('checking user');
  UserService.validateStudentRole();
  $scope.userName = UserService.user;
  $scope.logout = UserService.logout;

  $scope.themes = ItemService.themes;
  $scope.routeToTheme = ItemService.routeToTheme;

}]);
