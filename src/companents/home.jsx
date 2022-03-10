import React from "react"
import { Link } from "react-router-dom"


export default function MyHome(){

    return (
        <>
            <div className="  position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 elon p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-normal">Do you want to place your ad</h1>
                <p className="lead fw-normal">If you want to advertise your product on this page, contact admin now.</p>
                <Link to="/login" className="btn btn-outline-secondary" >Advertising placement</Link>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
              <div className="container">
                <div className="row mt-5 ">
                  <div className="col-md-4 " data-aos="flip-up" data-aos-duration="950">
                    <div className="card">
                      <div className="card-header d-flex justify-content-center ">
                        <div className="overlay">
                          <h4>MERN Stack</h4>
                          <p>Mongo-DB ExpressJs ReactJs NodeJs</p>
                        </div>
                        <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/145060451/original/faa00a6c4e32b667c60827e8afd66e76f0f69a77/build-your-full-stack-application-for-you.jpg" alt="Portfolio img"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" data-aos="zoom-in" data-aos-duration="950">
                    <div className="card">
                      <div className="card-header d-flex justify-content-center">
                        <div className="overlay">
                          <h4>Mongo DB</h4>
                          <p>Bg and Free Data Base</p>
                        </div>
                        <img src="https://yt3.ggpht.com/ytc/AKedOLR1ULhkE1KlBnOZi9RLmi2y0zskVvjom1YWwA8S=s900-c-k-c0x00ffffff-no-rj" alt="Portfolio img"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" data-aos="flip-down" data-aos-duration="950">
                    <div className="card">
                      <div className="card-header d-flex justify-content-center">
                        <div className="overlay">
                          <h4>ExpressJS</h4>
                          <p>For Back-End Free Library</p>
                        </div>
                        <img src="https://avatars.mds.yandex.net/i?id=0749b10c5fb44010e9b7c04fac397a23-5910048-images-thumbs&n=13" alt="Portfolio img"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-4" data-aos="flip-down" data-aos-duration="950">
                    <div className="card">
                      <div className="card-header d-flex justify-content-center">
                        <div className="overlay">
                          <h4>ReactJS</h4>
                          <p>ReactJs The web creates great software</p>
                        </div>
                        <img src="https://avatars.mds.yandex.net/i?id=33c413e451627d30c268003771d59a04-5235821-images-thumbs&n=13" alt="Portfolio img"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" data-aos="zoom-in" data-aos-duration="950">
                    <div className="card">
                      <div className="card-header d-flex justify-content-center">
                        <div className="overlay">
                          <h4>Node JS</h4>
                          <p>It forms the basis of your web page</p>
                        </div>
                        <img src="https://www.crmdevelopmentcompany.com/wp-content/uploads/2020/09/Node_logo_NodeJS0-1-800x643.png" alt="Portfolio img"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4" data-aos="flip-up" data-aos-duration="950">
                    <div className="card">
                      <div className="card-header d-flex justify-content-center">
                        <div className="overlay">
                          <h4>NextJs</h4>
                          <p>FrameWork Node JS</p>
                        </div>
                        <img src="https://react-etc.net/files/2017-08/next-js-30.png" alt="Portfolio img"/>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

            
        </>
    )
}