module.exports = {
    //Where should webpack start looking through our files
    entry:[
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        //Our serving point for the app
        contentBase: './dist'
    },
    //Tell what to do with our modules
    module: {
        //Telling it to look for files
        //We will also run them through babel-loader and eslint-loader
        rules: [
            {
                //Using regext anything that matches 'js' or .'jsx'
                test: /\.(js|jsx)$/,
                //Run it through babel
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                //Using regext anything that matches 'js' or .'jsx'
                test: /\.(js|jsx)$/,
                //Run it through babel
                use: ['eslint-loader'],
                exclude: /node_modules/
            }
        ]
    },
    //We want extensions 'js' and .'jsx' to be left off
    //Assume it is javascript or jsx files
    resolve:{
        extensions: ['.js', '.jsx']
    }
}