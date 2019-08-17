/**
 * Dependency Modules
 */




var selenium = require('selenium-webdriver');
var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("geckodriver");
let chrome = require('selenium-webdriver/chrome');
let chromedriver = require('chromedriver');
var expect = (typeof require === 'undefined') ? chai.expect : require('chai').expect;
const resolvingPromise = new Promise((resolve) =>
  resolve('promise resolved')
);



// Application Server
const serverUri = "http://localhost:3000/#";
const appTitle = "React Selenium App";

/**
 * Config for Chrome browser
 * @type {webdriver}
 */
 var browser = new webdriver.Builder()
	.usingServer()
	.withCapabilities({ browserName: "chrome" })
	.build();

/**
 * Config for Firefox browser (Comment Chrome config when you intent to test in Firefox)
 * @type {webdriver}
 */

/*var browser = new webdriver.Builder()
	.usingServer()
	.withCapabilities({ browserName: "firefox" })
	.build();*/


/**
 * Function to get the title and resolve it it promise.
 * @return {[type]} [description]
 */
function logTitle() {
	return new Promise((resolve, reject) => {
		browser.getTitle().then(function(title) {
			resolve(title);
		});
	});
}


describe('Selenium Test', function() {

    // Open the TECH.insight website in the browser before each test is run
    beforeEach(function(done) {
        this.driver = new selenium.Builder().
            withCapabilities(selenium.Capabilities.chrome()).
            build();
          // serverUri
        //https://www.google.com/
        this.driver.get(' https://staging.startgate.me/').then(done);
    });

    after(function() {
		// End of test use this.
		browser.quit();
	});

    // Close the website after each test is run (so that it is opened fresh each time)
  it('Should be on the home page', function(done) {
        var element = this.driver.findElement(selenium.By.tagName('body'));

        element.getAttribute('id').then(function(id) {
            expect(id).toBe('home');
            done();
        });
    });



});