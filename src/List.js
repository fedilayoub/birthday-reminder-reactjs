import React , {useState} from 'react';

const List = ({friends}) => {

    return (
        <div>
           
           {friends.map(friend =>{
               const {id,name,age,image} = friend;
               return (
                   <article key={id}  className="wrapper">
                   <img src={image} alt="friend image"></img>
                   <div>
                       <h4>{name}</h4>
                       <p>{age} years old</p>
                   </div>
               </article>
               
           );
           } )}
            
        </div>
    )
}

export default List;
