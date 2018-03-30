const vorpal = require('vorpal')();
const backstop = require('backstopjs');

vorpal
  .command('gen-config <test> [ref] [config-name]', 'generates a backstop config file')
  .action(function(args, callback) {
    this.log(args.test)
    callback();
  });

vorpal
  .delimiter('backstop-expand$')
  .show();

function getLinks (t, r) {
// Scrape the links from top-right nav of the website
  let elTest = document.querySelectorAll('ul.menu.content.centered li a').concat(
    document.querySelectorAll('ul.menu.content.centered div li a')
  );

  return Array.prototype.map.call(elTest, function (e) {
    return e.getAttribute('href')
  });
}

// Inside of `backstop.config.js` we export a function that returns the configuration object
module.exports = options => {
  return {
    //you can access options.foo here
  }
}