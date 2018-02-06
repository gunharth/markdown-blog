const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const CleanWebpackPlugin = require('clean-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copyDirectory('content/music-articles/img', 'public/img') // copy music articles assets
   .copyDirectory('content/music-articles/audio', 'public/audio') // copy music articles assets
   .copyDirectory('content/music-articles/pdf', 'public/pdf') // copy music articles assets
   .copyDirectory('content/posts/img', 'public/img') // copy posts articles assets
   .js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/main.scss', 'public/css')
   .options({
      processCssUrls: false,
      postCss: [ tailwindcss('tailwind.js') ],
   })
    .browserSync({
        proxy: 'http://markdown-blog.test',
    })

if (mix.inProduction()) {
    mix.version();
}

mix.webpackConfig({
    plugins: [
        new CleanWebpackPlugin(['./public/img', './public/audio'])
    ]
});