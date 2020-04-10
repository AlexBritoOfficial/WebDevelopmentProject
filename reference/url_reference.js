const url = require('url');

const myURl = new URL(
  'http://www.myWebsite.com/hello.html?id=100&status=active'
);

//Serialied URL
console.log(myURl.href);
console.log(myURl.href.toString());

//Host (root domain)
console.log(myURl.host);

// Hostname (does not get port)
console.log(myURl.hostname);

// Pathname
console.log(myURl.pathname);

// Serialized Query
console.log(myURl.search);

// Params Object
console.log(myURl.searchParams);

// Params Object
myURl.searchParams.append('abc', '123');

// Loop through params
myURl.searchParams.forEach(function(value, name) {
  console.log(`${value}: ${name}`);
});
