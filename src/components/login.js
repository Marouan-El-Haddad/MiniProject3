import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import uuid from 'react-uuid';


const baseURL = "http://127.0.0.1:3001/user";

export function Login() {
    const [firstName, setFirstName] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    async function signUp()

    {
        const id = uuid();
        const user = {
            id: id,
            firstName: firstName,
            familyName: familyName,
            password: password,
            email: email
        };
        let response = await axios.post(baseURL, user);
        if (response.status === 201) {
            navigate('/');
        }
        response = await response;

        //store the user in the local storage
        localStorage.setItem('user', JSON.stringify(user));


        navigate('/');
    }



    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control"
                   placeholder="First Name"/>
            <br/>
            <input type="text" value={familyName} onChange={(e) => setFamilyName(e.target.value)}
                   className="form-control" placeholder="Family Name"/>
            <br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                   className="form-control" placeholder="Password"/>
            <br/>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"
                   placeholder="Email"/>
            <br/>
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>
    );
}
