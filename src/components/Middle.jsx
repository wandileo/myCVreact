import React from 'react'

const Middle = () => {
  return (
    <div className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
            <img className="rounded-circle" src="https://avatars.githubusercontent.com/u/57521204?v=4" alt="..."
                width="20%" />
          
            {/* <br> */}
            <h1 className="masthead-heading text-uppercase mb-0">Wandile Maluleke</h1>
            
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            
            <p className="masthead-subheading font-weight-light mb-0">Software Developer - UI/UX Designer </p>
        </div>
    </div>
  )
}

export default Middle