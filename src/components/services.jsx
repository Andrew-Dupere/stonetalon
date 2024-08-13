import React, { useState } from "react";

export const Services = (props) => {
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Simple modal component
  const Modal = () => (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',  // Adjust width as necessary
      height: '90%',  // Adjust height as necessary
      backgroundColor: 'white',
      padding: '20px',
      zIndex: 1000,
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'auto'  // Allows scrolling within the modal
    }}>
      <h2>More About Our Services</h2>
      <iframe src="pdf\SCP_services.pdf" style={{
        width: '100%',
        height: '75%'  // Adjust height as necessary
      }} frameBorder="0">
        Unable to view the PDF <a href="/path/to/Services-SCP.pdf">download here</a>.
      </iframe>
      <button onClick={toggleModal}>Close</button>
    </div>
  );

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((service, index) => (
                <div key={`${service.name}-${index}`} className="col-md-5" >
                  <i className={service.icon}></i>
                  <div className="service-desc services-text">
                    <h3>{service.name}</h3>
                    <p>{service.text}</p>
                    <ul>
                      {service.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>                    
                  </div>                  
                </div>
              ))
            : "Loading services..."}
          <button className="btn btn-custom btn-lg page-scroll" style={{ marginTop: '20px', fontWeight: 'bold', border: '1px solid white'}} onClick={toggleModal}>
            Learn More About Our Services
          </button>
        </div>
      </div>
      {showModal && <Modal />}
    </div>
  );
};
