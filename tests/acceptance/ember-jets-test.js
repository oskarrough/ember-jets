import { test } from 'qunit'
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance'

moduleForAcceptance('Acceptance | ember jets')

test('visiting /', function(assert) {
  visit('/')
  // // click('button.submit')
  andThen(() => {
    assert.equal(find('ul.jets-content li:first').text().trim(), 'ants - test')
  })
})

// test('visiting /', function(assert) {
//   assert.expect(2)

//   visit('/')

//   const input = 'input[type="search"]'
//   const list = 'ul.jets-content li:first'

//   fillIn(input, 'fox') // does not trigger search in test environment
//   andThen(() => {
//     console.log(find(input).val())
//     assert.equal(find(list).text().trim(), 'ants - test')

//     find(input).trigger('keyup') // triggers search
//     andThen(() => {
//       assert.equal(find(list).text().trim(), 'foxes - test')
//       andThen(() => {
//         assert.equal(find(list).text().trim(), 'foxes - test')
//       })
//     })
//   })
// })
