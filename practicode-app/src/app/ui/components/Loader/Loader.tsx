import classes from './styles.module.css'

export const Loader = () => {
  return (
    <div className={classes.loaderContainer}>
        <span className={classes.loader}></span>
    </div>
  )
}
