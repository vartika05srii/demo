import React,{ useState } from 'react';
import IdentifyService from '../services/Identify-Service';

function RegistrationForm(){
    const[formData,setFormData]=useState({name: '',username: '',email: '', password: '',businessTitle: '',phone: '',dob: '',accountNo: '',currentBalance: '',pin: ''})
    const[isLoading,setIsLoading]=useState(false);
    const[error,setError]=useState(' ');

    const handleRegistration =async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(' ');

        try{
            await IdentifyService.register(formData);
        }catch(error){
            setError('Registration failed. Please try again.');
            
        }finally{
            setIsLoading(false);
        }
    };
    return(
        <div className="form-container">
            <h2>User Registration Form</h2>
        <form onSubmit={handleRegistration}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData,name: e.target.value})} required/>
            </div>

            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={(e) => setFormData({ ...formData,username: e.target.value})} required/>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData,email: e.target.value})} required/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={(e) => setFormData({ ...formData,password: e.target.value})} required/>
            </div>

            <div className="form-group">
                <label htmlFor="businessTitle">businessTitle:</label>
                <input type="text" id="businessTitle" name="businessTitle" value={formData.businessTitle} onChange={(e) => setFormData({ ...formData,businessTitle: e.target.value})} required/>
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData,phone: e.target.value})} required/>
            </div>

            <div className="form-group">
                <label htmlFor="dob">DOB:</label>
                <input type="text" id="dob" name="dob" value={formData.dob} onChange={(e) => setFormData({ ...formData,dob: e.target.value})} required/>
            </div>

            <div className="form-group">
                <label htmlFor="accountNo">Account Number:</label>
                <input type="text" id="accountNo" name="accountNo" value={formData.accountNo} onChange={(e) => setFormData({ ...formData,accountNo: e.target.value})} required/>
            </div>

            <div className="form-group">
                <label htmlFor="currentBalance">Current Balance:</label>
                <input type="text" id="currentBalance" name="currentBalance" value={formData.currentBalance} onChange={(e) => setFormData({ ...formData,currentBalance: e.target.value})} required/>
            </div>

            <div className="form-group">
                <label htmlFor="pin">PIN:</label>
                <input type="text" id="pin" name="pin" value={formData.pin} onChange={(e) => setFormData({ ...formData,pin: e.target.value})} required/>
            </div>
            <button type="submit" diasbled={isLoading}>
                {isLoading?'Registering ...':'Register'}
            </button>
            {error && <div className="error-message">{error}</div>}
        </form>
        </div>
    )
}
export default RegistrationForm;