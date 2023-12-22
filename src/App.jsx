import AddContact from "./components/AddContact";
import SearchBar from "./components/SearchBar";
import ContactList from "./components/ContactList";
import "./index.css";
import { useState } from "react";

const allContact = [
  {
    id: 1,
    name: "Tom Jackson",
    phone: "555-444-333",
    email: "tom@gmail.com",
  },
  {
    id: 2,
    name: "Mike James",
    phone: "555-777-888",
    email: "mikejames@gmail.com",
  },
  {
    id: 3,
    name: "Clark Thompson",
    phone: "555-222-111",
    email: "clark123@gmail.com",
  },
  {
    id: 4,
    name: "Janet Larson",
    phone: "555-123-986",
    email: "janetlarson@gmail.com",
  },
];

const App = () => {
  const [contacts, setContacts] = useState(allContact);

  const [searchResult, setSearchResult] = useState(contacts);

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
    setSearchResult((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-400">
      <div className="w-[60%] h-[80%] bg-white px-6 py-2 rounded-md shadow-xl flex flex-col justify-between items-center space-y-2">
        <h1 className="text-black font-bold font-sans text-4xl my-4 flex">
          Phone Book
        </h1>
        <SearchBar searchResult={contacts} setSearchResult={setSearchResult} />
        <AddContact updateList={handleAddContact} searchResult={searchResult} />
        <ContactList searchResult={searchResult} />
      </div>
    </div>
  );
};

export default App;
