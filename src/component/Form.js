import React from 'react';

class Form extends React.Component {

    

     
    onSubmt = (event) => {
        debugger;
        event.preventDefault();
        this.props.onSubmit(event);
     }
     

    render() {
        
        return (<form class="container">
      <button className="btn  btn-primary"></button>
      </form>)
    }
}

 

export default Form;