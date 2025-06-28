import React from 'react';
import errorImg from '../../assets/404-gif-2.gif';
import { isRouteErrorResponse, useLocation, useRouteError } from 'react-router-dom';
import useReturnHandler from './../../hooks/Return/Return';

const Error = () => {
    const error = useRouteError();
    const location = useLocation();
    const returnHandler = useReturnHandler();

    const routeLocation = Array.from(location.pathname).slice(1).join('');

    const errorHandle = ()=>{
        if (isRouteErrorResponse(error)) {
            return(
                <div className='xxs:w-full lg:w-7/12 h-full flex flex-col items-center'>
                    <h2 className='xxl-title p-2 bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent'>oops! Error occurred!</h2>
                    <h3 className='lg-title text-violet-800'><span>/{routeLocation}</span> {error.statusText}</h3>
                    {error.data?.message && <p>{error.data.message}</p>}
                    <button 
                    className='uppercase btn btn-lg btn-outline btn-secondary my-2'
                     onClick={returnHandler}
                     >
                     return
                     </button>
                </div>
            )
        } else {
            return (

                 <div className='w-7/12 h-full flex flex-col items-center'>
                    <h2>oops! Error occurred!</h2>
                    <button onClick={returnHandler}>return</button>
                </div>
            )
        }
    }

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <div className='w-5/12 h-72'>
                <img src={errorImg} alt="error-image" />
            </div>
            
            {errorHandle()}
        </div>
    );
};

export default Error;