import './App.css';
import Title from "./title.jsx";
import ProductTab from "./productTab.jsx";
import MessageBox  from './msgBox.jsx';

function Description() {
  return <h3>Hello, how are you!</h3>;
}

function App() {
  return (
  <>
   <MessageBox UserName="prince" Usercolor="red"/>
   <ProductTab/>
   </>
  );
}

export default App;

