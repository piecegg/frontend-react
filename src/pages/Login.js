import React from 'react';
import { useMediaQuery } from 'react-responsive';
function Login() {
     const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return ( <>
        {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
    </>);
}

export default Login;