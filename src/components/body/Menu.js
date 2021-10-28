import React,{ Component } from "react"
import MenuItem from "./MenuItem"
import ManuDitiels from "./manuDitials"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {connect} from 'react-redux';

const mapStatetoProps = state =>{
     return{
          dishes: state.dishes,
          Comments: state.comments
     }
}


class Menu extends Component{
     state = {
          selectDis: null,
          opnModel:false
     }

     selectDisItem = Dies => {
          this.setState({
                selectDis : Dies,
                opnModel :!this.state.opnModel
               });
     }


     toggle = () =>{
          this.setState({
               opnModel :!this.state.opnModel
          })
     }

     render(){
          const menu = this.props.dishes.map(item =>{
               return(
                    <MenuItem dish={item} key={item.id} DisSelect={() => this.selectDisItem(item)} />
               )
          })

          let diteals = null;
          if(this.state.selectDis != null){

               const comments = this.props.Comments.filter( comment => {
                  return  comment.dishId === this.state.selectDis.id;
               })
               diteals = <ManuDitiels
               dishItem={this.state.selectDis}
               comments={comments}
               />
          }


          return(
               <div className='container'>
                    <div className='row'>
                              <div className='Menu_box'>
                                   {menu}
                              </div>

                    </div>
                    <Modal isOpen={this.state.opnModel}  >
                    <ModalHeader>Modal title</ModalHeader>
                    <ModalBody >
                    {diteals}
                    </ModalBody>
                    <ModalFooter>
                         <Button onClick={this.toggle} color="secondary">Closd</Button>
                    </ModalFooter>
                    </Modal>

               </div>
          )
     }
}

export default connect(mapStatetoProps)(Menu);