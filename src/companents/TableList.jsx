import {CSSTransition , TransitionGroup  } from 'react-transition-group'
import TableItem from './tableItem'

const TableList =({posts , remov ,files})=>{

    return(
        <>
            <h4 className="text text-center">News today</h4>
            <TransitionGroup>
                {posts.map((post ,index)=>(
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        className="item"
                    >
                        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                            <TableItem remove={remov} num={index+1} post={post} files={files} />
                        </div>
                    </CSSTransition>
                    
                ))}
            </TransitionGroup>
                
                
                
                
        </>
    )
}
export default TableList