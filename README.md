# Match-center

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

aws s3 sync dist s3://www.matchcenter.com/ --acl public-read
www.matchcenter.com.s3-website-us-west-2.amazonaws.com

#### Deploying a new project instance
* Build project with new id
* `ember build --environment production`
-KDGrD844M5xeHXJdWAa * `aws s3 sync dist s3://www.matchcenter.com --acl public-read`
-KErDOpkcR9g_KXowGrN * `aws s3 sync dist s3://lowvolley-kerdopkcr --acl public-read`
-KEve27zB2zQ4eRXPX62 * `aws s3 sync dist s3://lowvolley-keve27z --acl public-read`
-KEveGbD6pJsKwyWzwYz * `aws s3 sync dist s3://lowvolley-kevegb --acl public-read`

www.matchcenter.com.s3-website-us-west-2.amazonaws.com
lowvolley-kerdopkcr.s3-website-us-west-1.amazonaws.com
lowvolley-keve27z.s3-website-us-west-2.amazonaws.com
lowvolley-kevegb.s3-website-us-west-2.amazonaws.com

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

