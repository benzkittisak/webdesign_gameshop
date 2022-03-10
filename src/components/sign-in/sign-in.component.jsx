import React , {useState} from 'react';
import {Link} from 'react-router-dom';

const SignIn = () => {
    const [userData , setUserData] = useState({username:'' , password:''});

    const {username , password} = userData;

    const handleChange = e => {
        const {name , value} = e.target
        setUserData({...userData , [name]:value});
    }

    return(
        <form className="row p-3">
            <div className="col-lg-12">
                <h4 className="text-center py-5">เข้าสู่ระบบ</h4>
            </div>
            <div className="col-lg-12 mb-3">
                <label htmlFor="username" className="form-label ps-2">ชื่อผู้ใช้</label>
                <input onChange={handleChange} className="form-input" type="text" name="username" value={username}/>    
            </div>
            <div className="col-lg-12 mb-3">
                <label htmlFor="password" className="form-label ps-2">รหัสผ่าน</label>
                <input onChange={handleChange} className="form-input" type="password" name="password" value={password}/>    
            </div>

            <div className="col-lg-12 d-flex justify-content-end">
                <Link to={process.env.PUBLIC_URL + '/account'}  className="btn-login">
                    เข้าสู่ระบบ
                </Link>
            </div>
        </form>
    )
}

export default SignIn;