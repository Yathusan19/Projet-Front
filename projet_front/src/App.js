import Header from './composant/header';
import Footer from './composant/footer';
import Main from './composant/main';

function App() {
  return (
    <div className="body-main">
      <div className="Header">
        <Header/>
      </div>
      <div className='main'>
        <Main/>
        <div className='footer'>
        <Footer/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
