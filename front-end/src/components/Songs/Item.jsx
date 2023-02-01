import { Link } from "react-router-dom";
import Star from './Star'
import styles from './index.module.css'

const Item = (props) => {
  return (
    <Link to={`/songs/${props.id}`} >
      <div className={styles.item}>
        <span>
          <Star fav={props.is_favorite} onClick={props.onClick} />
        </span>
        <span>{props.name}</span>
        <span>{props.artist}</span>
        <span>{props.time}</span>
      </div>
    </Link>
  );
};

export default Item
