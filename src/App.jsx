import { useMemo, useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactList } from "./components/ContactList/ContactList";
import { useDebounce } from "use-debounce";

const data = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [names, setNames] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : data;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(names));
  }, [names]);

  const [inputValue, setInputValue] = useState("");
  const [debounceInputValue] = useDebounce(inputValue, 500);

  const visibleNames = useMemo(() => {
    return names.filter((name) =>
      name.name.toLowerCase().includes(debounceInputValue.toLowerCase())
    );
  }, [debounceInputValue, names]);

  const addNewUser = (newUsers) => {
    setNames((prevUsers) => {
      return [...prevUsers, ...newUsers];
    });
  };

  const deleteUser = (userId) => {
    setNames((prevTasks) => {
      return prevTasks.filter((user) => user.id !== userId);
    });
  };

  return (
    <div className="container">
      <ContactForm onSubmit={addNewUser} />
      <SearchBox inputValue={inputValue} setInputValue={setInputValue} />
      <ContactList
        data={visibleNames}
        text={inputValue}
        onChange={setInputValue}
        onDelete={deleteUser}
      />
    </div>
  );
}

export default App;
