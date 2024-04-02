import './App.css';
import Welcome from "./component/Welcome";
import AddComponent from "./component/AddComponent";

function App() {
  return (
      <>
      <Welcome></Welcome>
      <AddComponent firstNumber={1} secondNumber={2}></AddComponent>
      </>
  );
}

export default App;
