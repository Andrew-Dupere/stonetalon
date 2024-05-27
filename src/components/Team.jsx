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
          <p>
            Andrew Dupere is a software engineer with over a decade of professional experience in financial services, cybersecurity and consulting. He has an extremely broad technical skill set and has built web applications, automated trading systems, social media bots, web scraping tools, SQL databases and data analytics dashboards. Andrew leverages the full power of AI as well as Amazon Web Services to accelerate production and ensure quality of work. 
          </p>
          {/* <div className="list-style">
            <ul>
          <li>Web Development: HTML, CSS, JavaScript (React)</li>
          <li>Backend: Python (FastAPI, Flask, Selenium, BS4), MYSQL</li>
          <li>Data Analysis: SQL, Python (Pandas, Plotly, SQLAlchemy), PowerBI, Jupyter</li>
          <li>Cloud: Linux (Ubuntu), AWS (EC2, Amplify, Lambda, RDS)</li>
            </ul>
          </div> */}
        </div>

        {/* <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul> */}
      </>
    : "Loading..."
  }
        </div>
      </div>
    </div>
  );
};
