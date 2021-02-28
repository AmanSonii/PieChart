import React from "react";
import ReactDOM from "react-dom";
import { unstable_batchedUpdates } from "react-dom";
import { PieChart } from "react-minimal-pie-chart";
import  Form  from "./Form";
class PieChartDemonstration extends React.Component{
   
  state= {data:[]};

  onSubmit = (formsValue)=>{
    let array = [];
    let title = ["1", "2", "3"];
    let colors = ["#77dc14", "#ffef09", "#ffa200"];
    let i = 0;
    var dataToProcess = formsValue.target;
    for(let ele of dataToProcess){
      if(ele && ele.type == 'text'){
        array.push({"value":+ ele.value, title: title[i], color:colors[i]});
        i++;
      }

    }
    this.setState({data : array});
   // this.props.editStream(formsValue, this.props.stream.id);
 }
    render(){
      // this.setState({data : [
      //   {
      //     color: "#77dc14",
      //     title: "1",
      //     value: 61.76
      //   },
      //   {
      //     color: "#ffef09",
      //     title: "2",
      //     value: 17
      //   },
      //   {
      //     color: "#ffa200",
      //     title: "3",
      //     value: 21.25
      //   }
      // ] })
        return <div>

           <Form onSubmit={this.onSubmit}></Form>
           
           {this.state.data.length > 0 && <p>done</p>}
            {  this.state.data.length > 0  && <PieChart
                            animate={true}
                            animationDuration={500}
                            animationEasing="ease-out"
                            cx={50}
                            cy={50}
                            data={this.state.data}
                              label={({ data, dataIndex }) =>
                              console.log(data)
                            }


                            labelPosition={50}
                            labelStyle={{
                              fill: '#121212',
                              fontFamily: 'sans-serif',
                              fontSize: '5px'
                            }}
                            lengthAngle={360}
                            lineWidth={100}
                            onClick={undefined}
                            onMouseOut={undefined}
                            onMouseOver={undefined}
                            paddingAngle={0}
                            radius={50}
                            rounded={false}
                            style={{
                              height: '180px'
                            }}
                            startAngle={0}
                            viewBoxSize={[
                              100,
                              100
                            ]}
                          /> }
                         
        </div>
    }
}

export default PieChartDemonstration;