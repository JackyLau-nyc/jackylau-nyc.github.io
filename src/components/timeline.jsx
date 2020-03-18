import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Where I've been?</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at City Hall   <span>2019 - present</span></h2>
                        <p>I am currently an intern at City Hall for the Office of the Comptroller. My role as an application development intern involves learning how to develop APIs and internal web-based applications. I have developed a ticketing system API in C# that queries IT help requests for easy organization and retrieval.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Participation in the CUNY Tech Prep Program   <span>2019 - present</span></h2>
                        <p>I was selected for both a full stack Javascript training program and data analysis program, as one of 122 students out of 400+ applicants. We learned in-demand technologies such as React, Node.js, Express, and PostgreSQL as well as industry best practices for design, implementation, and deployment such as MVC, version control with Git/GitHub, Agile and Scrum with Slack, test driven development, and CI/CD.</p>
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
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                      <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Birth!   <span>1995</span></h2>
                        <p>Lucky to be alive and experience all the wonders and joys of the world!</p> 
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
