function Child({ updateMessage }) {

  const handleClick = () => {
    updateMessage("Message updated by Child!");
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