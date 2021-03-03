import React from 'react'
import { IconUser } from '../../../assets'
import { Select } from '../../atoms'
import './studentList.css'

const StudentList = ({id, onChange}) => {
    return (
        <div className="studentlist-wrapper d-flex">
            <div className="student-name">
                <img src={IconUser} alt="user" className="img-student"/> Nama Mahasiswa {id}
            </div>
            <div className="appraisal">
                <Select aspect="1" id={`mahasiswa_${id}`} onChange={onChange}/>
            </div> 
            <div className="appraisal">
                <Select aspect="2" id={`mahasiswa_${id}`} onChange={onChange}/>
            </div> 
            <div className="appraisal">
                <Select aspect="3" id={`mahasiswa_${id}`} onChange={onChange}/>
            </div> 
            <div className="appraisal">
                <Select aspect="4" id={`mahasiswa_${id}`} onChange={onChange}/>   
            </div> 
        </div>
    )
}

export default StudentList
