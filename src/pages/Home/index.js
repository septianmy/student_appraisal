import React, {useEffect, useState} from 'react'
import {StudentList, StudentListHeader } from '../../components'
import './home.css'

const Home = () => {
    const [student, setStudent] = useState(0)
    var data = [];
    var length = student; // user defined length
    const [newFormData, setNewFormData] = useState({
        aspek_penilaian_1 : {},
        aspek_penilaian_2 : {},
        aspek_penilaian_3 : {},
        aspek_penilaian_4 : {},
    })
    const [studentGroup1, setStudentGroup1] =  useState({})
    const [studentGroup2, setStudentGroup2] =  useState({})
    const [studentGroup3, setStudentGroup3] =  useState({})
    const [studentGroup4, setStudentGroup4] =  useState({})

    const onChange = (e) => {
        const fileName = e.target.name
        const typeAppraisal = fileName.substr(0,1);
        const studentName = fileName.substr(1);
        if(typeAppraisal === "1")
        {
            setStudentGroup1({...studentGroup1, [studentName] : e.target.value})
        } else if(typeAppraisal === "2")
        {
            setStudentGroup2({...studentGroup2, [studentName] : e.target.value})
        } else if(typeAppraisal === "3")
        {
            setStudentGroup3({...studentGroup3, [studentName] : e.target.value})
        }
        else {
            setStudentGroup4({...studentGroup4, [studentName] : e.target.value})
        }
        
    }

    const handleReset = () => {
        setStudent(0);
        setNewFormData();
        setStudentGroup1({});
        setStudentGroup2({});
        setStudentGroup3({});
        setStudentGroup4({});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setNewFormData({ 
            aspek_penilaian_1 : studentGroup1,
            aspek_penilaian_2 : studentGroup2,
            aspek_penilaian_3 : studentGroup3,
            aspek_penilaian_4 : studentGroup4
        })
    }

    const changeNumber = (e) => {
        setStudent(e.target.value)
    }

    for(var i = 1; i <= length; i++) {
        data.push('undefined');
    }

    const list = data.map((position, index) => {
        let id = index + 1;
        return (
            <StudentList key={index} id={id} onChange={onChange}/>
        );
    });

    useEffect(() => {
        setNewFormData('')
      }, []);

    return (
        <div className="Home">
            <div className="container">
                <div className="header d-flex justify-content-center">
                    <h3>Student Appraisal Application</h3>
                </div>
                <div className="content">
                    <div className="numberStudent-wrapper d-flex">
                        <div className="numberstudent-form align-self-center">Set Number Student</div>
                        <div className="numberstudent-form align-self-center">
                            <input 
                                type="text" 
                                name="number-student" 
                                placeholder="set number" 
                                pattern="[0-9]*" 
                                onChange={changeNumber}
                                value={student}
                                className="setStudent"
                            ></input>
                        </div>
                    </div>
                    <StudentListHeader/>
                    <form onSubmit={handleSubmit}>
                        {student === 0 ? <div className="d-flex justify-content-center warning">Please Set Number of Student</div>
                        :
                        <div className="list-student">{list}</div>}
                        <div className="button-wrapper d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-save">Save</button>
                        <button type="button" className="btn btn-danger btn-reset" onClick={handleReset}>Reset</button>
                        </div>
                    </form>
                </div>
                <div className="result">
                    <div className="title">Result :</div>
                    <pre>{JSON.stringify(newFormData, null, 2)}</pre>
                </div>
            </div>
        </div>
    )
}

export default Home
