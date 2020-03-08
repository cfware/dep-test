import t from 'libtap';

import localModule from './index.js';

t.test('localModule exports something', async t => {
	t.ok(localModule);
});
