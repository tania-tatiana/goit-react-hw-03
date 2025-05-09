import styles from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.textBlock}>
        <div className={styles.info}>
          <IoMdPerson color="#363535" size={22} />
          <p className={styles.text}>{name}</p>
        </div>
        <div className={styles.info}>
          <FaPhoneAlt color="#363535" size={20} />
          <p className={styles.text}>{number}</p>
        </div>
      </div>
      <button className={styles.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
