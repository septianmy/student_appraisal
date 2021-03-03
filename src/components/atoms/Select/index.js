import React from 'react'

const Select = ({id, onChange, aspect}) => {
    const options = [1,2,3,4,5,6,7,8,9,10]
    return (
        <>
        <select className="select-value" name={aspect + id} onChange={onChange}>
            <option>--Select Value--</option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option} 
                    </option>
                ))}
        </select>
        </>
    )
}

export default Select
