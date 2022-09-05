import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    name: 'Emmanuel',
    lastname: 'Berit',
    dateOfBirth: new Date().getDay()
  });


  
  console.log(user);

  setTimeout(() => {
    setLoading(false);
    setUser((prev) => {
      return {...prev, [prev.name] : 'Maximus', [prev.lastname]: 'Enamiroror', [prev.dateOfBirth]: new Date().getFullYear()}
    })
  }, 10000);


  return (
    <div className="App">
      {loading ? 'This page as not loaded completely please wait' : (
        <div>
          <Header />
          <Main loading={loading} />
          <Footer />
        </div>
      )}

    </div>


  );
}



export default App;
