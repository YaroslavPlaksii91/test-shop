const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const newer = require('gulp-newer');
const browsersync = require('browser-sync').create();
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const del = require('del');

const paths = {
  html: {
    src: 'public/index.html',
    dest: 'dist',
  },
  styles: {
    src: 'src/**/*.scss',
    dest: 'dist/css',
  },
  scripts: {
    src: 'src/index.js',
    dest: 'dist/js',
  },
  images: {
    src: 'public/images/**',
    dest: 'dist/images',
  },
};

function clean() {
  return del(['dist/*', '!dist/images']);
}

function html() {
  return gulp
    .src(paths.html.src)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      }),
    )
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browsersync.stream());
}

function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(
      cleanCSS({
        level: 2,
      }),
    )
    .pipe(concat('main.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browsersync.stream());
}

function scripts() {
  return browserify({
    entries: [paths.scripts.src],
    transform: [babelify.configure({presets: ['@babel/preset-env', '@babel/preset-react']})],
  })
    .bundle()
    .pipe(source('main.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browsersync.stream());
}

function img() {
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(
      imagemin({
        progressive: true,
      }),
    )
    .pipe(gulp.dest(paths.images.dest));
}

function watch() {
  browsersync.init({
    server: {
      baseDir: './dist/',
    },
  });
  gulp.watch(paths.html.dest).on('change', browsersync.reload);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, img);
}

const build = gulp.series(clean, html, gulp.parallel(scripts, styles, img), watch);

exports.clean = clean;
exports.img = img;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
exports.default = build;
