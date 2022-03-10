import { Link } from "react-router-dom";

export default function About(){

    return(
        <>
        <div className="container-fluit">
            <div className="row">
                <div className="col-lg-6">
                    <img className="" width="100%" src="https://www.developeronrent.com/newcss/images/hire-fullstack-developer.jpg" alt="" />
                </div>  
                <div className="col-lg-6 border">
                    <div class="px-4 py-5 my-5 text-center">
                        <h1 class="display-5 fw-bold">This website is designed to accommodate news in the world of programming</h1>
                        <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">Stay up to date with news in the field of IT with us</p>
                        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <Link className="text-white btn btn-primary btn-lg px-4 " to="/">Home</Link>
                        </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
            
        </>
    )
}