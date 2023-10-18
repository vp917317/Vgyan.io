import React, { useState, useEffect } from 'react';

const Loader = ({text , time=3000 }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, time); // 3 seconds

        return () => {
            clearTimeout(timer); // Clear the timeout if the component gets unmounted
        };
    }, []);

    if (!loading) {
        return null; // Don't render anything after loading is complete
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <text style={{marginBottom:'20px' , fontWeight:'bold' , color:'purple'}}>{text}</text>
            <div className="loader w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin">
            </div>
        </div>
    );
};

export default Loader;