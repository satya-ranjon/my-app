import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardImg, CardText, CardBody,CardTitle,CardSubtitle, Button } from 'reactstrap';



const MenuItem = props =>{
     return(
          <div className='menu_item'>
               <Card className='m-2'>
               <CardImg top width="100%" src={props.dish.image} onClick={props.DisSelect} alt={props.dish.name}></CardImg>
                    <CardBody>
                    <CardTitle tag="h5">
                    <Link to='/home' onClick={props.DisSelect}>
                    {props.dish.name}
                    </Link>
                    </CardTitle>
                    </CardBody>
               </Card>
          </div>
     )
}


export default MenuItem