import React, { useState } from 'react';

function Notice(props) {
    
  return (
    <>
   <div  class="alert alert-warning alert-dismissible fade show" role="alert"
   >
    {props.notice}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    </>

  )
}

export default Notice