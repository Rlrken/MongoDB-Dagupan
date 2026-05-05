function Display({ message }) {
  // RECEIVES DATA FROM PARENT VIA PROPS

  return (
    <div>
      <h3>Display Component</h3>
      <p>{message}</p>
    </div>
  );
}

export default Display;