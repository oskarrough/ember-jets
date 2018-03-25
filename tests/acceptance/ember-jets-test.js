import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import {visit, findAll, fillIn} from '@ember/test-helpers'
import $ from 'jquery'

const input = '[type="search"]'
const firstResult = () => $('ul.jets-content li:visible')[0].textContent.trim()

module('Acceptance | ember jets', function(hooks) {
  setupApplicationTest(hooks);

  test('list is rendered', async function(assert) {
    await visit('/')
    assert.equal(findAll('ul.jets-content li')[0].textContent.trim(), 'ants - test')
  })

  test('searching works', async function(assert) {
    await visit('/')
    await fillIn(input, 'fox')
    assert.equal(firstResult(), 'foxes - test')
    await fillIn(input, 'bat')
    assert.equal(firstResult(), 'bats - test')
  })
})

