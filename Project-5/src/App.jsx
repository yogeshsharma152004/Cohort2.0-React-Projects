import React from "react";
import { useState } from "react";

const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [compney, setCompney] = useState("");
  const [allUser, setAllUser] = useState([])

  let formHandler = (e) => {
    e.preventDefault();

let allUserData = [...allUser]

const randomImg = Math.floor(Math.random() * 70) + 1;

  const profilePic = `https://i.pravatar.cc/150?img=${randomImg}`;

allUserData.push({name,email,contact,compney,profilePic})
setAllUser(allUserData)




    setName('')
    setEmail('')
    setContact('')
    setCompney('')
  };
  return (
    <div className="main">
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
      >
        <input
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
            
          }}
          type="text"
          placeholder="Enter Name"
        />
        <input 
        value={email}
        required
        onChange={(e)=>{
           setEmail(e.target.value);
            
        }}
         type="text" placeholder="Enter Email" />
        <input
        value={contact}
        required
        onChange={(e)=>{
          setContact(e.target.value)
          
        }}
         type="text" placeholder="Enter Contact Number" />
        <input 
        value={compney}
        required
        onChange={(e) => {
          setCompney(e.target.value)
          
        }}
         type="text" placeholder="Enter Compney Name" />

        <button>Submit</button>
      </form>

      {
        allUser.map((elem , index) => {
          return <div className="card" key={index}>
             <img 
          src={elem.profilePic} 
          alt="profile" 
          
        />
                <h1>{elem.name}</h1>
                <h3>{elem.email}</h3>
                <h3>{elem.contact}</h3>
                <h3>{elem.compney}</h3>
          </div>
        })
      }
    </div>
  );
};

export default App;
