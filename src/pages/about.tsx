import React from 'react'

type Props = {}

const about = (props: Props) => {
    return (
        <><div>
  <div className="breadcrumbs_area other_bread">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="breadcrumb_content">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li>/</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*breadcrumbs area end*/}
  {/*about section area */}
  <div className="about_section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="about_content">
            <h1>Welcome To Reid Store!</h1>
            <p> Quibusdam perspiciatis pariatur magnam ducimus excepturi error libero provident animi laboriosam maiores ad explicabo ea laudantium nostrum dolor distinctio, quas fugiat doloribus, sit, possimus obcaecati ab quo vel commodi eum. Laudantium libero, voluptate rerum sunt hic,</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse numquam blanditiis quos, fuga, aspernatur doloribus expedita, soluta dolore cumque.</p>
            <div className="view__work">
              <a href="#">view work </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="about_thumb">
            <img src="src/img/about/about1.jpg"  />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*about section end*/}
  {/*counterup area */}
  <div className="counterup_section">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single_counterup">
            <div className="counter_img">
              <img src="src/img/about/count.png"  />
            </div>
            <div className="counter_info">
              <h2 className="counter_number">2170</h2>
              <p>happy customers</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single_counterup count-two">
            <div className="counter_img">
              <img src="src/img/about/count2.png"  />
            </div>
            <div className="counter_info">
              <h2 className="counter_number">8080</h2>
              <p>AWARDS won</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single_counterup">
            <div className="counter_img">
              <img src="src/img/about/count3.png"  />
            </div>
            <div className="counter_info">
              <h2 className="counter_number">2150</h2>
              <p>HOURS WORKED</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single_counterup count-two">
            <div className="counter_img">
              <img src="src/img/about/count4.png"  />
            </div>
            <div className="counter_info">
              <h2 className="counter_number">2170</h2>
              <p>COMPLETE PROJECTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*counterup end*/}
  {/*about progress bar */}
  <div className="about_progressbar">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">
          <div className="progressbar_inner">
            <h2>We have Skills to show</h2>
            <div className="progress_skill one">
              <div className="progress">
                <div className="progress-bar about_prog wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".3s" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                  <span className="progress_persent">html/css</span>
                </div>
              </div>
              <span className="progress_discount">60%</span>
            </div>
            <div className="progress_skill two">
              <div className="progress">
                <div className="progress-bar about_prog wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".5s" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                  <span className="progress_persent">ecommerce theme </span>
                </div>
              </div>
              <span className="progress_discount">90%</span>
            </div>
            <div className="progress_skill three">
              <div className="progress">
                <div className="progress-bar about_prog wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".7s" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                  <span className="progress_persent">Typhography </span>
                </div>
              </div>
              <span className="progress_discount">70%</span>
            </div>
            <div className="progress_skill four">
              <div className="progress">
                <div className="progress-bar about_prog wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".7s" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                  <span className="progress_persent">Branding</span>
                </div>
              </div>
              <span className="progress_discount">80%</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="about__img">
            <img src="src/img/about/about2.jpg"  />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default about