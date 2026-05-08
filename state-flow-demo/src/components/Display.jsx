function Display({ message }) {

  return (

    <div style={styles.card}>

      <h2>Display Component</h2>

      <p>{message}</p>

    </div>

  );

}

const styles = {
  card: {
    border: "1px solid blue",
    padding: "15px",
    borderRadius: "8px"
  }
};

export default Display;