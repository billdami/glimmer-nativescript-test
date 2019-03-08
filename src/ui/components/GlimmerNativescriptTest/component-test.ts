import hbs from '@glimmer/inline-precompile';
import { setupRenderingTest } from '@glimmer/test-helpers';

const { module, test } = QUnit;

module('Component: GlimmerNativescriptTest', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<GlimmerNativescriptTest />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
