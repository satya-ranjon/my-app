import React, { Component } from "react";
import {connect} from 'react-redux';

class CommentsForm extends Component{
     constructor(props){
          super(props)
          this.state = {
               author : '',
               rating: '',
               comment:''
          }
          this.submitHandle = this.submitHandle.bind(this);
          this.inputChangeHandaler = this.inputChangeHandaler.bind(this);
     }

     inputChangeHandaler= event =>{
          const name = event.target.name
          const value = event.target.value
          this.setState({
               [name]:value
          })
     }
     submitHandle = event =>{
          console.log(this.state)
          event.preventDefault();
          this.setState({ 
               author : '',
               rating: '',
               comment:''
          });
     }

     render(){
          return(
               <div>
                    <Form onSubmit={this.submitHandle}>
                         <Input
                              type='text'
                              className='m-2'
                              name='author'
                              value={this.state.author}
                              placeholder='Your name'
                              required
                              onChange={ this.inputChangeHandaler}
                         />
                         <Input
                              className='m-2'
                              type='select'
                              name='rating'
                              value={this.state.rating}
                              onChange={ this.inputChangeHandaler}
                              >
                              <option value="">Select</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                         </Input>

                         <Input 
                              className='m-2'
                              type='textarea'
                              name='comment'
                              value={this.state.comment}
                              placeholder='Your Comments'
                              required
                              onChange={ this.inputChangeHandaler}
                          />
                          <Button outline  color='primary' className='m-2' type='submit'>Comment</Button>
                         
                    </Form>
               </div>
          )
     }
}

export default (CommentsForm);