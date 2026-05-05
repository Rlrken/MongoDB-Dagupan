function Child({ updateMessage }) {

  // CHILD RECEIVES FUNCTION VIA PROPS FROM PARENT

  const handleClick = () => {
    // CHILD REQUESTS STATE UPDATE IN PARENT
    updateMessage("Message updated from Child");
  };

  return (
    <div>
      <h3>Child Component</h3>

      <button onClick={handleClick}>
        Update Parent State
      </button>
    </div>
  );
}

export default Child;