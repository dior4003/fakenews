import MyButton from "./ui/button"
import './css/main.css'
import './css/icons-1.7.1/font/bootstrap-icons.css'
import { useState , useContext } from 'react'
import MyModal from './ui/modal'
import ShareIn from './ui/share'
import MyAlert from './ui/alert'
import { AuthContext } from "./hooks/context/myContext"


export default function TableItem(props){
    const [count, setCount] = useState(0)
    const [delet , setDelet]=useState(false)
    const [toggle, setToggle]=useState(false)
    const [save , setSave]=useState(false)
    const [drop , setDrop]=useState(false)
    const [pin , setPin]=useState(false)
    const [copy , setCopy]=useState(false)
    const [modal , setModal]=useState(false)
    const [pen , setPen]=useState(false)
    const [spam , setSpam]=useState(false)
    const [sharee , setSharee]=useState(false)
    const [more , setMore]=useState(false)
    const {isLogin , setIsLogin}=useContext(AuthContext)

    
    function copys(){
        setCopy(true);
        setDrop(false)
        
        setTimeout(() => {
            setCopy(false);
            setDrop(false)
        }, 2000);
    }
    function padelit(){
        setModal(true)
        setSharee(true)
        setDrop(false)
    }
    function spams(){
        setModal(!modal)
        setSpam(!spam)
        setDrop(false)

    }
    function dell(x){
        setModal(!modal)
        setDelet(!delet)
        setDrop(false)

        
    }

  function inc(){
    if (toggle) {
            setCount(count-1)

    }else{
        setCount(count+1)
    }}

    return(
    
        <>
            <MyModal modal={modal} setModal={setModal}>
                {sharee?<ShareIn setModal={setModal} setSharee={setSharee}/>
                :null}
                {spam?<MyAlert title="Siz ushbu postni spam qilmoqchimisiz">
                    <button onClick={spams} className="btn mx-4 btn-danger"><i className="bi bi-exclamation-octagon-fill mx-2"></i>Spam</button>
                    <button onClick={spams} className="btn mx-4 btn-secondary">Cancel</button>
                </MyAlert>
                :null

                }
                {delet?<MyAlert title="Siz ushbu postni o'chirib tashlamoqchmisiz">
                    <button onClick={dell} className="btn mx-4 btn-danger"><span onClick={()=>props.remove(props.post)}><i className="bi bi-trash-fill mx-2"></i>O'chirish</span></button>
                    <button onClick={dell} className="btn mx-4 btn-secondary">Cancel</button>
                </MyAlert>
                :null

                }
                
            </MyModal>
                <div className="col">
                    {copy?
                    <div className="alert alert-info alert-dismissible fade show" role="alert">
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        <strong>Copy clipboard</strong>
                    </div>
                    :null}
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">#{props.num}</h4>
                        {pin?<i className="p-a-t-l font bi bi-pin-angle-fill text-info"></i>:null}
                        {isLogin?<span onClick={()=>setDrop(!drop)} className="btn dropp p-a-t-r" ><i className="bi bi-three-dots-vertical"></i></span>:null}
                        {drop
                        ?<ul className="list-group shadow ss w-50 position-absalute">
                            <li onClick={()=>setPin(!pin)} className="list-group-item list-group-item-action p-1 "><span className="w-100 d-flex justify-content-center" onClick={()=>setDrop(false)}><i className="bi bi-pin-angle-fill text-info"></i></span></li>
                            <li onClick={copys} className="list-group-item list-group-item-action gap-3 border hover d-flex justify-content-center p-1"><i className="bi bi-link-45deg text-info"></i></li>
                            <li onClick={padelit} className="list-group-item list-group-item-action gap-3 border hover d-flex justify-content-center p-1"><i className="bi bi-share-fill text-info"></i></li>
                            <li className="list-group-item list-group-item-action gap-3 border hover d-flex justify-content-center p-1"><i className="bi bi-pencil-fill text-info"></i></li>
                            <li onClick={spams} className="list-group-item list-group-item-action gap-3 border hover d-flex justify-content-center p-1"><i className="bi bi-exclamation-octagon-fill text-danger"></i></li>
                            <li onClick={dell} className="list-group-item list-group-item-action gap-3 border hover d-flex justify-content-center p-1"><i className="bi bi-trash-fill text-danger"></i></li>
                        </ul>
                        :null}
                    </div>
                    <div className="card-body">
                    <img style={{maxWidth: '200px'}} src="https://yt3.ggpht.com/ytc/AKedOLR1ULhkE1KlBnOZi9RLmi2y0zskVvjom1YWwA8S=s900-c-k-c0x00ffffff-no-rj" alt="..."/>                        
                    <h1 className="card-title pricing-card-title">{props.post.title}</h1>
                        <ul className="list-unstyled mt-3 mb-4">
                        {more?<li><h4>{props.post.body}</h4></li>:null}
                        </ul>
                        <span 
                        onClick={()=>setMore(!more)}
                        className="btn btn-outline-info w-100"
                        >Read more</span>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <span 
                            className="btn"
                            onClick={inc}
                            >{count>0
                            ?<span>{count}</span>
                            :null
                            }
                            {toggle
                            ?<i onClick={()=>setToggle(!toggle)} className="bi bi-heart-fill text-danger" ></i>
                            :<i onClick={()=>setToggle(!toggle)} className="bi bi-heart" ></i>}
                            
                            </span>
                            <span className="btn"><i className="bi bi-chat"></i></span>
                            <span onClick={()=>setSave(!save)} className="btn">
                            {save
                            ?<i className="bi bi-bookmark-fill"></i>
                            :<i  className="bi bi-bookmark"></i>}
                            </span>
                        </div>
                        <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
            
      
        </>
        
       
    )
}




