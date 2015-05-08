angular.module('popup')
  .controller('MainController', ['$rootScope', 'Storage', function($rootScope, Storage) {

	  	this.storage = Storage;
	  	this.storage.setSync(true);
		this.birthdayList = [];
		this.dateOptions = {};
		this.minDate = '1900';
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

	  	this.deletePerson = function($index) {
	  		this.birthdayList.splice($index, 1);
	  		this.storage.set('birthdayList', angular.copy(this.birthdayList));
	  	};

	  	this.updatePerson = function(idx, person) {
	  		person.edit = false;
	  		person.birth.day = this.dt.substr(5,2);
	  		person.birth.month = this.dt.substr(8,2);
	  		person.birth.year = this.dt.substr(0,4);
	  		this.birthdayList[idx] = angular.copy(person);
	  		this.storage.set('birthdayList', angular.copy(this.birthdayList));
	  	};

		this.open = function($event) {
			$event.preventDefault();
			$event.stopPropagation();

			scope.opened = true;
		};

		this.disabled = function(date, mode) {
		    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
		};
	  	this.editPerson = function(idx, person) {
	  		person.edit = true;
	  	};

	  	this.saveReminder = function() {
	  		this.storage.set('reminders', angular.copy(this.reminder));
	  	};

	  	this.refresh = function() {
			this.storage.get('birthdayList').then(function(data) {
				scope.birthdayList = data || [];
			});
			this.storage.get('reminders').then(function(data) {
				scope.reminder = data || {type: 'months', number: 1};
			});
	  	};

	  	this.refresh();
  }]);