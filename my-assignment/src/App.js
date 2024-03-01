import "./App.css";

function App() {
  return (
    <div>
      <label>Bill Total</label>
      <input type="text" placeholder={"0.00"} />
      <label>Tip</label>
      <input type="text" placeholder={"0.00"} />
      <div className = "split">
        <label>split</label>
        <div className = "split-control">
          <button></button>
          <button></button>

        </div>
      </div>
    </div>  
  );
}

export default App;
