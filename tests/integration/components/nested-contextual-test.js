import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | nested-contextual', function(hooks) {
  setupRenderingTest(hooks);

  test('it merges class', async function(assert) {
    await render(hbs`
      <NestedContextual as |NCon|>
        <NCon.body class="hi-from-ncon" />
      </NestedContextual>
    `);

    return this.pauseTest();
    assert.dom(".con-body").exists();
    assert.dom(".hi-from-ncon").exists();
  });
});
