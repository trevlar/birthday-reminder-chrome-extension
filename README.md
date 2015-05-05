A Chrome Extension that will remind about birthdays.
================

This project is built off of a scaffolding project.
This includes :

- AngularJS Popup App `scripts/app/`
- Bootstrap JS and CSS
- jQuery / Underscore.js
- Mochai/Chai/SinonJS for testing contentscripts
- Grunt and Bower

## Minimum Viable Product
- Birthdays can be added to chrome sync storage.
- Global time frame for reminders to appear.
- Birthday reminder day of the birthday.
- Reminders appear either as a header, footer or sidebar.
	- Possibly selected by user

## Nice to have
- Integrated with Facebook
	- Import birthdays
	- Post to facebook
- Individual birthday tasks or customized reminder messages.

## Get Started
- Clone this repo
- Run `npm install` and `bower install`
- Go to `chrome://extensions/`
- Activate developer mode
- Click on  `load an unpacked extension` and locate your cloned repo, and select the `app` folder


## Build and deploy
The build `manifest.json` file is `manifest-build.json`. It differs from the regular `manifest.json` to use only built files (single files for the all popup app, content scripts or background pages).

To build the app and get a single scripts for each popup app, content script, or background page, simpy run :

`grunt build`

## Versions
- `0.1` May 2014 First version released


## License
[Trevor Carlston @Trevlaar](http://twitter.com/Trevlaar)
<br>
Licensed under the MIT license.
