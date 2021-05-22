import adapter from '@sveltejs/adapter-netlify';
// module.exports = {
// 	kit: {
// 		adapter: adapter(), // currently the adapter does not take any options
// 		target: '#svelte',
// 		prerender: {
// 			crawl: true,
// 			enabled: true,
// 			force: true,
// 			pages: ['*'],
// 		},
// 	}
// };
export default {
	kit: {
		adapter: adapter(), // currently the adapter does not take any options
		target: '#svelte'
	}
};