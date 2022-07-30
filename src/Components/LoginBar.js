import { Button } from './Button';
import classes from './LoginBar.module.css';
import { useRef } from 'react';
export const LoginBar = props => {
  const { user, setUser, userlist } = props;
  const selectedUserRef = useRef();

  const loginHandler = e => {
    e.preventDefault();
    console.log('login clicked');
    setUser(selectedUserRef.current.value);
  };

  const logoutHandler = () => {
    console.log('logging out...');
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div className={classes.loginBar}>
          <div>Logged in as:</div>
          <div className={classes.loggedInAs}>{user}</div>
          <Button type="Logout" clickHandler={logoutHandler} />
        </div>
      ) : (
        <div className={classes.loginBar}>
          <div>Please log in...</div>
          <form name="loginForm" onSubmit={loginHandler}>
            <select id="userlist" name="userlist" ref={selectedUserRef}>
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
            <input type="submit" />
          </form>
        </div>
      )}
    </div>
  );
};
