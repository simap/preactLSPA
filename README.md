# Preact Literal Single Page Application Boilerplate using Webpack

This boilerplate produces a LSPA, literal single page application, where everything is merged into a single file. This includes the HTML, JS, CSS, and image assets. Preact + JSX provide a framework for the application.

# Why? Why not Preact CLI?

Preact is impressive, weighing in at 3-4K gzipped, and recommends the Preact CLI, an "off-the-shelf solution for building Preact applications that is optimized for modern web development" that does indeed do this, but imposes many opinions along the way that increase the complexity (and size).

For embedded web applications, this can complicate things without realizing any of the benefits. You don't need/have server side rendering, minizing storage size is important, bandwidth is relatively a non-isssue, multiple files complicates firmware updates, and caching things can cause support issues.

# What's in this?

* Started with https://createapp.dev/webpack/no-library--css
* Mushing things into one file is done using these plugins:
    * MiniCssExtractPlugin
    * CssMinimizerPlugin
    * HtmlWebpackPlugin
    * HtmlInlineScriptPlugin
    * HTMLInlineCSSWebpackPlugin
* Images (png, jpg, svg) are inlined as base64 using webpack assets. Gzip negates most of the bloat added by base64.
* Preact with JSX compilation. ([HTM](https://github.com/developit/htm) might be a good alternative, but I wanted JSX)
* Babel with minimal overhead for non-modern browsers. 
* SizePlugin to keep tabs on output gzip size delta between builds.


## Building and running on localhost

First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

You can open the `dist/index.html` file directly in a browser, no local server needed since there aren't additional assets to fetch.

## Credits

Made with [createapp.dev](https://createapp.dev/)

This shows adding preact, babel, jsx, etc:
https://medium.com/@heather.koo07/setup-preact-with-webpack-and-babel-cbd13e6bd0c

