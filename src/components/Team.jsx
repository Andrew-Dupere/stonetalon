import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
        </div>
        <div id="row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          {props.data
            ? <>
                <div style={{ width: '40%' }} >
                  <img src="img/IMG_1954a4x6.jpg" alt="Descriptive Alt Text" style={{ width: '50%', height: 'auto' }} />
                </div>
                <div style={{ width: '60%' }} >
                  
                  <h1>Andrew Dupere</h1>
                  
                  <p>
                    Andrew is a software engineer with over a decade of professional experience in financial services, cybersecurity, and consulting. He has an extremely broad technical skill set and has built web applications, automated trading systems, social media bots, web scraping tools, SQL databases, and data analytics dashboards. Andrew leverages the full power of AI as well as Amazon Web Services to accelerate production and ensure quality of work. 
                  </p>
                  
                {/* Tech Stack Badges */}
                <div style={{ width: '100%', marginTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
    <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Linux-FCC624?style=flat-square&logo=linux&logoColor=black" alt="Linux" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://en.wikipedia.org/wiki/Command-line_interface" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-CLI-4EAA25?style=flat-square&logo=windows-terminal&logoColor=white" alt="CLI" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://openai.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Open%20AI-FF6600?style=flat-square&logo=openai&logoColor=white" alt="Open AI" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://yaml.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-YAML-000000?style=flat-square&logo=yaml&logoColor=white" alt="YAML" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-HTML%2FCSS-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML/CSS" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-SQL-4479A1?style=flat-square&logo=sql&logoColor=white" alt="SQL" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://docs.microsoft.com/en-us/windows/wsl/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-WSL-0078D6?style=flat-square&logo=windows&logoColor=white" alt="WSL" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-BS4-00A98F?style=flat-square&logo=beautiful-soup&logoColor=white" alt="BS4" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://www.selenium.dev/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Selenium-43B02A?style=flat-square&logo=selenium&logoColor=white" alt="Selenium" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Pandas-150458?style=flat-square&logo=pandas&logoColor=white" alt="Pandas" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Jupyter_Notebook-F37626?style=flat-square&logo=jupyter&logoColor=white" alt="Jupyter Notebook" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white" alt="AWS" style={{ height: '25px', width: 'auto' }} /></a>
    <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-AWS%20Amplify-FF9900?style=flat-square&logo=aws-amplify&logoColor=white" alt="AWS Amplify" style={{ height: '25px', width: 'auto' }} /></a>
    
</div>
                </div>
              </>
            : "Loading..."
          }
        </div>
      </div>
    </div>
  );
};

