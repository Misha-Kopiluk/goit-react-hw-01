import styles from "./FriendListItem.module.css";

function FriendListItem(props) {
  const { name, avatar, isOnline } = props;
  const activityStatus = isOnline;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={activityStatus ? styles.online : styles.offline}>
        {activityStatus ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
