import styles from "./SearchBox.module.css";
export const SearchBox = ({ inputValue, setInputValue }) => {
  return (
    <>
      <p className={styles.text}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};
