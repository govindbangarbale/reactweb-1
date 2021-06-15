import React from "react";

export default function ShareHolders() {
    return (
        <>
        

            <>
        <main className="d-flex min-vh-100">
          <div className="card bd-wizard-card">
            <div className="card-body">
              <div id="wizard" role="application" className="wizard clearfix">
                <div className="steps clearfix">
                  
                </div>
                <div className="content clearfix">
                  <h3 id="wizard-h-0" tabIndex={-1} className="title current">
                    <div className="media">
                      <div className="media-body">
                        <h5 className="bd-wizard-step-title">Application</h5>
                        <p className="bd-wizard-step-subtitle">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                        </p>
                      </div>
                      <div className="bd-wizard-step-icon">
                        <i className="mdi mdi-monitor-dashboard" />
                      </div>
                      <div className="media-body">
                        <h5 className="bd-wizard-step-title">Application</h5>
                        <p className="bd-wizard-step-subtitle">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                        </p>
                      </div>
                    </div>
                  </h3>
                  <section id="wizard-p-0" role="tabpanel" aria-labelledby="wizard-h-0" className="body current" aria-hidden="false">
                    <div className="msg_box">
                      <span> <strong>Note&nbsp;:&nbsp; </strong>Please fill in the details of all your directors and shareholders. For shareholders, all individuals who ultimately own over 19% of the company must be listed.
                      </span>
                    </div>
                    <div className="container-right">
                      <h4> <span className="dot" />Company's Directors: 
                        <br /><span className="title-note"> Please Add/Edit/Delete in list below.</span></h4>
                      <div className="colums">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Country of Residence</th>
                              <th>Date of Birth</th>
                              <th>Nationality</th>
                              <th>Passport Number</th>
                              <th>Passport Document</th>
                              <th>Authorized Signatory</th>
                              <th><strong><a>+ ADD</a></strong></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Director 1</td>
                              <td>ALBANIA</td>
                              <td>
                                10-Mar-2021
                              </td>
                              <td>ALBANIAN</td>
                              <td>4234234234</td>
                              <td><a className="open">Director Passport <i className="material-icons" style={{marginTop: '-30px', paddingBottom: '-20px'}}></i></a></td>
                              <td>Yes</td>
                              <td>
                                <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                                <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                              </td>
                            </tr>
                            <tr>
                              <td>Director 1</td>
                              <td>ALBANIA</td>
                              <td>
                                10-Mar-2021
                              </td>
                              <td>ALBANIAN</td>
                              <td>4234234234</td>
                              <td><a className="open">Director Passport <i className="material-icons" style={{marginTop: '-30px', paddingBottom: '-20px'}}></i></a></td>
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
                      <h4 className="h4-mr">
                        <span className="dot" />Company's Ultimate Beneficiary Owners/Shareholders:
                        <br /><span className="title-note"> Please Add/Edit/Delete in list below.</span>
                      </h4>
                      <div className="colums">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Country of Residence</th>
                              <th>Date of Birth</th>
                              <th>Nationality</th>
                              <th>Passport Number</th>
                              <th>Passport Document</th>
                              <th>Authorized Signatory</th>
                              <th><strong><a>+ ADD</a></strong></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Director 1</td>
                              <td>ALBANIA</td>
                              <td>
                                10-Mar-2021
                              </td>
                              <td>ALBANIAN</td>
                              <td>4234234234</td>
                              <td><a className="open">Director Passport <i className="material-icons" style={{marginTop: '-30px', paddingBottom: '-20px'}}></i></a></td>
                              <td>Yes</td>
                              <td>
                                <a className="add" title="Add" data-toggle="tooltip"><i className="material-icons"></i></a>
                                <a className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></a>
                                <a className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons"></i></a>
                              </td>
                            </tr>
                            <tr>
                              <td>Director 1</td>
                              <td>ALBANIA</td>
                              <td>
                                10-Mar-2021
                              </td>
                              <td>ALBANIAN</td>
                              <td>4234234234</td>
                              <td><a className="open">Director Passport <i className="material-icons" style={{marginTop: '-30px', paddingBottom: '-20px'}}></i></a></td>
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
