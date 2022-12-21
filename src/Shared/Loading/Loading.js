import React from "react";

const Loading = () => {
    return (
        <div className='flex justify-center items-center w-full h-full'>
            <div>
                <div className='  border-t-blue-500 border-b-0 animate-spin inline-block w-12 h-12 border-4 rounded-full' role='status'>
                    {/* <span className='visually-hidden'>____</span> */}
                </div>
            </div>
        </div>
    );
};

export default Loading;
