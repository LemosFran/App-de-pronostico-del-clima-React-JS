import logo from './logo.svg';
import './assets/css/App.css';
import NavBar from './components/NavBar';
import Form from './components/Form';
import WeatherPanel from './components/WeatherPanel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WeatherPanel />
      <Footer />
    </div>
  );
}

export default App;
