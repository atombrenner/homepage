module.exports = {
    entry: './src/js/atombrenner.js',
    output: {
        filename: './bundle.js'
    },
    devServer: {
     contentBase: './s3',
     watchContentBase: true
    }
};
