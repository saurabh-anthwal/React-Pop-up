import React, { useState,useEffect } from "react";

export default function PopUp() {
  const [data, setData] = useState([]);
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
      const json = await res.json();
      setData(json);
    })();
  }, []);

  function handleMouseEnter() {
    setBtn(true);
  }
  function handleMouseRemove() {
    setBtn(false);
  }

  
  console.log(data);
  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <div>
        {data.map((el) => (
          <div style={{border:"1px solid gray",borderRadius:"5px", margin:"5px",padding:"5px 2px  "}}>
            <strong>{el.id}</strong>
            <h2>{el.title}</h2>
            <button
          onMouseEnter={handleMouseEnter}
          onMouseOut={handleMouseRemove}
          style={{ fontSize: "20px" }}
        >
          hover
        </button>
        {btn && (
          <div
            style={{
              outline: "1px solid royalblue",
              backgroundColor: "pink",
              color: "white",
              padding: "2px 10px",
              width: "50vw",
              borderRadius: "7px",
              position: "fixed",
              top: "50vh",
              left: "25vw",
            }}
          >
            <h2>Hi User Check your Score:</h2>
            <p><span style={{color:"red"}}>Your Status is : </span>{el.completed ? "TRUE" : "FALSE"}</p>
          </div>
        )}
          </div>
        ))}
       
      
      </div>
    </div>
  );
}
