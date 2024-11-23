'use client';

import { useState } from 'react';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const AnimatedInput = styled('div')({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '40px',
    padding: '2px',
    width: '100%',
    minWidth: '300px',
    
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '150px',
      height: '150%',
      background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
      animation: 'rotate 3s linear infinite',
      top: '-25%',
      left: '-50px',
      transform: 'rotate(45deg)',
    },
  
    '@keyframes rotate': {
      '0%': {
        transform: 'translateX(-100%) rotate(45deg)',
      },
      '100%': {
        transform: 'translateX(200%) rotate(45deg)',
      },
    },
  });
  
  const StyledInput = styled('input')({
    width: '100%',
    minWidth: '300px',
    padding: '12px 24px',
    background: 'rgba(24, 24, 27, 0.2)',
    border: 'none',
    outline: 'none',
    color: 'white',
    fontSize: '14px',
    borderRadius: '40px',
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: '12px',
    },
  });

const Label = styled('label')({
  display: 'block',
  color: 'white',
  marginBottom: '8px',
  fontSize: '14px',
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2196f3',
    },
    background: {
      paper: '#18181b',
      default: '#09090b',
    },
  },
});

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email === 'admin@gmail.com' && formData.password === 'admin') {
      window.location.href = '/dashboard/grow-location1';
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="w-full">
        <div className='mb-12'>
            <h1 className="text-3xl m-0 font-semibold text-white text-center pb-2">
            Nice to see you!
            </h1>
            <div className='text-xs text-center text-slate-400 font-semibold'>Enter your email and password to login</div>
        </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                      <div>
                          <Label className='pl-4'>Email</Label>
                          <AnimatedInput>
                              <StyledInput
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  placeholder="Enter your email"
                                  required
                              />
                          </AnimatedInput>
                      </div>

                      <div>
                          <Label className='pl-4'>Password</Label>
                          <AnimatedInput>
                              <StyledInput
                                  type="password"
                                  name="password"
                                  value={formData.password}
                                  onChange={handleChange}
                                  placeholder="Enter your password"
                                  required
                              />
                          </AnimatedInput>
                      </div>
                      <Link href={''} className='text-slate-400 text-xs pl-5 py-2'>I forgot my password</Link>
                  </div>



          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}

          <div className='m-1'>
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                py: 1,
                textTransform: 'none',
                fontSize: '0.8rem',
                fontWeight: "bold",
                borderRadius: '12px'
                }}
            >
                LOGIN
            </Button>
          </div>

          <div className="text-center">
            <Link href="/signup" className="inline-block">
              <span className="text-sm text-zinc-400">
                Don&apos;t have an account?{' '}
              </span>
              <span className="text-sm text-blue-500 hover:text-blue-400">
                Sign up
              </span>
            </Link>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}