import { useEffect, useState } from "react";  
import toast, { Toaster } from 'react-hot-toast';
import axios  from 'axios';
const Login = () => {
      

     const [email, setEmail ] = useState('');
     const [password, setPassword ] = useState(''); 
     const [error, setError] = useState('');
     const [success, setSuccess] = useState('');
    


   const LoginHandle = async(e) => {
    e.preventDefault();
         
    setError('');
    setSuccess('');
    if( email=="" || password==""){
      toast.error("Please fill required fields!");
    return false;
  }
  const res =await axios.post("http://127.0.0.1:5000/login",{
    email, password
   });

   if(res.status==200){
    localStorage.setItem("token",res.data.token);
     toast.success(res.data.message);
   window.location.href="/";
}

   toast.success(res.data.message);

  }
      return(
  
          <main className="form-signin w-25 m-auto text-center">
         
          <form
           method="post" onSubmit={LoginHandle}
          >
            <img
              className="mb-4"
              src="/assets/images/plus.png"
              alt=""
              width={72}
              height={57}
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            
         
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onKeyUp={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onKeyUp={(e) => setPassword(e.target.value)}
            
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
          </form>
        </main>
        
  
      );
  
}

  
  export default Login;