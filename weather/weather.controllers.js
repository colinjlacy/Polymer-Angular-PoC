/**
 * Created by colinjlacy on 10/6/15.
 */
angular.module('weather')
	.controller('weatherCtrl', function($scope, $http, wundergroundKey) {
		$scope.options = [
			{id: 'LA', name: 'Louisiana'},
			{id: 'NY', name: 'New York'}
		];
		$scope.submit = function() {
			console.log($scope);
			$http.get('http://api.wunderground.com/api/a0aa7bdf886ec6a5/conditions/q/' +
				$scope.state + '/' + $scope.city.replace(' ', '_') + '.json')
				.then(function(res) {
					$scope.weather = {
						image: res.data.current_observation.icon_url,
						forecastUrl: res.data.current_observation.forecast_url,
						historyUrl: res.data.current_observation.history_url
					};
					$scope.stats = [
						{label: "Temperature", data: res.data.current_observation.temperature_string},
						{label: "Feels Like", data: res.data.current_observation.feelslike_string},
						{label: "Humidity", data: res.data.current_observation.relative_humidity},
						{label: "Wind", data: res.data.current_observation.wind_string},
						{label: "Dewpoint", data: res.data.current_observation.dewpoint_string},
						{label: "Precitation", data: res.data.current_observation.precip_today_string}
					]
				});
		};
		$scope.reset = function() {
			delete $scope.city;
			delete $scope.state;
			delete $scope.weather;
		};
	});