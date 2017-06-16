# ember-jets

[![Build Status](https://travis-ci.org/oskarrough/ember-jets.svg?branch=master)](https://travis-ci.org/oskarrough/ember-jets) 

An Ember.js component to search and filter lists with CSS inline using [Jets.js](https://jets.js.org). Here's a [demo](https://ember-jets.netlify.com/).

## Usage

Inside your ember-cli project, run `ember install ember-jets`.

Now you have a `{{jets-search}}` input component. Use it like this:

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

### Options

- `contentTag` - CSS selector to the DOM container you want to search (required)
- `content` - Array to observe for changes. This will make sure the search is synced with your content (optional)
- `filter` - CSS selector if you want to specify what to search in each row (optional)

Here's an example with filtering:

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

## Collaborating

The below outlines the details of collaborating on this Ember addon.

### Installation

* `git clone <repository-url>` this repository
* `cd ember-jets`
* `yarn install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`
