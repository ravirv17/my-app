import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About'

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className="container">
    <TextForm title= "Enter the text below :"/>
    <About/>
    </div>
    </>
  );
}

export default App;
