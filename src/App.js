import logo from './logo.svg';
import './App.css';
import PieChartDemonstration from './component/PieChartDemonstration';
import SideNav from "./component/SideNav";
function App() {
  return (
    <div className="App">
     <div style={{backgroundColor:'white', height:'50px'}}>
       <h2 style={{ fontFamily:'URW Chancery L, cursive', marginLeft:"5px", color:'blue', fontWeight:"bold"}}>Pie Chart</h2>        
       </div> 
       <PieChartDemonstration></PieChartDemonstration>
       <SideNav></SideNav>
       {/* <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        SlashTv
                    </a>
                </li>
                <li>
                    <a href="#">Nos émissions</a>
                </li>
                <li>
                    <a href="#">A venir</a>
                </li>
                <li>
                    <a href="#">Evènements</a>
                </li>
                <li>
                    <a href="#">A Propos</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>    */}

      
    </div>
  );
}

export default App;
