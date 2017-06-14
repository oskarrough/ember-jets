import Ember from 'ember'
import layout from '../templates/components/jets-search'
// import 'jets'

const {Component, get} = Ember

export default Component.extend({
  layout,

  // Selector for content tag using `document.querySelector`.
  // contentTag: '',

  // Optional array to observe for changes. Helps keep the search in sync.
  // content: []

  // Time in MS to wait (debounce) the search.
  wait: 60,

  options: {
    callSearchManually: true
  },

  didInsertElement() {
    this._super(...arguments)

    if (!window.Jets) throw new Error('The Jets.js module is missing')

    const options = get(this, 'options')
    const contentTag = get(this, 'contentTag')
    const filter = get(this, 'filter')

    // Set dynamic contentTag option.
    if (!contentTag) throw new Error('Missing "contentTag" property on {{jets-search}}')
    options.contentTag = contentTag

    // If a searchSelector is set, use it to parse the 'text' for the search.
    if (filter) {
      options.manualContentHandling = function (tag) {
        tag = tag.querySelector(filter)
        return tag && (tag.innerText || tag.textContent) || '';
      }
    }

    // Create and save Jets instance.
    this.jets = new window.Jets(options)
  },

  didRender() {
    this._super(...arguments)
    if (this.jets) this.jets.update()
  },

  willDestroyElement() {
    this._super(...arguments)
    if (this.jets) this.jets.destroy()
  },

  _search(query) {
    if (this.jets) this.jets.search(query)
  },

  actions: {
    runSearch(query) {
      const wait = get(this, 'wait')
      Ember.run.debounce(this, this._search, query, wait)
    }
  }
})
