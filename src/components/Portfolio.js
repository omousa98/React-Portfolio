import React from 'react';

export default function Portfolio({ resumeData }) {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {resumeData.portfolio &&
              resumeData.portfolio.map((item) => {
                return (
                  <div key={item.gitURL} className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href={item.gitURL} target="_blank" rel="noopener noreferrer">
                        <img src={`${item.img}`} className="item-img" alt="portfolio" />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
