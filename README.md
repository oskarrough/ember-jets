# ember-jets

An Ember.js component for using [Jets.js](https://jets.js.org) to search lists inline using CSS. 

Install it with `ember install ember-jets`. Now you'll have a `{{jets-search}}` input component available. Use it like this:


```hbs
{{jets-search contentTag="#list" content=model}}

<div id="list">
  {{#each model as |item|}}
    <div>
      {{item}}
    </div>
  {{/each}}
</div>
```

By default, Jets will figure out what text to search. But you can also pass a CSS selector as `filter` to explicitly define which text to search in each row. Here's an example:

```hbs
{{jets-search contentTag="#list" items=model filter="h1"}}

<div id="list">
  {{#each model as |item|}}
    <div>
      <h1>{{item}} this will be searched</h1>
      <p>This will NOT be searched</p>
    </div>
  {{/each}}
</div>
```

The below outlines the details of collaborating on this Ember addon.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-jets`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
