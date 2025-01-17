import * as assert from 'uvu/assert';

/** @type {import('../../../../../types').TestMaker} */
export default function (test) {
	test('includes paths', async ({ base, page }) => {
		await page.goto(`${base}/paths`);

		const json = await page.innerHTML('pre');

		assert.equal(
			json,
			JSON.stringify({
				base: '',
				assets: '/.'
			})
		);
	});
}
