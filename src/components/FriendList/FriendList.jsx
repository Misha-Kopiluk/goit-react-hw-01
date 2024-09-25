import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={styles.activity}>
      {friends.map((item) => {
        return (
          <li key={item.id}>
            <FriendListItem
              name={item.name}
              avatar={item.avatar}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
