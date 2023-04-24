import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
  <div className="todo-container">
    <div className="todo-wrap">
      <Header/>
      <Footer/>
    </div>
  </div>
  );
}

export default App;
