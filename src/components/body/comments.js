import React from 'react';
import Dateformat from 'dateformat';


const Comments = props =>{
     return(
          props.Comments.map(comment => {
               return(
                         <div key={comment.id}>
                              <h3>{comment.author}</h3>
                                   <span>{comment.comment}</span><br/>
                                   <span>{Dateformat(comment.date,'d/m/yyyy : h:m:s TT ')}</span>
                         </div>
               )
          })
     );
}

export default Comments