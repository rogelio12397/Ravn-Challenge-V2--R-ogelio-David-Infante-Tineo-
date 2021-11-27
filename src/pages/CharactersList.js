import React from 'react';
import { usePeoples } from '../peoples/usePeoples';
import "./CharactersList.css";
import spinner from './spinner.svg';

<<<<<<< HEAD
const GET_CHARACTERS = gql`
 query {
  allPeople (first: 5) {
    totalCount
    people {
      name
      homeworld {
        name
      }
    }
  }
}
`
=======
>>>>>>> master

export default function CharactersList(){

    const {error,loading,data} = usePeoples();

    if(loading) return <div className="load"><img src={spinner} alt="img" height="35px"/> loading</div>
    if(error) return <div id="error" className="load">Failed to Load Data</div>
    // obj.error;
    // obj.loading;
    // obj.data;
   
<<<<<<< HEAD
=======
   
>>>>>>> master
    return (
        <div className="CharactersList">
         
        {data.allPeople.people.map((people) =>{
            return (
<<<<<<< HEAD
              <a id="enlace" href="#">
            <div className="data">
                <p id="name">{people.name}</p>
                <p id="planet">from {people.homeworld.name}</p>
              </div>                
              </a>            
            );
=======
              <a id="enlace" href="https:youtube.com">
            <div className="data">
                <p id="name">{people.name}</p>
                <p id="planet">from {people.homeworld.name}</p>
              </div>              
              </a> 
                         
            );            
>>>>>>> master
        })
        }

        </div>)
    
}