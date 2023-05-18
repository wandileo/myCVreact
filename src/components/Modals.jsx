import React from 'react'

const Modals = () => {
  return (
    <div className="portfolio-modal modal fade" id="portfolioModal1" aria-labelledby="portfolioModal1"
        aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal"
                        aria-label="Close"></button></div>
                <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">HTML</h2>
                                <div className="divider-custom">
                                    <div className="divider-custom-line"></div>
                                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                    <div className="divider-custom-line"></div>
                                </div>
                                
                                <img className="img-fluid rounded mb-5"
                                    src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                                    alt="..." />
                                <p className="mb-4">The HyperText Markup Language, or HTML is the standard markup language
                                    for documents designed to be displayed in a web browser. It can be assisted by
                                    technologies such as Cascading Style Sheets (CSS) and scripting languages such as
                                    JavaScript. ... HTML elements are the building blocks of HTML pages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Modals