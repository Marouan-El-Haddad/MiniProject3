import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";


const baseURL = "http://127.0.0.1:3001/user";


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser() {
        const user = {
            password: password,
            id: email
        };
        try {
            let response = await axios.put(baseURL, user);
            let userInfo= await axios.get(baseURL + "/" + email);
            console.log(userInfo.data.userInformation.email);
            localStorage.setItem('user', JSON.stringify(userInfo.data.userInformation));
            alert('Successfully logged in');
            //change to home path
            window.location.href = "/";

        }catch(err) {
            console.log(err);
            alert('Invalid email or password');
        }

        //localStorage.setItem('user', JSON.stringify(response));

    }
    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Login Page</h1>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"
                   placeholder="Email"/>
            <br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                   className="form-control" placeholder="Password"/>
            <br/>
            <button onClick={loginUser} className="btn btn-primary">Login</button>

            <br/>
            <Link to="/register"><p>Register</p></Link>


        </div>
    );
}

export function Register() {
    const [firstName, setFirstName] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    //const navigate = useNavigate();

    async function signUp() {

        const user = {
            firstName: firstName,
            familyName: familyName,
            password: password,
            id: email
        };
        let response = await axios.post(baseURL, user);
        if (response.status === 200) {
            window.location.href = "/";
        } else {
            alert('Email already exists');
        }
        response = await response;
        localStorage.setItem('user', JSON.stringify(user));
        console.log(localStorage.getItem('user'));
        window.location.href = "/";
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