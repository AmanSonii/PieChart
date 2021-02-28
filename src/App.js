import logo from './logo.svg';
import './App.css';
import PieChartDemonstration from './component/PieChartDemonstration';
function App() {
  return (
    <div className="App">
     <div style={{backgroundColor:'white', height:'50px'}}>
       <h2 style={{ fontFamily:'URW Chancery L, cursive', marginLeft:"5px", color:'blue', fontWeight:"bold"}}>Pie Chart</h2>        
       </div> 
      <PieChartDemonstration></PieChartDemonstration>
    </div>
  );
}

export default App;
