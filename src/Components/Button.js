import classes from './Button.module.css';
export const Button = props => {
  const { clickHandler } = props;
  return (
    <button type="button" onClick={clickHandler} className={classes.button}>
      {props.children}
    </button>
  );
};
