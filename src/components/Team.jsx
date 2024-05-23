import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div id="row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
  {props.data
    ? <>
        <div style={{ width: '50%' }}>
          {/* Adjust the image width to 75% of its container to make it 25% smaller */}
          <img src="img/IMG_1954a6x6.jpg" alt="Descriptive Alt Text" style={{ width: '50%', height: 'auto' }} />
        </div>
        <div style={{ width: '50%' }}>
          <h1>Andrew Dupere</h1>
          <p>Expert data engineering and automation expert</p>
        </div>
      </>
    : "Loading..."
  }
        </div>
      </div>
    </div>
  );
};
