import React , {useState} from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [userData , setUserData] = useState({
        username:'', 
        password:'',
        confirmPassword:'',
        email:'',
    })

    const {username , password, confirmPassword , email} = userData;

    const handleChange = e => {
        const {name , value} = e.target
        setUserData({...userData , [name]:value});
    }
    return(
        <form className="form p-3">
            <div className="col-lg-12">
                <h4 className="text-center py-5">สมัครสมาชิก</h4>
            </div>
            <div className="col-lg-12 mb-3">
                <label htmlFor="username" className="form-label ps-2">ชื่อผู้ใช้</label>
                <input onChange={handleChange} className="form-input" type="text" name="username" value={username}/>    
            </div>
            <div className="col-lg-12 mb-3">
                <label htmlFor="email" className="form-label ps-2">อีเมล</label>
                <input onChange={handleChange} className="form-input" type="text" name="email" value={email}/>    
            </div>
            <div className="col-lg-12 mb-3">
                <label htmlFor="password" className="form-label ps-2">รหัสผ่าน</label>
                <input onChange={handleChange} className="form-input" type="password" name="password" value={password}/>    
            </div>
            <div className="col-lg-12 mb-3">
                <label htmlFor="confirmPassword" className="form-label ps-2">ยืนยันรหัสผ่าน</label>
                <input onChange={handleChange} className="form-input" type="confirmPassword" name="confirmPassword" value={confirmPassword}/>    
            </div>
            <div className="col-lg-12 d-flex justify-content-end">
                <Link to={process.env.PUBLIC_URL + '/accounts'} className="btn-register">
                    สมัครสมาชิก
                </Link>
            </div>
        </form>
    )
}

export default SignUp;