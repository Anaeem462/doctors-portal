import React from "react";

const Loading = () => {
    return (
        <div className='flex justify-center items-center w-full h-full'>
            <div
                className='spinner-border border-r-red-600 border-l-red-600  border-t-green-500 border-b-green-500 animate-spin inline-block w-12 h-12 border-4 rounded-full'
                role='status'>
                {/* <span className='visually-hidden'>____</span> */}
            </div>
        </div>
    );
};

export default Loading;
