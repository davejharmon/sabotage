import { Button } from './Button';
import classes from './LoginBar.module.css';
export const LoginBar = () => {
  return (
    <div className={classes.loginBar}>
      <div>Logged in as:</div>
      <div className={classes.loggedInAs}>Dave</div>
      <Button type="Logout" />
    </div>
  );
};
