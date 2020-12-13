import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Where I've Been</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Peloton Interactive   <span>06/20 - 08/20</span></h2>
                        <p>During my time at Peloton, I worked with business analysts to build pipelines that integrated data from different sources within an AWS server and structured the data for use in internal applications. I also fixed data discrepencies to ensure accurate business reporting and to streamline data for a rapidly growing business model. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at City Hall   <span>02/20 - 06/20</span></h2>
                        <p>I worked as an application developer intern for the Office of the Comptroller. My role as an intern involved learning how to develop APIs and internal web-based applications. I have developed a ticketing system API in C# that queries IT help requests for easy organization and retrieval.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Participation in the CUNY Tech Prep Program   <span>06/19 - 06/20</span></h2>
                        <p>I was selected for both a full stack Javascript training program and data analysis program, as one of 122 students out of 400+ applicants. We learned in-demand technologies such as React, Node.js, Express, and PostgreSQL as well as industry best practices for design, implementation, and deployment such as MVC, version control with Git/GitHub, Agile and Scrum with Slack, test driven development, and CI/CD. Learned how to work with data and machine learning algorithms from scikit-learn as well as how to visualize data using matplotlib and seaborn.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Secondary and Higher Education   <span>2009 - 2020</span></h2>
                        <p>Graduating from Brooklyn Technical High School majoring in mechanical engineering, I decided to expand my view from hardware to software. As a member of the robotics team, I bridged the gap and learned how to tinker with Arduinos and Raspberry Pis. In college, I spent my time diversifying my knowledge as well as chartering the Asian Students in Action (ASiA). As the president, I encouraged students to engage in political activism and opened their eyes to the stage of global politics.</p> 
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
