var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var plumber = require('gulp-plumber');
var babel = require("gulp-babel");
var del = require('del');
var rename = require('gulp-rename');
var pleeease = require('gulp-pleeease');
var notifier = require('node-notifier');

gulp.task('sass', function() {
    gulp.src('src/components/**/*.scss')
        .pipe(sass())
        .pipe(pleeease())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('clean', function () {
  del([
    'dist/**/*'
  ]);
});

gulp.task('js', function() {
    return gulp.src('src/js/main.js')
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('lint', function() {
  return gulp.src(['src/components/**/*.js','src/js/main.js']) // lint のチェック先を指定
    .pipe(plumber({
      // エラーをハンドル
      errorHandler: function(error) {
        var taskName = 'eslint';
        var title = '[task]' + taskName + ' ' + error.plugin;
        var errorMsg = 'error: ' + error.message;
        // ターミナルにエラーを出力
        console.error(title + '\n' + errorMsg);
        // エラーを通知
        notifier.notify({
          title: title,
          message: errorMsg,
          time: 3000
        });
      }
    }))
    .pipe(eslint({ useEslintrc: true })) // .eslintrc を参照
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(plumber.stop());
});

gulp.task('watch', ['sass'], function(){
    gulp.watch('src/sass/components/**/*scss', ['sass']);
});

gulp.task('default', ['clean','sass', 'js']);