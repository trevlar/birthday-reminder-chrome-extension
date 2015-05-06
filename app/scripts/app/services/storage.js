angular.module('popup', [])
  .service('Storage', ['$rootScope', '$q', function ($rootScope, $q) {
        var chromeStore = null;
        (function(){
            // init the chromeStore if it's available
            if (!!chrome && !!chrome.storage) {
                chromeStore = chrome.storage.local;
            }
        })();

        this.setSync = function(sync){
            // if we want to use the chrome.storage.sync APIs, we can set that here
            if (sync)
                chromeStore = chrome.storage.sync;
            else
                chromeStore = chrome.storage.local;
        }

        this.get = function (key) {
            var defer = $q.defer();

            if (!!chromeStore) {
                chromeStore.get(key, function(data){
                    defer.resolve(data[key])
                });
            } else {
                defer.resolve(localStorage[key]);
            }
            return defer.promise;
        };

        this.set = function (key, val) {
            var defer = $q.defer();
            var newSomething = {};
            newSomething[key] = val;

            if (!!chromeStore) {
                // chrome.storage requires an object be passed in to the set function
                chromeStore.set(newSomething, function(data){
                    console.log('setting', data);
                    defer.resolve()
                });
            } else {
                localStorage[key] = val;
                defer.resolve();
            }
            return defer.promise;
        };

        this.remove = function (key) {
            var defer = $q.defer();
            var newSomething = {};
            newSomething[key] = "";

            if (!!chromeStore) {
                chromeStore.set(newSomething, function(){
                    defer.resolve();
                });
                return defer.promise;
            } else {
                localStorage[key] = val;
                defer.resolve();
            }
        };

    }]);
