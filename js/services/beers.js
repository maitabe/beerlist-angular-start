app.factory('beers', function() {

	var beerList = [
		{
			id: 0,
			name: 'Corona',
			style: 'Pale lager',
			abv: '4.5%',
			image: 'img/corona.jpg'
		},
		{
			id: 1,
			name: 'Heineken',
			style: 'Light lager',
			abv: '5.4%',
			image: 'img/heineken.jpg'
		},
		{
			id: 2,
			name: 'Maccabi',
			style: 'Dark lager',
			abv: '7.8%',
			image: 'img/maccabi.jpeg'
		}

	];

	var addBeer = function(newBeer) {
		beerList.push(newBeer);
	};

	var removeBeer = function(index) {
		beerList.splice(index, 1);
	};

	// var ratingBeer = function() {

	// };


	return {
		beerList:beerList,
		addBeer:addBeer,
		removeBeer:removeBeer,
		// ratingBeer:ratingBeer
	};

});