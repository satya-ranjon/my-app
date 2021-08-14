import React from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle,CardSubtitle, Button } from 'reactstrap';
import Comments from './comments';

const ManuDitiels = props =>{
     return(
          <div className='navManage'>
               <div className='manu_ditels' >
                    <Card className='m-2'>
                    <CardImg top width="100%" src={props.dishItem.image} alt={props.dishItem.name} />
                    <CardBody>
                         <CardTitle tag="h5">{props.dishItem.name}</CardTitle>
                         <CardSubtitle tag="h6" className="mb-2 text-muted">Price: ${props.dishItem.price}</CardSubtitle>
                         <CardText>{props.dishItem.description}</CardText>
                         <h1>Comments All : </h1>
                         <Comments  Comments={props.comments}   />
                    </CardBody>
                    </Card>
                    
               </div>
          </div>
     )
}

export default ManuDitiels