import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile'

const list = ['a', 'b', 'c']

module('Integration | Component | jets search', function(hooks) {
  setupRenderingTest(hooks);

  test('it can search', async function(assert) {
    assert.expect(5)

    this.set('list', list)

    await render(hbs`
      {{jets-search value=searchValue contentTag=".list"}}
      <ul class="list">
        {{#each list as |item|}}
          <li>
            {{item}}
          </li>
        {{/each}}
      </ul>
    `)

    assert.equal(this.$('input').attr('type'), 'search', 'it is a search input')

    assert.equal(this.$('li:first').text().trim(), 'a')
    assert.equal(this.$('.list li').length, list.length, 'all results rendered')

    this.set('searchValue', 'c')
    assert.equal(this.$('input').val(), 'c', 'can pass search value')

    this.$('input').trigger('input')
    return settled().then(() => {
      assert.equal(this.$('li:visible').eq(0).text().trim(), 'c', 'it searches')
    });
  })

  test('if a value is passed, search is updated on load', async function(assert) {
    this.set('searchValue', 'c')
    this.set('list', list)
    await render(hbs`
      {{jets-search value=searchValue contentTag=".list"}}
      <ul class="list">
        {{#each list as |item|}}
          <li>
            {{item}}
          </li>
        {{/each}}
      </ul>
    `)
    return settled().then(() => {
      assert.equal(this.$('li:visible').eq(0).text().trim(), 'c', 'it searches')
    });
  })
});
