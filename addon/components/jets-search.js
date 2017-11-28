import Ember from 'ember'

const {TextField, get, run} = Ember

export default TextField.extend({
  type: 'search',

  // Time in MS to wait (debounce) the search.
  wait: 60,

  // Required selector for content tag. Refers to document.querySelectorAll() so many lists can be processed at one time.
  // contentTag: '',
  
   // Optional selector for filtering which elements to search inside the `contentTag` selector.
  // filter: ''

  // Optional array to observe for changes. Helps keep the search in sync.
  // content: []
  
  // Options for jets.js. You can pass in an `options` object to override it.
  options: {
    // Disabled auto searching and allows us to do it via Ember events.
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

  input() {
    this._super(...arguments)
    const wait = get(this, 'wait')
    const value = get(this, 'value')
    if (!this.jets) return
    run.debounce(this, this.jets.search, value, wait)
  }
})
