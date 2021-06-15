import React from "react";

export default function CompanyDocuments() {
    return (
        <>
        

            <>
            <>
  <main className="d-flex min-vh-100">
    <div className="card bd-wizard-card">
      <div className="card-body">
        <div id="wizard" role="application" className="wizard clearfix">
          <div className="steps clearfix">
            
          </div>
          <div className="content clearfix">
            <section id="wizard-p-0" role="tabpanel" aria-labelledby="wizard-h-0" className="body current" aria-hidden="false">
              <div className="container-right">
                <h4>
                  <span className="dot" />Company Related Documents:
                </h4>
                <div className="colums">
                  <div className="item">
                    <label htmlFor="lname"> Business Registration Document<span>*</span></label>
                    <input id="lname" type="text" placeholder="Please Enter" name="lname" required />
                  </div> <div className="item">
                    <label htmlFor="fname"> Proof of Company Address<span>*</span></label>
                    <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                  </div>
                  <div className="item">
                    <label htmlFor="fname"> Trade License<span>*</span></label>
                    <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                  </div>
                  <div className="item">
                    <label htmlFor="lname"> License Expiry Date<span>*</span></label>
                    <input id="lname" type="text" placeholder="Please Enter" name="lname" required />
                  </div> <div className="item">
                  </div>
                </div>
                <h4 className="h4-mr"> <span className="dot" />Confirmation Of Registered Director(s):</h4>
                <div className="colums">
                  <div className="item">
                    <label htmlFor="fname"> Document Type<span>*</span></label>
                    <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                  </div>
                  <div className="item">
                    <label htmlFor="lname"> Document Name<span>*</span></label>
                    <input id="lname" type="text" placeholder="Please Enter" name="lname" required />
                  </div> <div className="item">
                    <label htmlFor="fname"> Document<span>*</span></label>
                    <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                  </div>
                  <div className="item">
                  </div>
                </div>
                <h4 className="h4-mr"> <span className="dot" />Confirmation Of Registered Director(s):</h4>
                <div className="colums">
                  <div className="item">
                    <label htmlFor="fname"> Document Type<span>*</span></label>
                    <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                  </div>
                  <div className="item">
                    <label htmlFor="lname"> Document Name<span>*</span></label>
                    <input id="lname" type="text" placeholder="Please Enter" name="lname" required />
                  </div> <div className="item">
                    <label htmlFor="fname"> Document<span>*</span></label>
                    <input id="fname" type="text" name="fname" placeholder="Please Enter" required />
                  </div>
                  <div className="item">
                  </div>
                </div>
                <h4 className="h4-mr">
                  <span className="dot" />More Documents:
                  <br /><span className="title-note"> Please Add/Edit/Delete in list below.</span>
                </h4>
                <div className="colums">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Sr.No.</th>
                        <th>Document Name</th>
                        <th>Document</th>
                        <th>Remarks</th>
                        <th><strong><a>+ ADD</a></strong></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1</td>
                        <td>Electricity Bill</td>
                        <td><a className="open">Electricity Bill.pdf <i className="material-icons" style={{marginTop: '-30px', paddingBottom: '-20px'}}></i></a></td>
                        <td>Yes</td>
                        <td>
                          <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                          <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                          <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
    <button className="bd-wizard-btn-previous" data-step="previous">BACK</button>
    <button className="bd-wizard-btn" data-step="next">SAVE &amp; NEXT</button>
  </div>
</>

</>

      </>
      
    );
}

// function Steps() {
//     return (
//         <div>
//             <div></div>
//             <div></div>
//         </div>
//     );
// }
