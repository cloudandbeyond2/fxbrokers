// 'use client';
// import { useState } from 'react';
// import { Icon } from '@iconify/react';
// import Link from 'next/link';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { useRouter } from 'next/navigation';

// const SignInLayer = () => {
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/login', formData);
//       const { role } = res.data.user;

//       Swal.fire({
//         icon: 'success',
//         title: 'Welcome!',
//         text: `Logged in as ${role}`,
//         confirmButtonText: 'Continue',
//       }).then(() => {
//         if (role === 'broker') {
//           router.push('/index-4');
//         } else if (role === 'admin') {
//           router.push('/index-3');
//         } else {
//           router.push('/');
//         }
//       });
//     } catch (err) {
//       console.error('Login error:', err);
//       Swal.fire({
//         icon: 'error',
//         title: 'Login Failed',
//         text: err?.response?.data?.error || 'Something went wrong!',
//       });
//     }
//   };


'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/userSlice'; // 👈 import your Redux action

const SignInLayer = () => {
  const router = useRouter();
  const dispatch = useDispatch(); // 👈 setup dispatcher
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', formData);
      const { username, email, role } = res.data.user;

      // ✅ Save user in Redux
      dispatch(setUser({ username, email, role }));

      Swal.fire({
        icon: 'success',
        title: 'Welcome!',
        text: `Logged in as ${role}`,
        confirmButtonText: 'Continue',
      }).then(() => {
        if (role === 'broker') router.push('/index-4');
        else if (role === 'admin') router.push('/index-3');
        else router.push('/');
      });
    } catch (err) {
      console.error('Login error:', err);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: err?.response?.data?.error || 'Something went wrong!',
      });
    }
  };

  

  return (
    <section className='auth bg-base d-flex flex-wrap'>
      {/* Left Side Image */}
      <div className='auth-left d-lg-block d-none'>
        <div className='d-flex align-items-center flex-column h-100 justify-content-center'>
          <img src='assets/images/auth/auth-img.png' alt='Sign In Visual' />
        </div>
      </div>

      {/* Right Form Side */}
      <div className='auth-right py-32 px-24 d-flex flex-column justify-content-center'>
        <div className='max-w-464-px mx-auto w-100'>
          <div>
            <Link href='/' className='mb-40 max-w-290-px'>
              {/* <img src='assets/images/logo.png' alt='Logo' /> */}
              <h5>Forex</h5>
            </Link>
            <h4 className='mb-12'>Sign In to your Account</h4>
            <p className='mb-32 text-secondary-light text-lg'>
              Welcome back! Please enter your details.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='icon-field mb-16'>
              <span className='icon top-50 translate-middle-y'>
                <Icon icon='mage:email' />
              </span>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='form-control h-56-px bg-neutral-50 radius-12'
                placeholder='Email'
              />
            </div>
            <div className='icon-field mb-20'>
              <span className='icon top-50 translate-middle-y'>
                <Icon icon='solar:lock-password-outline' />
              </span>
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='form-control h-56-px bg-neutral-50 radius-12'
                placeholder='Password'
              />
            </div>
            <button
              type='submit'
              className='btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32'
            >
              Sign In
            </button>
            <div className='mt-32 text-center text-sm'>
              <p className='mb-0'>
                Don’t have an account?{' '}
                <Link href='/sign-up' className='text-primary-600 fw-semibold'>
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignInLayer;
