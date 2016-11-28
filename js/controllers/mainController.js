app.controller('MainCtrl', function($scope, beers) {

	$scope.beers = beers.beerList;



	//add new beer
	$scope.addBeer = function() {

		//unbind the object
		var cloneObj = angular.copy($scope.newBeer);
		//default image if image not exist
		cloneObj.image = 'https://afusec.files.wordpress.com/2014/11/stella-artois.jpg';
		//send it to the service
		beers.addBeer(cloneObj);

		$scope.newBeer.name = '';
		$scope.newBeer.style = '';
		$scope.newBeer.abv = '';

	};

	$scope.removeBeer = function() {
		beers.removeBeer(this.$index);
	};


});