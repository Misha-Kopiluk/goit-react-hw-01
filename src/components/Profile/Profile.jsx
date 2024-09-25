import styles from "./Profile.module.css";

function Profile(props) {
  const { name, tag, location, image, stats } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.img} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.paragraph}>@{tag}</p>
        <p className={styles.paragraph}>{location}</p>
      </div>

      <ul className={styles.information}>
        <li className={styles.items}>
          <span className={styles.title}>Followers</span>
          <span className={styles.text}>{stats.followers}</span>
        </li>
        <li className={styles.items}>
          <span className={styles.title}>Views</span>
          <span className={styles.text}>{stats.views}</span>
        </li>
        <li className={styles.items}>
          <span className={styles.title}>Likes</span>
          <span className={styles.text}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
