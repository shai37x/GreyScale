import React from "react";

const Home = () => {
  return (
    <div>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">Greyscale</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            "Capturing timeless moments with passion and artistry, where every frame tells a story, 
            every click preserves an emotion, and every memory is painted in light and shadow."
          </p>
          {/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
              Primary button
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Secondary
            </button>
          </div> */}
        </div>
        
        {/* Full-width image */}
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-12">
              <img
                src="/images/main.jpg"
                className="img-fluid w-100"
                style={{ height: "100%", objectFit: "cover", borderRadius: "10px" }}
                alt="Example"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Our Features</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          
          {/* Feature 1 */}
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img
                src="/images/icons/person-circle.svg"
                alt="person"
                style={{ height: "50px", borderRadius: "10px" }}
              />
            </div>
            <h3 className="fs-2 text-body-emphasis">Custom Selection</h3>
            <p>
              "Handpick your perfect photographer browse portfolios, compare styles, and select the 
              one who best. Your moments, your choice!"
            </p>
            <a href="#" className="icon-link">
              Call to action
              <img src="/images/icons/caret-right.svg" alt="arrow" />
            </a>
          </div>

          {/* Feature 2 */}
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img
                src="/images/icons/camera.svg"
                alt="camera"
                style={{ height: "50px" }}
              />
            </div>
            <h3 className="fs-2 text-body-emphasis">Skilled Editor</h3>
            <p>
              "Expertly crafted by Greyscale's skilled editors: bringing your moments to life with 
              precision, creativity, and perfection."
            </p>
            <a href="#" className="icon-link">
              Call to action
              <img src="/images/icons/caret-right.svg" alt="arrow" />
            </a>
          </div>

          {/* Feature 3 */}
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
              <img
                src="/images/icons/globe-central-south-asia.svg"
                alt="globe"
                style={{ height: "50px" }}
              />
            </div>
            <h3 className="fs-2 text-body-emphasis">Across State</h3>
            <p>
              "We are available across Kerala and the UAE, capturing your special moments with 
              passion and perfection wherever you need us."
            </p>
            <a href="#" className="icon-link">
              Call to action
              <img src="/images/icons/caret-right.svg" alt="arrow" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
