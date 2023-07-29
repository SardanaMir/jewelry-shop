import 'macro-css';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return <div className="wrapper clear">
    
    <div style={{display: 'none'}} className="overlay">
      <Drawer/>
    </div>

    <Header/>

    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1>Все серьги</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search"/>
          <input placeholder="Поиск..."/>
        </div>
      </div>
      
      <div className="d-flex flex-wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

    </div>

  </div>

}

export default App;
