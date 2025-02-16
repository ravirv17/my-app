import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className="container">
    <TextForm title= "Enter the text below :"/>
    </div>
    </>
  );
}

export default App;
