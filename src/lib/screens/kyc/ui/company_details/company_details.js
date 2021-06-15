import React from "react";

export default function CompanyDetails() {
    return (
        <>
        

        <main className="d-flex min-vh-100">
          <div className="card bd-wizard-card">
            <div className="card-body">
              <div id="wizard" role="application" className="wizard clearfix">
                <div className="steps clearfix">
                  {/* <ul role="tablist">
                    <li role="tab" className="first current" aria-disabled="false" aria-selected="true">
                      <a id="wizard-t-0" href=" " aria-controls="wizard-p-0">
                        <span className="current-info audible">current step: </span>
                        <div className="media">
                          <div className="media-body">
                            <h5 className="bd-wizard-step-title">
                              Company<br />
                              Details
                            </h5>
                          </div>
                          <div className="bd-wizard-step-icon">
                            <img className="step-icon" src="img/selected24px.png" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li role="tab" className="disabled" aria-disabled="true">
                      <a id="wizard-t-1" href=" " aria-controls="wizard-p-1">
                        <div className="media">
                          <div className="media-body">
                            <h5 className="bd-wizard-step-title">
                              Shareholder<br />
                              Details
                            </h5>
                          </div>
                          <div className="bd-wizard-step-icon">
                            <img className="step-icon" src="img/baseline-line_style-24px.png" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li role="tab" className="disabled" aria-disabled="true">
                      <a id="wizard-t-2" href=" " aria-controls="wizard-p-2">
                        <div className="media">
                          <div className="media-body">
                            <h5 className="bd-wizard-step-title">
                              Company<br />
                              Document
                            </h5>
                          </div>
                          <div className="bd-wizard-step-icon">
                            <img className="step-icon" src="img/baseline-line_style-24px.png" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li role="tab" className="disabled last" aria-disabled="true">
                      <a id="wizard-t-3" href=" " aria-controls="wizard-p-3">
                        <div className="media">
                          <div className="media-body">
                            <h5 className="bd-wizard-step-title">Declaration</h5>
                          </div>
                          <div className="bd-wizard-step-icon">
                            <img className="step-icon" src="img/baseline-line_style-24px.png" />
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                 */}
                </div>
                <div className="content clearfix">
                  <section id="wizard-p-0" role="tabpanel" aria-labelledby="wizard-h-0" className="body current" aria-hidden="false">
                    <div className="container-right">
                      <h4> <span className="dot" />Company Information:</h4>
                      <div className="colums">
                        <div className="item">
                          <div className="upload-logo">
                            <img src="img/UPLOAD.png" style={{width: 100}} />
                          </div>
                          <div className="upload-text">
                            <button className="sm-wizard-btn">Upload Logo</button>
                            <label className="card-text" style={{width: 100}}>
                              Max.size: 150px X 80px / 5mb
                            </label>
                          </div>
                        </div>
                        <div className="item">
                          <label htmlFor="lname"> Company Name<span>*</span></label>
                          <input id="lname" type="text" placeholder="Please Enter" name="lname" required />
                        </div> <div className="item">
                          <label htmlFor="fname">Entity Type<span>*</span></label>
                          <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                        </div>
                        <div className="item">
                          <label htmlFor="fname"> Website<span>*</span></label>
                          <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                        </div>
                        <div className="item">
                          <label htmlFor="lname"> Business Registration Number<span>*</span></label>
                          <input id="lname" type="text" placeholder="Please Enter" name="lname" required />
                        </div>
                        <div className="item">
                        </div> <div className="item">
                        </div>
                      </div>
                      <h4 className="h4-mr"> <span className="dot" />Company Operations:</h4>
                      <div className="colums">
                        <div className="item">
                          <label htmlFor="fname"> Country of Incorporation<span>*</span></label>
                          <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                        </div>
                        <div className="item">
                          <label htmlFor="lname"> Date of Incorporation<span>*</span></label>
                          <input id="lname" type="text" placeholder="Please Enter" name="lname" required />
                        </div> <div className="item">
                          <label htmlFor="fname"> Country of Operations<span>*</span></label>
                          <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                        </div>
                        <div className="item">
                          <label htmlFor="fname"> Industry<span>*</span></label>
                          <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                        </div>
                        <div className="item">
                          <label htmlFor="lname"> Billing Contact Name<span>*</span></label>
                          <input id="lname" type="text" placeholder="Please Enter" name="lname" required />
                        </div> <div className="item">
                        </div>
                        <div className="item">
                        </div> <div className="item">
                        </div>
                      </div>
                      <h4 className="h4-mr"> <span className="dot" />Does this entity, its associate entities and/or its suppliers deal with sanctioned countries?</h4>
                      <div className="colums">
                        <div className="item">
                          <label htmlFor="fname"> Select<span>*</span></label>
                          <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                        </div>
                        <div className="item">
                        </div> <div className="item">
                        </div>
                        <div className="item" />
                        <div className="item"> </div> <div className="item">
                        </div>
                        <div className="item">
                        </div> <div className="item">
                        </div>
                      </div>
                      <h4 className="h4-mr">  <span className="dot" />Address:</h4>
                      <div className="colums_s" style={{width: '23%'}}>
                        <div className="item">
                          <label htmlFor="fname"> Address<span>*</span></label>
                          <input id="fname" type="text" name="fname" placeholder=" " style={{height: 90}} required />
                        </div>
                      </div>
                      <div className="colums colums_L" style={{marginLeft: '26%'}}>
                        <div className="item">
                          <label htmlFor="lname"> City<span>*</span></label>
                          <input id="lname" type="text" placeholder="Please Enter" name="lname" required />
                        </div> <div className="item">
                          <label htmlFor="fname"> State<span>*</span></label>
                          <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                        </div>
                        <div className="item">
                          <label htmlFor="fname"> Country<span>*</span></label>
                          <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                        </div>
                        <div className="item">
                          <label htmlFor="lname"> Zipcode<span>*</span></label>
                          <input id="lname" type="text" placeholder="Please Enter" name="lname" required />
                        </div> <div className="item">
                        </div>
                        <div className="item">
                        </div> <div className="item">
                        </div>
                      </div>
                      <h4> <span className="dot" />Company Admin:</h4>
                      <div className="colums">
                        <div className="item">
                          <label htmlFor="fname"> Company Admin. Contact Name *<span>*</span></label>
                          <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                        </div>
                        <div className="item">
                          <label htmlFor="lname"> Company Admin. Email Address<span>*</span></label>
                          <input id="lname" type="text" placeholder="Please Enter" name="lname" required />
                        </div>
                        <div className="item">
                          <label htmlFor="lname"> Company Admin. Contact Number<span>*</span></label>
                          <input id="lname" type="text" placeholder="Please Enter" name="lname" required />
                        </div>
                        <div className="item">
                        </div>
                      </div>
                    </div>
                  </section>
                  <h3 id="wizard-h-1" tabIndex={-1} className="title">
                    <div className="media">
                      <div className="bd-wizard-step-icon">
                        <i className="mdi mdi-briefcase" />
                      </div>
                      <div className="media-body">
                      </div>
                    </div>
                  </h3>
                  <section id="wizard-p-1" role="tabpanel" aria-labelledby="wizard-h-1" className="body" aria-hidden="true" style={{display: 'none'}}>
                    <div className="brand-wrapper">
                      <img src="./BootstrapDash Wizard_files/logo.svg" alt="logo" className="logo" />
                    </div>
                    <h5 className="section-heading">Enter business details</h5>
                    <div className="form-group">
                      <label htmlFor="companyName" className="sr-only">Company Name</label>
                      <input type="text" name="companyName" id="companyName" className="form-control" placeholder="Company Name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input type="email" name="email" id="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>
                      <input type="tele" name="phoneNumber" id="phoneNumber" className="form-control" placeholder="Phone Number" />
                    </div>
                    <div style={{display: 'flex', alignContent: 'flex-end', bottom: 0, right: 0}}>
                      <button className="bd-wizard-btn mr-3" data-step="previous">Previous</button>
                      <button className="bd-wizard-btn" data-step="next">Next</button>
                    </div>
                  </section>
                  <h3 id="wizard-h-2" tabIndex={-1} className="title">
                    <div className="media">
                      <div className="bd-wizard-step-icon">
                        <i className="mdi mdi-comment-question" />
                      </div>
                      <div className="media-body">
                        <h5 className="bd-wizard-step-title">Review</h5>
                        <p className="bd-wizard-step-subtitle">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                        </p>
                      </div>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          </div></main>
        <div className="bottom-bar">
          <button className="bd-wizard-btn-previous fl" data-step="previous">BACK</button>
          <button className="bd-wizard-btn fl" data-step="next">SAVE &amp; NEXT</button>
        </div>
      </>
      
    );
}
