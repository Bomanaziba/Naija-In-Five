import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PaperStand from './components/paperstand/paperstand'
import Introductory from './components/Introductory/Introductory';
import NavBar from './components/navbar/navbar';
import FeedBack from './components/feedBack/feedback';
import Footer from './components/footer/footer';
import Host from './components/host/host';
import Listen from './components/listen/listen';


function App(props) {
  return (
    <div>
      <NavBar />
      <Introductory />
      <Listen />
      <main role="main">
        <PaperStand  newspaper = { props.newspaper } />
        <Host host = { props.host } />
        <FeedBack />
      </main>
      <Footer socialmedia = { props.socialmedia } />
    </div>
  );
}

export default App;
