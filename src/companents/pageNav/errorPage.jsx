import { Link } from "react-router-dom";

export default function ErrPage(){

    return(
        <>
            <div class="px-4 py-5 my-5 text-center">
                <h1 class="display-5 fw-bold">---404---</h1>
                <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, ab.</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link className="text-white btn btn-primary btn-lg px-4 " to="/">Home</Link>
                </div>
                </div>
            </div>
        </>
    )
}