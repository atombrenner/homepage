module.exports = {
    entry: './src/js/atombrenner.js',
    output: {
        filename: './bundle.js'
    },
    devServer: {
     contentBase: './src',
     watchContentBase: true
    }
};
