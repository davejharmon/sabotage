import { useState } from 'react';
import { Button } from './Button';
import classes from './MainWindow.module.css';
export const MainWindow = props => {
  const [selection, setSelection] = useState(null);
  const { userlist, user, phase } = props;

  const selectUserHandler = e => {
    setSelection(e.target.outerText);
  };
  const votelist = userlist.filter(username => username !== user);
  return (
    <div className={classes.window}>
      <div>{phase}</div>
      <ul className={classes.voteSelector}>
        {votelist.map((user, i) => (
          <li
            key={i}
            onClick={selectUserHandler}
            className={
              user === selection ? classes.selected : classes.unselected
            }
          >
            {user}
          </li>
        ))}
      </ul>
      <Button type="button">Vote Now</Button>
    </div>
  );
};
