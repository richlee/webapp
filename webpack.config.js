module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    output: { filename: "bundle.js" },
    resolve: { extensions: [".ts", ".js"] },
    module: {
    rules: [
        { test: /\.ts/, use: "ts-loader", exclude: /node_modules/ }
    ]
    },
    devServer: {
        static: "./assets",
        port: 4500
    }
};