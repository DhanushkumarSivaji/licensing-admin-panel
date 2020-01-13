import React from 'react'

 const FloatingActionButton = () => {
    return (
        <div>
            <div className="fixed-action-btn">
    <a className="btn-floating btn-large red">
      <i className="material-icons">add</i>
    </a>
    <ul>
      <li>
        <a href="#post-modal" className="modal-trigger btn-floating blue">
          <i className="material-icons">mode_edit</i>
        </a>
      </li>
      <li>
        <a href="#category-modal" className="modal-trigger btn-floating blue">
          <i className="material-icons">folder</i>
        </a>
      </li>
      <li>
        <a href="#user-modal" className="modal-trigger btn-floating blue">
          <i className="material-icons">supervisor_account</i>
        </a>
      </li>
    </ul>
  </div>  
        </div>
    )
}

export default FloatingActionButton;