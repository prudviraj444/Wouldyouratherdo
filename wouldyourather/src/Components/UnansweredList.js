import React, { Component } from 'react';
import UnansweredComponent from './Reusables/UnansweredComponent';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


class UnansweredList extends Component {

  render() {
    return (
      <div>
        {

          arr.map((element) => <div><UnansweredComponent /></div>)


        }

      </div>
    )
  }


}

export default UnansweredList;