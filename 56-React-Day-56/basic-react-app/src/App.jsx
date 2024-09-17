import './App.css';
import Title from "./title.jsx";

function Description() {
  return <h3>Hello, how are you!</h3>;
}

function App() {
  return (
    <div>
      <Description />
      <Title />
    </div>
  );
}

export default App;

