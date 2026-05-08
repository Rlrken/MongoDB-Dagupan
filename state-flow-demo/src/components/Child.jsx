function Child({ message, updateMessage }) {

  // ======================================
  // STEP 3: CHILD TO PARENT COMMUNICATION
  // ======================================

  const handleClick = () => {

    updateMessage("Message Updated from Child Component");

  };

  return (

    <div style={styles.card}>

      <h2>Child Component</h2>

      <p>{message}</p>

      <button onClick={handleClick}>
        Update Parent State
      </button>

    </div>

  );

}

const styles = {
  card: {
    border: "1px solid gray",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "8px"
  }
};

export default Child;