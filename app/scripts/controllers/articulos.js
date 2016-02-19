'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('ArticulosCtrl', function ($scope) {
  	$scope.posts = [
  	{
  		title:'Ofertas solo por Verano',
  		content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita veniam enim maxime dolor est ab, mollitia harum, quasi delectus quisquam quia dolorem minima reiciendis recusandae ipsa totam repellendus sint.'
  	},
  	{
  		title:'Clases de Zumba',
  		content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt blanditiis nisi dicta odio vel modi exercitationem, ducimus fugiat, id deleniti necessitatibus repellat delectus! Doloribus deserunt, autem aperiam numquam minima maiores!'
  	},
  	{
  		title:'Clases de Zumba',
  		content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt blanditiis nisi dicta odio vel modi exercitationem, ducimus fugiat, id deleniti necessitatibus repellat delectus! Doloribus deserunt, autem aperiam numquam minima maiores!'
  	}
  	];
  });
