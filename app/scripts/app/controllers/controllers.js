angular.module('popup')
  .controller('MainController', ['LocalWrapper', function(LocalWrapper) {

  		LocalWrapper.setSync(true);
		// scope = this;
		this.birthdayList = LocalWrapper.get('birthdayList', true);
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
	  		this.birthdayList[idx] = person;
	  		LocalWrapper.set('birthdayList', this.birthdayList, true);
	  	};

	  	this.editPerson = function(idx, person) {
	  		person.edit = true;
	  	};

  }]);