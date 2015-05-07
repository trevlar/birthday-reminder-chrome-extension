angular.module('popup')
  .controller('MainController', ['$rootScope', 'Storage', function($rootScope, Storage) {

	  	this.storage = Storage;
	  	this.storage.setSync(true);
		this.birthdayList = [];
		// [{
		// 	firstName: 'Trevor',
		// 	lastName: 'Carlston',
		// 	birth: {
		// 		month: 08,
		// 		day: 17,
		// 		year: 1972
		// 	},
		// 	edit: false
		// }];
		var scope = this;

	  	this.addNewBirthday = function() {
			this.birthdayList.unshift({
				firstName: '',
				lastName: '',
				birth: {
					month: 01,
					day: 01,
					year: 1980
				},
				edit: true
			});
			// chrome.tabs.create({
			//   url: 'https://github.com/flrent/chrome-extension-angular-base'
			// })
	  	};

	  	this.updatePerson = function(idx, person) {
	  		person.edit = false;
	  		this.birthdayList[idx] = angular.copy(person);
	  		this.storage.set('birthdayList', angular.copy(this.birthdayList));
	  	};

	  	this.editPerson = function(idx, person) {
	  		person.edit = true;
	  	};

	  	this.refresh = function() {
			this.storage.get('birthdayList').then(function(data) {
				scope.birthdayList = data || [];
			});
	  	};

	  	this.refresh();
  }]);