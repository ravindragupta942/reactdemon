import { React, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { saveData } from './feature/counterSlice'

export default function Contact() {
    const data = useSelector(state => state.counter.data)
    const dispatch = useDispatch();

    const [name, setName] = useState();
    const [mobile, setMobile] = useState();

    const handleInput = (event) => {
        if (event.target.name === 'name') {
            setName(event.target.value);
        } else {
            setMobile(event.target.value);
        }
    }

    const saveForm = () => {
        const data = {
            name: name,
            mobile: mobile
        }
        dispatch(saveData(data));
        setName('');
        setMobile('');
    }

    return (
        <div>
            <div>
                <label>Name</label>
                <input type="text" value={name} name="name" onChange={handleInput} />
            </div>
            <div>
                <label>Mobile</label>
                <input type="text" value={mobile} name="mobile" onChange={handleInput} />
            </div>
            <div>
                <button onClick={saveForm}>Save</button>
            </div>
            {data && data.length ? data.map((details) => {
                return (
                    <p>Name: {details.name}, mobile: {details.mobile}</p>
                )
            }) : ''}
        </div>
    )
}