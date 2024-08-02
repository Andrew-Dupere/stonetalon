import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Leadership</h2>
        </div>
        <div id="row" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-start', width: '100%', flexWrap: 'wrap' }}>
          {props.data
            ? <>
                <div style={{ width: '30%' }} >
                  <img src="img/thumbnail_Bio Photo - W Kea.jpg" alt="Bill Kea" style={{ width: '100%', height: 'auto' }} />
                  <h3>Bill Kea</h3>
                  <p>
                    Bill is a professional services executive with 20 years of operational experience leading the financial and human resources functions at venture backed and growth stage companies in healthcare, technology and manufacturing. He has more than 10 years of experience providing consultants, talent acquisition and fractional services. Bill has an extensive background in fund raising, management, business leadership, and operational effectiveness.

                  </p> 
                  <p>

                    Prior to founding Summit, Bill was Partner and Practice Leader for a Boston based professional services firm where he led engagements in talent acquisition, planning, budgeting, modeling, establishment of best practices, policies, management controls, and transaction support. Bill holds a Bachelor of Science degree in Finance from Boston College and an MBA from Babson.
                   
                  </p>
                </div>
                <div style={{ width: '30%' }} >
                  <img src="img/leadership_two.jpg" alt="Jessica Durkin" style={{ width: '100%', height: 'auto' }} />
                  <h3>Jessica Durkin</h3>
                  <p>
                    With more than 25 years of Finance, human capital, search, and executive placement experience, Jessica has successfully worked on and managed numerous engagements to build client companies. Jessica is a proven leader, creative problem solver, and trusted value added strategic partner to SCP's clients. Jessica has extensive experience in professionally managing sensitive, confidential and urgent assignments and holds a BA degree in Economics and a BA in German Language Studies from The University of Vermont.
                  </p>
                </div>
              </>
            : "Loading..."
          }
        </div>
      </div>
    </div>
  );
};


