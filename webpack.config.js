
const path = require("path");

const babelLoaderNew = {
    loader: "babel-loader",
};

module.exports = {
	mode: "development",
	entry: { main: "./demo/index.js" },
	output: {
        path: path.resolve(__dirname, 'output'),
		filename: `js/[name].js`,
		libraryTarget: "umd",
		globalObject: "this",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
                use: [babelLoaderNew],
                exclude: /node_modules/, 
			},
		],
	},
};
