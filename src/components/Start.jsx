import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <>
    <div className="container">
      <div className="start">
        <input
          className="startInput"
          placeholder="enter your name"
          ref={inputRef}
        />
        <br></br>
        <button className="startButton" onClick={handleClick}>
          Start
        </button>
      </div>
    </div>
    </>
  
  );
}