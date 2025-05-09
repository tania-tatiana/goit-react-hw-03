import { Contact } from "../Contact/Contact";
import styles from "./ContactList.module.css";
export const ContactList = ({ data, onDelete }) => {
  return (
    <div>
      <h1 className={styles.title}>Phonebook</h1>
      <ul className={styles.list}>
        {data.map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            <Contact id={id} name={name} number={number} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};
