import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStatetoProps = state =>{
     // console.log(state)
     return{
          dishes:state.dishes,
          Comment:state.comments,
          new:state.new
     }
}


class home extends Component {

     componentDidMount(){
          this.props.dispatch({
               type : 'TEST',
               new:'khokon'
          })
          console.log('home props', this.props)
          // console.log('Home state: ',this.state)
     }

     componentDidUpdate(){
          console.log('home props ubdect', this.props)
     }

     render(){
          document.title='Home'
          return(
               <div>
                    <h1>Home page</h1>
               </div>
          )
     }
}

export default connect(mapStatetoProps)(home);