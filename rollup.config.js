import typescript from 'rollup-plugin-typescript3';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

module.exports = {
	input: 'src/index.ts',
	output: {
		file: 'dist/logger.js',
		format: 'umd',
		name: 'Logger',
		amd: {
			id: 'logger',
		},
		sourcemap: true,
	},
	plugins: [
		typescript(),
		nodeResolve(),
		commonjs({
			namedExports: {
				'node_modules/js-cookie/src/js.cookie.js': ['get'],
			}
		}),
	],
};
