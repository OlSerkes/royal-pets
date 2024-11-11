import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';

export const git = () => {
  return gulp
    .src(`${app.path.buildFolder}/**/*.*`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'GIT',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(ghPages({ cache: false }));
};
