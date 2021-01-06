 
    import React, { Fragment } from 'react';

 
    
    import hero8 from 'assets/img/pexels-binyamin-mellish-106399.jpg';
    
    import { Button, UncontrolledTooltip, Badge } from 'reactstrap';
    
    const ImageSearch = () => {
      return (
        <Fragment>
          <div className="rm-padding-wrapper">
            <div className="hero-wrapper bg-composed-wrapper min-vh-100 bg-premium-dark pt-5">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                  className="bg-composed-wrapper--image bg-composed-filter-rm opacity-6"
                  style={{ backgroundImage: 'url(' + hero8 + ')' }}
                />
                <div className="bg-composed-wrapper--bg bg-vicious-stance opacity-5" />
                <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
                  <div className="container py-5">
                    <div className="row">
                      <div className="col-lg-8 px-0 mx-auto d-flex align-items-center">
                        <div className="text-center">
                          <Badge
                            pill
                            color="info"
                            className="px-4 text-uppercase h-auto py-1"
                            id="ProjVersion123">
                            FREE react UI Kit
                          </Badge>
                          <UncontrolledTooltip
                            placement="top"
                            target="ProjVersion123">
                            Version: 1.1.0
                          </UncontrolledTooltip>
    
                          <div className="px-4 px-sm-0 text-white mt-5">
                            <h1 className="display-2 mb-5 font-weight-bold">
                              Bamburgh React UI Kit with Reactstrap Free
                            </h1>
                            <p className="font-size-xl text-white-50 mb-3">
                              This React Ui Kit will bring you a beautiful and
                              custom Bootstrap style to use in your presentation
                              websites.
                            </p>
                            <p className="text-white font-size-lg">
                              Working on a smaller project and need a simple,
                              beautiful and easy to use Ui Kit? Search no more,
                              you&#39;ve found the perfect one.
                            </p>
                            <div className="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50"></div>
                            <div>
                              <Button
                                tag="a"
                                size="lg"
                                color="success"
                                className="btn-pill d-block d-sm-inline-block px-5 py-3 ml-0 mt-3 mt-sm-0 ml-sm-3"
                                href="https://uifort.com/template/bamburgh-react-ui-kit-reactstrap-free"
                                target="_blank"
                                title="Download Bamburgh React UI Kit with Reactstrap Free">
                                <span className="btn-wrapper--icon">
                               
                                </span>
                                <span className="btn-wrapper--label">
                                  Download now
                                </span>
                              </Button>
                              <Button
                                tag="a"
                                href="https://uifort.com/template/bamburgh-react-ui-kit-reactstrap-pro"
                                target="_blank"
                                size="lg"
                                color="first"
                                className="px-5 py-3 btn-pill d-block d-sm-inline-block ml-0 ml-sm-3 mt-3 mt-sm-0"
                                title="Learn more about Bamburgh React UI Kit Reactstrap PRO version">
                                <span className="btn-wrapper--icon">
                               
                                </span>
                                <span className="btn-wrapper--label">
                                  PRO Version
                                </span>
                              </Button>
                            </div>
                            <small className="d-block pt-4">
                              For a comprehensive list of components &amp;
                              commercial licenses, we recommend the PRO version.
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    };
    
    export default ImageSearch;
    