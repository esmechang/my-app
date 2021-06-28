import React, { Component } from 'react';


function Member({picture}) {
    return (
      <div className="Member">
          <img src={picture} alt='bts member' />
      </div>
    );
  }
  
  export default Member;