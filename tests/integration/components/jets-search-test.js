import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'
import Ember from 'ember'
import wait from 'ember-test-helpers/wait'

moduleForComponent('jets-search', 'Integration | Component | jets search', {
  integration: true
})

test('it renders', function (assert) {
  assert.expect(4)

  const list = ['a', 'b', 'c']

  this.set('list', Ember.A(list))

  this.render(hbs`
    {{jets-search searchValue=searchValue contentTag=".list"}}
    <ul class="list">
      {{#each list as |item|}}
        <li>
          {{item}}
        </li>
      {{/each}}
    </ul>
  `)

  assert.equal(this.$('li:first').text().trim(), 'a')
  assert.equal(this.$('.list li').length, list.length, 'all results rendered')

  this.set('searchValue', 'c')
  assert.equal(this.$('input').val(), 'c', 'can pass search value')

  this.$('input').trigger('keyup')
  return wait().then(() => {
    assert.equal(this.$('li:visible').eq(0).text().trim(), 'c', 'it searches')
  })
})
