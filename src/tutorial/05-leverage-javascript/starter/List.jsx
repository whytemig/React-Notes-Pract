import { people } from '../../../data'
import Person from './Person'

import React from 'react'

const List = () => {
     return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
}

export default List