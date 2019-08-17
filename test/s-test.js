/**
 * Dependency Modules
 */




var selenium = require('selenium-webdriver');

var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("geckodriver");
let chrome = require('selenium-webdriver/chrome');
let chromedriver = require('chromedriver');
const my_title="google" ;
var expect = (typeof require === 'undefined') ? chai.expect : require('chai').expect;
var driver = new webdriver.Builder();




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

/**
 * Sample test case
 * To check whether the given value is present in array.
 */
describe("Array", function() {
 describe("#indexOf()", function() {
  it("should return -1 when the value is not present", function() {
   assert.equal([1, 2, 3].indexOf(4), -1);
  });
 });
});

describe('Selenium Test', function() {
      this.enableTimeouts(false)

    // Open the TECH.insight website in the browser before each test is run
    beforeEach(function(done) {
        this.driver = new selenium.Builder().
            withCapabilities(selenium.Capabilities.chrome()).
            build();
          // serverUri
        //https://www.google.com/
        this.driver.get("http://www.google.com").then(done);
    });



    // Close the website after each test is run (so that it is opened fresh each time)
 it("Should load the home page and get title", function() {
  return new Promise((resolve, reject) => {
   browser
    .get(serverUri)
    .then(logTitle)
    .then(title => {
     assert.strictEqual(title, my_title);
     resolve();
    })
    .catch(err => reject(err));
  });
 });
 it('Should be on the home page', function(done) {
    var element = this.driver.findElement(selenium.By.tagName('body'));

    element.getAttribute('id').then(function(id) {
        expect(id).toBe('home');
        done();
    });
});




  after(function() {
		// End of test use this.
		browser.quit();
	});
});
