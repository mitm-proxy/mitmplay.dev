const sveltePreprocess = require('svelte-preprocess')
const netlify = require('@sveltejs/adapter-netlify')
const pkg = require('./package.json')
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: netlify(),

		target: '#svelte',

		vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
	}
};

export default config;
