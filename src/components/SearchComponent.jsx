import { useState } from 'react';

const inputCustomStyle = {
  backgroundColor: '#f8f9fa',
  color: 'black',
  padding: '12px',
  border: '1px solid #ced4da',
  borderRadius: '6px',
  inlineSize: '100%',
  maxWidth: '400px',
  marginRight: '8px',
  outline: 'none',
};

const userCustomStyle = {
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '16px',
  margin: '12px 0',
  listStyle: 'none',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
};

const SearchComponent = ({ users }) => {
  const [searchItem, setSearchItem] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearchItem = (e) => {
    const searchValue = e.target.value;
    setSearchItem(searchValue);

    // Filter users based on the name or place of birth
    const newFilteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.placeOfBirth.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredUsers(newFilteredUsers);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <form>
        <label
          htmlFor="search"
          style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}
        >
          Search Users
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search by name or place of birth..."
          value={searchItem}
          onChange={handleSearchItem}
          style={inputCustomStyle}
        />
      </form>
      <ul style={{ padding: 0 }}>
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            style={userCustomStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>Place of Birth:</strong> {user.placeOfBirth}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;

//Using the search button to trigger the search function

// const inputCustomStyle = {
//   backgroundColor: '#f8f9fa',
//   color: 'black',
//   padding: '12px',
//   border: '1px solid #ced4da',
//   borderRadius: '6px',
//   inlineSize: '100%',
//   maxWidth: '400px',
//   marginRight: '8px',
//   outline: 'none',
// };

// const buttonCustomStyle = {
//   backgroundColor: '#007bff',
//   color: '#fff',
//   padding: '12px 16px',
//   border: 'none',
//   borderRadius: '6px',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s ease',
// };

// const userCustomStyle = {
//   backgroundColor: '#fff',
//   borderRadius: '12px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   padding: '16px',
//   margin: '12px 0',
//   listStyle: 'none',
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   cursor: 'pointer',
// };

// const SearchWithButtonComponent = ({ users }) => {
//   const [searchItem, setSearchItem] = useState('');
//   const [filteredUsers, setFilteredUsers] = useState(users);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const searchValue = searchItem.trim();

//     // Filter users based on the name or place of birth
//     const newFilteredUsers = users.filter(
//       (user) =>
//         user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
//         user.placeOfBirth.toLowerCase().includes(searchValue.toLowerCase())
//     );

//     setFilteredUsers(newFilteredUsers);
//   };

//   return (
//     <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
//       <form
//         onSubmit={handleSearch}
//         style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}
//       >
//         <input
//           type="text"
//           placeholder="Search by name or place of birth..."
//           value={searchItem}
//           onChange={(e) => setSearchItem(e.target.value)}
//           style={inputCustomStyle}
//         />
//         <button type="submit" style={buttonCustomStyle}>
//           Search
//         </button>
//       </form>
//       <ul style={{ padding: 0 }}>
//         {filteredUsers.map((user) => (
//           <li
//             key={user.id}
//             style={userCustomStyle}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = 'scale(1.05)';
//               e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = 'scale(1)';
//               e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
//             }}
//           >
//             <p>
//               <strong>Name:</strong> {user.name}
//             </p>
//             <p>
//               <strong>Age:</strong> {user.age}
//             </p>
//             <p>
//               <strong>Place of Birth:</strong> {user.placeOfBirth}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchWithButtonComponent;
