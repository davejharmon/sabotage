import classes from './StatusBar.module.css';

export const StatusBar = props => {
  const { role } = props;
  return (
    <div className={classes.status}>
      {role && <div>You are a {role}</div>}
      {!role && <div>You have no role</div>}
    </div>
  );
};
