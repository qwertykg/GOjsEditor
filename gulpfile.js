const gulp = require("gulp");

const del = require("del");
const connect = require("gulp-connect");
const run = require('gulp-run');

gulp.task("buildHTML", function () {
    return new Promise(function (resolve, reject) {
        gulp.src(["src/html/*"])
            .pipe(gulp.dest("./dist"));
            resolve();
    });
});

gulp.task("buildJS", function () {
    return run('npm run webpack').exec();
});

gulp.task("clean", function () {
    return new Promise(function (resolve, reject) {
        del(["dist"]);
        resolve();
    })
});

gulp.task("serve", function () {
    return connect.server({
        root: './dist',
        livereload: true
    });
});

gulp.task("build", ["buildHTML", "buildJS"], function () {});

gulp.task("default", ["build", "serve"], function () {});