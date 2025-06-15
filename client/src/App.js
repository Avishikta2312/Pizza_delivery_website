import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.js';
import Homepage from './screens/homepage.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage/>
    </div>
  );
}

export default App;
