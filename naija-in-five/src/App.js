//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaperStand from './components/paperstand/paperstand'
import Introductory from './components/Introductory/Introductory';
import NavBar from './components/navbar/navbar';
import FeedBack from './components/FeedBack/feedback';
import Footer from './components/footer/footer';
import Host from './components/Host/host';


function App(props) {
  return (
    <div>
      <NavBar />
      <Introductory />
      <main role="main">
        <PaperStand  newspaper = { props.newspaper } />
        <Host />
        <FeedBack />
      </main>
      <Footer socialmedia = { props.socialmedia } />
    </div>
  );
}

export default App;
