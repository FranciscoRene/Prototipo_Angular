'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {
    var baseURL = 'http://lorempixel.com/960/450/';
    $scope.setInterval = 5000;

    $scope.slides = [
    	{
    		title:'Far Cry Primal',
    		image: baseURL +'sports/',
    		text: 'Ultimo juego de Far Cry'
    	},
    	{
    		title:'Morrowind',
    		image: baseURL +'food/',
    		text: 'Juegazo!'
    	},
    	{
    		title:'Mass Effect',
    		image: baseURL +'nature/',
    		text: 'Nada mal'
    	}  	    	
    ];
    //modelo para los 3 bloques de contenidos
    var baseURL2 = 'http://lorempixel.com/200/200/';
    $scope.contenido=[
        {
            img:baseURL2+'people',
            title:'Sobre Nosotros',
            summary:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores mollitia ducimus ipsum consequatur sed quae expedita esse provident. Officiis consequatur aspernatur nostrum mollitia quisquam quibusdam voluptate dolorum doloribus saepe sunt!'
        },
        {
            img:baseURL2+'business',
            title:'Sobre Servicios',
            summary:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores mollitia ducimus ipsum consequatur sed quae expedita esse provident. Officiis consequatur aspernatur nostrum mollitia quisquam quibusdam voluptate dolorum doloribus saepe sunt!'
        },
        {
            img:baseURL2+'transport',
            title:'Contactanos',
            summary:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores mollitia ducimus ipsum consequatur sed quae expedita esse provident. Officiis consequatur aspernatur nostrum mollitia quisquam quibusdam voluptate dolorum doloribus saepe sunt!'
        }                
    ];
  }); 
