/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'auth-image': "url('src/assets/images/AuthImage.jpg')",
				// 'vector-pattern': "url('src/assets/images/VectorPattern.svg')",
			}
		},
	},
	plugins: [],
}
