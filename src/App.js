import './App.css';
// import Side from './Side/Side'
import Main from './MainWorld/Main';
import Middle from './Middle/Middle';
// import Card from './Card/Card';
import CardContainer from './CardContainer/CardContainer';


function App() {
  return (
    <div className="App">
      {/* <Side/> */}
      <Main/>
      <Middle/>
      <CardContainer/>
      <div className='lastlogo'>
        <img src="../lastlogo.svg" alt="" />
      </div>
      
    </div>
  );
}

export default App;
