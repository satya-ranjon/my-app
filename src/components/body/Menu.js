import React,{ Component } from "react"
import DISHES from "../data/dishes"
import COMMENTS from "./comments"
import MenuItem from "./MenuItem"
import ManuDitiels from "./manuDitials"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Menu extends Component{
     state = {
          dishes:DISHES,
          Comments: COMMENTS,
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
          const menu = this.state.dishes.map(item =>{
               return(
                    <MenuItem dish={item} key={item.id} DisSelect={() => this.selectDisItem(item)} />
               )
          })

          let diteals = null;
          if(this.state.selectDis != null){
               const comments = this.state.comment.filter( comment => {
                    this.state.comment.dishId === this.state.selectDis.id;
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
                    <Modal isOpen={this.state.opnModel}  onClick={this.toggle}>
                    <ModalHeader>Modal title</ModalHeader>
                    <ModalBody>
                    {diteals}
                    </ModalBody>
                    <ModalFooter>
                         <Button color="secondary">Closd</Button>
                    </ModalFooter>
                    </Modal>

               </div>
          )
     }
}

export default Menu