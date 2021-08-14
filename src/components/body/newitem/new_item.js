import React, { Component } from 'react';
import { Button, FormGroup, Input,Label ,FormFeedback, FormText} from 'reactstrap';


class new_item extends Component{
     constructor(props){
          super(props)
          this.state={
               itemName:'',
               price:''
          }
          this.handelInputChange = this.handelInputChange.bind(this),
          this.handelSubmit = this.handelSubmit.bind(this)
          
     }

     handelInputChange = event =>{
          const name = event.target.name
          const value = event.target.value
          this.setState({
               [name]:value
          })
          
     }

     handelSubmit = event =>{
          console.log(this.state)
          event.preventDefault();
     }

     render(){
          return(
               <div>
                     <div className='container'>
                         <form onSubmit={this.handelSubmit}>
                              <FormGroup>
                              <Label>Item Name</Label>
                              <Input name='itemName' type='text' value={this.state.itemName} onChange={this.handelInputChange} />
                              </FormGroup>
                              <FormGroup>
                              <Label>Price</Label>
                              <Input valid name='price' type='text' value={this.state.price} onChange={this.handelInputChange} />
                              </FormGroup>
                              <br/>
                              <Button type='submit' name='submit' value='submit'>Submit</Button>

                         </form>
                    </div>
               </div>
          );
     }

}

export default new_item