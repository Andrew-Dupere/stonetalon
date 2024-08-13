import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          {/* Optional description can be uncommented here
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
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
          <a href="#about" className="btn btn-custom btn-lg page-scroll" style={{ marginTop: '20px', fontWeight: 'bold', border: '1px solid white'}} >Learn More About Our Services</a>
        </div>
      </div>
    </div>
  );
};
