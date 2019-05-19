# Webpack-Tutorial
Simple way/outline/tutorial to initialize webpack for react

# Webpack:
	-Allows us to bundle js/css when needed at the right time, especially
	when dealing with a large project importing many js,html,css,jsx etc files

# webpack-dev-server --config ./webpack.config.js --mode development"
	-We are using webpack development server
	--Mode development: A new feature that comes with webpack 4, adds default
	webpack configurations.

# Our output gets put into a specefic directory.
	-We create a '/dist' folder
	-PublicPath - URL to the output directory relative to the html page
	-We want the output to be a bunfle file.

# Also we create a parameter for our devServer;
	-Will have a contentBase: '/dist' -- Where to serve the content from
	-We tell our dev server where to look.

# Babel: Enables to write our code on es6+ 
	-Code gets transpiled (changed) to es5 so all the browsers can implement.
	-Babel-loader takes code and then compiles it
	-Babel-preset-env: Checks the browser we are running in, makes changes
	on the features that are not implemented on the browser
	-Babel has preset states that may or may not be implemented
	
    Webpack uses something called loader, goes through babel to transpile to es5
    and we also go through eslint to check for any mistakes
	    --We install eslint loader

    Babel-es-lint: So our linting also includes es6 + es7 +es8;