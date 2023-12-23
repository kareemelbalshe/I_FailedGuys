import "./about.css"
function About() {
  return <div>
    <section className=" contact_landing overflow-hidden">
      <div className="container h-100 overflow-hidden">
        <div className="row h-100 justify-content-center justify-content-md-between">
          <div className="col-12   col-md-5  align-self-center p-2 text-justify">
            <p className="fs-3 fw-bold">
              Stay in touch with us
            </p>
            <div className="line my-3"></div>
            <p>
              'Abo Mera & Elbalshy & Aboelmagd Allah Contracting Company' is a leading company in the field of construction, contracting, and maintenance, with its headquarters in the Kingdom of Saudi Arabia. The company was established on May 28, 1431 AH and has achieved numerous remarkable successes in the construction industry, as well as in management and support services, transportation, and storage sectors. Thanks to these accomplishments, Ghulam Hassan Baid Allah Contracting Company ranks among the top companies in its field.
            </p>

          </div>
          <div className="col-12  col-md-4 align-self-md-end text-center mb-md-3">
            <div className="d-flex flex-column">
              <img src="https://ghulam.najezsoft.com/public/web/images/logo_white.png " alt="logo" title="logo" className="logo d-none d-md-block"/>
                <img src="https://ghulam.najezsoft.com/public/web/images/logo_black.png " alt="logo" title="logo" className="logo d-block d-md-none "/>
                  <p className="fs-4 fw-bold"> Company</p>
                  <p>For general contracting</p>
                </div>
            </div>
          </div>
        </div>
    </section>
    <section className="info-sec py-5 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 box1 aos-init aos-animate" data-aos="fade-right">
            <div className="contant-icon">

              <img src="https://ghulam.najezsoft.com/public/web/images/groub1.png " alt=""/>
            </div>
            <div className="d-flex gap-2">
              <div className="content-icon1">

                <i className="fa-solid fa-location-arrow "></i>
              </div>
              <p className="p-descr">
                We aim to be a leading company in the construction sector in Saudi Arabia, maintaining our position as a market leader. We strive to execute innovative projects and high-quality designs that contribute to positive developmental advancements in society. Our goal is to expand into regional markets. We carry a vision that extends beyond the present towards the future, aiming to achieve our objectives over time through well-thought-out plans, all for the well-being of everyone, by the help of God.
              </p>
            </div>

          </div>
          <div className="col-sm-12 col-md-6 box2 aos-init aos-animate" data-aos="fade-left">
            <div className="contant-icon">

              <img src="https://ghulam.najezsoft.com/public/web/images/groub2.png " alt=""/>
            </div>
            <div className="d-flex gap-2">
              <div className="content-icon1">
                <i className="fa-solid fa-location-arrow "></i>

              </div>
              <p className="p-descr">
                We aim to exceed customer expectations by providing them with exceptional services, distinctive products of high quality and added value. We strive for the company to remain a leader in all its activities by executing projects and delivering them with the highest standards of quality, efficiency, and cost-effectiveness.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>

}
export default About;
