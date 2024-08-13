import React, { useState } from "react";

export const Services = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const ServicesDetails = () => (
    <div className="services-details text-left">
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#ffffff',  textAlign: 'center' }}>Summit Consulting Partners</h1>
      
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#ffd700' }}>Consulting & Talent Acquisition</h2>
        <p style={{ marginBottom: '15px' }}>
          Summit Consulting Partners (SCP) assists clients in improving performance, supplementing and
          streamlining operations, reducing costs, complying with complex regulations, and stimulating
          growth. We team with our clients to deliver sustainable and measurable results on every
          engagement and we have a track record of successfully working with early stage, venture backed
          and growth stage businesses.
        </p>
      </section>

      <section style={{ marginBottom: '20px' }}>
        
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#ffd700' }}>Fractional/Interim C-Level Support</h3>
        <p style={{ marginBottom: '15px' }}>
          Our clients understand the benefits of additional executive leadership, but cannot always justify a
          full time C-Level position. Interim C-Level support is an excellent way for growing companies
          to gain access to the expertise of experienced leaders.
        </p>
        <p style={{ marginBottom: '10px' }}>SCP's C-Level executives have years of experience in the following disciplines:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px', fontSize: '16px' }}>
          <li>Finance & Accounting</li>
          <li>Human Capital</li>
          <li>Sales & Operations</li>
          <li>Communications</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#ffd700' }}>Budgeting, Forecasting & Analysis</h3>
        <p style={{ marginBottom: '15px' }}>
          SCP's budgeting and forecasting services put your current strengths and team to work for you to
          strategically achieve your goals. Our team of professionals will optimize your business's budget
          while preparing for future expenditures based on both predicted and unexpected circumstances.
        </p>
        <p style={{ marginBottom: '10px' }}>SCP's process includes the following key elements:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px', fontSize: '16px' }}>
          <li>Review current projected budgets and forecasts and restructure to ensure that most
              important business issues are being highlighted</li>
          <li>Ensure revenue and expense assumptions are accurate, reasonable and consistent</li>
          <li>Supply data and guidance on revenue forecasts by product line and market</li>
          <li>Provide guidance and data on expense assumptions</li>
          <li>Produce operational reports targeting identified areas for improvement and focus</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#ffd700' }}>Strategic Planning</h3>
        <p style={{ marginBottom: '10px' }}>SCP's strategic planning process includes the following key components:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px',fontSize: '16px' }}>
          <li>Consensus on Mission, Vision, Values</li>
          <li>Assessment of strengths and weaknesses, opportunities, and threats</li>
          <li>Identification of external trends, events, and factors</li>
          <li>Identification of strategic priorities</li>
          <li>Goals and objectives with measurable time-framed targets</li>
          <li>Implementation plan</li>
        </ul>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#ffd700' }}>Operational Services</h3>
        <p style={{ marginBottom: '10px' }}>SCP's operational services include:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '15px', fontSize: '16px' }}>
          <li>Business Strategy - we take a hands-on approach to determine the optimal course of
              action regardless of your objectives – from increasing sales and reducing costs, to
              improving customer retention rates and reducing overall error rates.</li>
          <li>Operating Model Development - We'll help you craft an operating model designed to
              eliminate redundancies, decrease time-to-market and improve overall efficiency.</li>
          <li>Process Review & Improvement – In order to improve a process, you need to know
              where to look for actionable information. We will help you collect and
              analyze meaningful data to determine the critical areas of your business that require
              attention.</li>
          <li>Business Process Mapping – A detailed business process map is a vital tool in
              increasing operational efficiency. We help businesses conceptualize and
              create process maps designed to increase operational efficiency.</li>
        </ul>
      </section>
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
                <div key={`${service.name}-${index}`} className="col-md-5">
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
        </div>
        <button
          className="btn btn-custom btn-lg page-scroll"
          style={{ marginTop: '20px', fontWeight: 'bold', border: '1px solid white' }}
          onClick={toggleDetails}
        >
          {showDetails ? 'Hide Details' : 'Learn More About Our Services'}
        </button>
        {showDetails && <ServicesDetails />}
      </div>
    </div>
  );
};