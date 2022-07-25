import { Button } from './Button';
import classes from './LoginBar.module.css';
export const LoginBar = props => {
  const { user, setUser, userlist } = props;
  console.log(userlist);
  return (
    <div className={classes.loginBar}>
      {user ? (
        <div>
          <div>Logged in as:</div>
          <div className={classes.loggedInAs}>{user}</div>
          <Button type="Logout" />
        </div>
      ) : (
        <div>
          <div>Please log in...</div>
          <select id="userlist" name="userlist">
            {userlist ? (
              userlist.map((username, i) => (
                <option value={username} key={i}>
                  {username}
                </option>
              ))
            ) : (
              <option>no users</option>
            )}
          </select>
        </div>
      )}
    </div>
  );
};
