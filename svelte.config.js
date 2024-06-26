import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			// YOUR github repository name
			// base: process.env.NODE_ENV === 'production' ? '/watergis' : ''
			base: ''
		}
	},
	onwarn: () => {
		const SKIP_DEPLOY_TO_GHPAGES = process.env.SKIP_DEPLOY_TO_GHPAGES;
		if (SKIP_DEPLOY_TO_GHPAGES) {
			return;
		}
	}
};

export default config;
