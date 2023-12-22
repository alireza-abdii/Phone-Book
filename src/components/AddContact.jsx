/* eslint-disable react/prop-types */

import { useState } from "react";

const AddContact = ({ updateList, searchResult }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (name) => {
    setName(name.target.value);
  };
  const handlePhoneChange = (phone) => {
    setPhone(phone.target.value);
  };
  const handleEmailChange = (email) => {
    setEmail(email.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email) return null;

    const newContact = {
      id: searchResult.length + 1,
      name,
      phone,
      email,
    };

    updateList(newContact);

    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <form
      className="w-full h-[20%] flex justify-between items-center space-x-1"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        className="w-[30%] px-2 py-3 shadow-lg border-[2px] border-gray-400 rounded-md"
        onChange={(name) => handleNameChange(name)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        className="w-[30%] px-2 py-3 shadow-lg border-[2px] border-gray-400 rounded-md"
        onChange={(phone) => handlePhoneChange(phone)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        className="w-[30%] px-2 py-3 shadow-lg border-[2px] border-gray-400 rounded-md"
        onChange={(email) => handleEmailChange(email)}
      />
      <button
        type="submit"
        className="px-6 flex py-3 shadow-lg bg-blue-800 rounded-md border-[2px] border-blue-800 text-white transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:text-black hover:shadow-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Add
      </button>
    </form>
  );
};

export default AddContact;
