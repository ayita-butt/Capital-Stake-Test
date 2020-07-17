module.exports = {
    entry: "./src/Autocomplete.js",
    output: {
        filename: "./dist/bundle.js",
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    // Other options...
};