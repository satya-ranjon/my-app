import React from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle,CardSubtitle, Button } from 'reactstrap';



const MenuItem = props =>{
     return(
          <div className='menu_item'>
               <Card className='m-2'>
               <CardImg top width="100%" src={props.dish.image} onClick={props.DisSelect} alt={props.dish.name}></CardImg>
                    <CardBody>
                    <CardTitle tag="h5">{props.dish.name}</CardTitle>
                    </CardBody>
               </Card>
          </div>
     )
}


export default MenuItem