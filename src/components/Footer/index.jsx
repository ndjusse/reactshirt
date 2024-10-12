import React from 'react'
import logonnn from '../../LOGO/logonnn.jpg'

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center  border-top sticky-bottom">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <img src={logonnn} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary ">NDJUSSE N.N</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><i className="fa-brands fa-square-instagram"></i></li>
        <li className="ms-3"><i className="fa-brands fa-whatsapp"></i></li>
        <li className="ms-3"><i className="fa-brands fa-facebook"></i></li>
      </ul>
    </footer>
  )
}

export default Footer