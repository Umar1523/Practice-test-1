import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {

    return (
      <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          
          <div class="form-group">
            <label for="exampleInputPassword2">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Confirm Password" />
          </div>

          <div className="button">
            <button type="submit" class="btn btn-primary">Signup</button>
          </div>
          
        </form>
      </div>
    )
  }
  
  export default SignUp;