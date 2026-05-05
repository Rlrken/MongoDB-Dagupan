import { useState } from "react";
import Child from "./Child";
import Display from "./Display";

function Parent() {
  // STATE: Stores data inside Parent component
  const [message, setMessage] = useState("Hello from Parent");

  // FUNCTION: Used by Child to update Parent state
  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h2>Parent Component (State Holder)</h2>

      {/* PASSING PROPS DOWNWARD (Unidirectional Flow) */}
      <Child updateMessage={updateMessage} />

      <Display message={message} />
    </div>
  );
}

export default Parent;