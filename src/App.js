
import './App.css';
import Footer from './Componant/Footer';
import Header from './Componant/Header';
import MusicItems from './Componant/MusicItems';
import TitleHeading from './Componant/TitleHeading';

function App() {
  return (
    <div className="App">
     <Header/>
     <TitleHeading/>
     <h2 >MUSIC</h2>
     <MusicItems/>
     <Footer/>
    </div>
  );
}

export default App;
