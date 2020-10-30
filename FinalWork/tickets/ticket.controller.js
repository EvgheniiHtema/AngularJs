(function () {
    'use strict';

	var app = angular
		.module('app')
		.controller('TicketController', TicketController);
			
	TicketController.$inject = ['$rootScope'];
	function TicketController($rootScope) {
		var vm = this;
		
		vm.findTicket = findTicket;
			
		vm.tickets = [
			{
				select: false,
				ticketDestination: "Moldova - USA",
				placeIn: "Aeroport Moldova №2",
				placeOut: "Big village town",
				date: "14.11.2020",
				price: "347"
			},
			{
				select: false,
				ticketDestination: "London - Spain",
				placeIn: "Aeroport London №4",
				placeOut: "Smalltown",
				date: "22.08.2021",
				price: "255"
			},
			{
				select: false,
				ticketDestination: "Chisinau - AnyPlace",
				placeIn: "Aeroport Chisinau №3",
				placeOut: "Pakistan",
				date: "05.04.2021",
				price: "154"
			},
			{
				select: false,
				ticketDestination: "Russia - Philippines",
				placeIn: "Aeroport Russia №11",
				placeOut: "Thailand Hotel",
				date: "24.10.2021",
				price: "367"
			},
			{
				select: false,
				ticketDestination: "Italy - Austria",
				placeIn: "Aeroport Italy №9",
				placeOut: "Puskin street",
				date: "31.12.2020",
				price: "480"
			},
			{
				select: false,
				ticketDestination: "Italy - Masacusech",
				placeIn: "Aeroport Italy №4",
				placeOut: "My kitchen",
				date: "21.12.2021",
				price: "1200"
			},
			{
				select: false,
				ticketDestination: "New York - Canada",
				placeIn: "Aeroport York №6",
				placeOut: "Dunhazor",
				date: "30.02.2021",
				price: "253",
			}
		]
		
		vm.userCheck = 0;
		
		$rootScope.chosenTickets = [];
		
		vm.headers = Object.keys(vm.tickets[0]);
		
		function findTicket(){
			
			var result = vm.tickets.find(obj => {
				return obj.select == undefined;
			})
			vm.tickets[0].select = false; 
			vm.tickets[1].select = false; 
			vm.tickets[2].select = false; 
			vm.tickets[3].select = false; 
			vm.tickets[4].select = false; 
			vm.tickets[5].select = false; 
			vm.tickets[6].select = false; 
			vm.userCheck += result.price * 1;
			$rootScope.chosenTickets.push(result);
		}
	};
	

	
	app.filter('searchFor', function(){

		return function(arr, searchString){

			if(!searchString){
				return arr;
			}

			var result = [];

			searchString = searchString.toLowerCase();

			angular.forEach(arr, function(ticket){

				if(ticket.ticketDestination.toLowerCase().indexOf(searchString) !== -1){
					result.push(ticket);
				}

			});

			return result;
		};

	});
	
})();
			