import React,{ Component } from "react"
import DISHES from "../data/dishes"
import MenuItem from "./MenuItem"
import ManuDitiels from "./manuDitials"


class Menu extends Component{
     state = {
          dishes:DISHES,
          selectDis: null
     }

     selectDisItem = Dies => {
          this.setState({ selectDis : Dies });
     }

     render(){
          const menu = this.state.dishes.map(item =>{
               return(
                    <MenuItem dish={item} key={item.id} DisSelect={() => this.selectDisItem(item)} />
               )
          })

          let diteals = null;
          if(this.state.selectDis!=null){
               diteals = <ManuDitiels dishItem={this.state.selectDis} />
          }


          return(
               <div className='container'>
                    <div className='row'>
                         <div className='col-md-6'>
                              <div className='Menu_box'>
                                   {menu}
                              </div>
                         </div>

                         <div className='col-md-6'>
                              {diteals}
                         </div>
                    </div>
               </div>
          )
     }
}

export default Menu