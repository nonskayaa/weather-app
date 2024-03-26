import classes from './NotFound.module.css'

export default function NotFoundIcon() {
  return (
    <div className={classes.not_found__container}>
      <h4 className={classes.not_found__title}>Oops...</h4>
      <p className={classes.not_found__subtitle}>Unfortunately we have no information about such a city</p>
    </div>
  );
}
