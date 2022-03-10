import React from "react"
import MySelect from "./ui/select"
import MyInput from "./ui/input"

export default function FilterSort({filter ,setFilter}){

    return(
        <div className="d-flex justify-content-between my-2">
            <MyInput
            className="form-control"
            placeholder="Search..."
            value={filter.query}
            onChange={e=> setFilter({...filter , query: e.target.value})}
            />
            <MySelect
            defaultValue="Sorted by"
            value={filter.sort}
            onChange={selected=> setFilter({...filter , sort: selected})}
            options={[
                {value:"title" ,name:'Title'},
                {value:"body" , name:"Body"}
            ]}
            />       
        </div>
    )
}