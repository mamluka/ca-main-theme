var gulp = require('gulp');
var watch = require('gulp-watch');
var {spawn} = require('child_process');
var browsersync = require("browser-sync").create();
var hugoExe = 'uber_hugo';
var del = require('del');
var devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development');
var argv = require('yargs').argv;

function hugoConfig() {
    if (argv.customHugoConfig) {
        return argv.customHugoConfig
    } else {
        return devBuild ? 'config-dev.yml' : 'config-prod.yml';
    }
}


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
    return del('public/**', {force: true});
});

gulp.task('copy-pages', function () {
    return gulp.src('./themes/main/static-content/**/*').pipe(gulp.dest('./content/'))
});

gulp.task('hugo', function (cb) {
    var args = [
        '--config',
        hugoConfig(),
        '--rocketDbDir',
        '/Users/davidmz/dev/clone-army/test-db',
        '--renderThreads',
        '6',
        '--redisUrl',
        'localhost:6379',
        '--mongoUrl',
        'localhost:27017'
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
            'themes/main/i18n/**/*.toml',
            'content/**/*.md',
            'config*.yml',
        ],
        gulp.series('hugo'));
});

gulp.task('watch', gulp.series('clean', 'copy-pages', 'hugo', gulp.parallel('watch-all', browserSync)));
