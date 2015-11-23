//On your terminal cd into your catsagram folder. cd ~/Desktop/catstagram
//copy and paste python -m SimpleHTTPServer into your terminal
//Open localhost:8000 in your browser.

//Create an angular app called catstagram
var app = angular.module('catstagram', [])

//Create a CatController
app.controller('CatController', ['$scope', '$http', function($scope, $http){

	$http.get('data.json')
	.success(function(data){

		$scope.cats = data.cats
	})
	.error(function(data){
		console.log("failing")
	})
	//Write a $scope.like function that takes index as an argument and adds 1 to likes attribute of the cat on $scope.cats[index]. 

	$scope.like = function(index){
		$scope.cats[index].likes += 1
	}

	//Create a function that takes a newCat object as argument.
	// Add likes attribute to the newCat object and assign 1 as the value.
	// Add newCat to the beginning of the $scope.cats array.
	// $scope.addCat = ...

	$scope.addCat = function(newCat){
		var myNewCat = newCat;
		myNewCat.likes = 1;

		$scope.cats.unshift(myNewCat);

	};

	$scope.comments = [
	{
		"message": "such a cutie"
	},
	{
		"message": "adorbs"
	},
	{
		"message": "fluffer nutter"
	}
	]

	$scope.submitComment = function(string){
	}
}]);


//Optional 

//Create a directive to replace the <span> tag. 
//Add "liked" class to your element on mouseenter event.

//Optional
//Create the submitComments function in your controller



// REFACTOR AND MAKE A FACTORY!!!
// app.factory('catFactory', '$http' [function($http){

// }])
