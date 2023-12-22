/* eslint-disable react/prop-types */

const ContactList = ({ searchResult }) => {
  return (
    <div className="w-full h-[65%] flex flex-col items-center overflow-auto">
      <div className="w-[650px] flex justify-between items-center py-3 border-y-[2px] border-gray-400">
        <p className="w-36 flex justify-center items-center font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
          Name
        </p>
        <p className="w-36 flex justify-center items-center font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          Phone
        </p>
        <p className="w-36 flex justify-center items-center font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          Email
        </p>
      </div>

      <ul className="w-[650px]">
        {searchResult.map((person) => (
          <li
            key={person.id}
            className="flex justify-between items-center py-3 border-b-[1.5px] border-gray-400"
          >
            <p className="w-36 flex justify-center items-center">
              {person.name}
            </p>
            <p className="w-36 flex justify-center items-center">
              {person.phone}
            </p>
            <p className="w-36 flex justify-center items-center">
              {person.email}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
