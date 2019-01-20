var gulp = require('gulp');
var watch = require('gulp-watch');
var {spawn} = require('child_process');
var browsersync = require("browser-sync").create();
var hugoExe = 'uber_hugo';
var del = require('del');
var devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development');

function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./public"
        },
        port: 3000
    });
    done();
}

function browserSyncReload(done) {
    browsersync.reload();
    done();
}

gulp.task('clean', function () {
    del('public/**', {force: true});
});

gulp.task('copy-pages', function () {
    return gulp.src('./themes/main/static-content/**/*').pipe(gulp.dest('./content/'))
});

gulp.task('hugo', function (cb) {
    var args = [
        '--config',
        devBuild ? 'config-dev.yml' : 'config-prod.yml',
        '--rocketDbDir',
        '/Users/davidmz/dev/clone-army/test-db',
        '--renderThreads',
        '6'
    ];

    return spawn(hugoExe, args, {stdio: 'inherit'}).on('close', (code) => {
        if (code === 0) {
            browserSyncReload(cb);
        } else {
            console.log('hugo command failed.');
            cb('hugo command failed.');
        }
    })
});

gulp.task('watch-all', function () {
    watch([
            'themes/main/static/**/*.*',
            'themes/main/layouts/**/*.html',
            'content/**/*.md',
            'config*.yml',
        ],
        gulp.series('hugo'));
});

gulp.task('watch', gulp.parallel('watch-all', browserSync));