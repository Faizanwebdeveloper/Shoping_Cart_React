import React, { useState } from 'react'
import useFetch from '../costumehook/useFetch'

const Test = () => {
  const [data, setdata] = useState({});
  const hadleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata(values => ({ ...values, [name]: value }));

  }
  const hadlesubmit = (e) => {
    e.preventDefault();
    sendData(data);
    e.target.reset();
  }
  const sendData = async (data) => {
    try {
      const res = await fetch("http://localhost/rest-api/insert.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),

      });
      if (res.ok) {
        const result = await res.json(); 
        console.log("Response:", result);
      } else {
        console.error("Error:", res.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div>
      <form onSubmit={hadlesubmit}>
        <br /><br /><br />
        <input name="name" placeholder='name' onChange={hadleinput} /><br /><br />
        <input name="email" placeholder='Email' onChange={hadleinput} /><br /><br />
        <input name="age" placeholder='Age' onChange={hadleinput} /><br /><br />
        <input name="mobile" placeholder='Mobile' onChange={hadleinput} /><br /><br />
        <button type="submit" >Submit</button><br /><br />
      </form>
    </div>
  )
}

export default Test
