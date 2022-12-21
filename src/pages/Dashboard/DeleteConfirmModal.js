import React from "react";

const DeleteConfirmModal = ({ deleteData, handleDelete }) => {
    const time = deleteData?.slot?.split("-");

    return (
        <div>
            <input type='checkbox' id='delete-confirm-modal' className='modal-toggle' />
            <div className='modal '>
                <div className='modal-box '>
                    <label htmlFor='delete-confirm-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>
                        ✕
                    </label>
                    <p className='text-2xl font-bold text-center mt-3'>
                        Do You Want to delete <span className='text-warning'>{deleteData?.treatmentName}</span> in {deleteData?.appointmentDate} at{" "}
                        {deleteData && time[0]} ?{" "}
                    </p>
                    <div className='flex justify-center my-10'>
                        <label
                            className='btn btn-lg btn-warning '
                            onClick={() => {
                                handleDelete(deleteData?._id);
                            }}
                            htmlFor='delete-confirm-modal'>
                            {" "}
                            Confirm
                        </label>
                    </div>
                </div>
            </div>{" "}
        </div>
    );
};

export default DeleteConfirmModal;
