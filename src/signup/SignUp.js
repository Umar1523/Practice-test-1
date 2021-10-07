import React from 'react';
import { useState } from 'react';
import usePasswordValidation from './usePasswordValidation';

function SignUp() {
  const [password, setPassword] = useState({
    Password: '',
    confirmPassword: '',
  });

  const [match] = usePasswordValidation({
    Password: password.Password,
    confirmPassword: password.confirmPassword,
  });

  const setFirst = (event) => {
    setPassword({ ...password, Password: event.target.value });
  };
  const setSecond = (event) => {
    setPassword({ ...password, confirmPassword: event.target.value });
  };

  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail"
            placeholder="Enter email"
            required
          />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            name="password"
            type="password"
            class="form-control"
            placeholder="Enter Password"
            onChange={setFirst}
            required
          />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword2">Confirm Password</label>
          <input
            name="confirmpassword"
            type="password"
            class="form-control"
            placeholder="Confirm Password"
            onChange={setSecond}
            required
          />
        </div>

        <div className="button">
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </div>

        <div>
          <ul>
            <li>Match: {match ? <span>True</span> : <span>False</span>}</li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default SignUp;

// import React from 'react';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';

// const SignUp = () => {
//   const onSubmit = (data) => {};
//   // console.log(data);

//   const { input, handleSubmit } = useForm('');
//   const [password, setPassword] = useState('');
//   const [confirmpassword, setConfirmPassword] = useState('');

//   const onVerifyPassword = () => {
//     if (password === true && confirmpassword === true) {
//       if (input['password'] !== input['confirmpassword']) {
//         console.log('The passwords do not match');
//         return;
//       } else {
//         console.log('Ok.');
//       }
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div class="form-group">
//           <label for="exampleInputEmail">Email address</label>
//           <input
//             type="email"
//             class="form-control"
//             id="exampleInputEmail"
//             placeholder="Enter email"
//             required
//           />
//         </div>

//         <div class="form-group">
//           <label for="exampleInputPassword1">Password</label>
//           <input
//             name="password"
//             type="password"
//             class="form-control"
//             placeholder="Enter Password"
//             onChange={setFirst}
//             required
//           />
//         </div>

//         <div class="form-group">
//           <label for="exampleInputPassword2">Confirm Password</label>
//           <input
//             name="confirmpassword"
//             type="password"
//             class="form-control"
//             placeholder="Confirm Password"
//             onChange={setSecond}
//             required
//           />
//         </div>

//         <div className="button">
//           <button type="submit" class="btn btn-primary">
//             Register
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
