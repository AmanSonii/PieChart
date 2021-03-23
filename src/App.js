import logo from './logo.svg';
import './App.css';
import PieChartDemonstration from './component/PieChartDemonstration';
import SideNav from "./component/SideNav";
import Sidebar from "./component/Sidebar";
function App() {
  return (
    <div classNameName="App">
     <div style={{backgroundColor:'white', height:'50px'}}>
       <h2 style={{ fontFamily:'URW Chancery L, cursive', marginLeft:"5px", color:'blue', fontWeight:"bold"}}>Pie Chart</h2>        
       </div> 
       <PieChartDemonstration></PieChartDemonstration>
       <Sidebar width={300} height={"100vh"}>
         <div>
       <input classNameName="effect-1" type="text" placeholder="Placeholder Text"/>
            <span classNameName="focus-border"></span>
            </div>
            <div>
            <input className="effect-2" type="text" placeholder="Placeholder Text"/>
            <span className="focus-border"></span>
            </div>
            <div>
            <input className="effect-3" type="text" placeholder="Placeholder Text"/>
            <span className="focus-border"></span>
            </div>
         
        </Sidebar>
       {/* <SideNav></SideNav> */}

       {/* <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
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
