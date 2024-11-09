import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { apiUpdateContact } from "../../../../Service/Contact/Contact";

const UpdateContact = ({ onclose, id }) => {

    console.log("iidd : " , id)

    const [feedback, setFeedback] = useState("");
    const [error, setError] = useState(null);

  const handleClose = () => {
    onclose();
    window.location.reload();
  };


  const handleUpdate = async () => {
   
    try {
      const response = await apiUpdateContact(id, feedback);
      if (response.data.status === 1) {
        toast.success("Cập nhật dữ liệu thành công");
      } else {
        toast.error("Cập nhật dữ liệu thất bại");
      }
    } catch (e) {
        toast.error("Lỗi APi");

      setError(e);
    }
  };

  return (
    <>
      <div className="fixed z-40 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <ToastContainer position="top-right" />
        <div className="bg-white overflow-y-auto rounded shadow-lg">
          <div className=" w-[500px] py-3 rounded bg-white fixed flex items-center justify-center ">
            <h2 className=" text-center uppercase   font-bold text-xl text-black">
              Phản hồi liên hệ
            </h2>
            <div onClick={handleClose} className=" cursor-pointer relative ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-6 hover:text-red-700 text-red-600 absolute top-[-12px] right-[-110px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>

          <div className=" w-[500px] rounded mt-[60px] h-auto mb-10">
           

            <textarea
              className=" text-sm font-medium mt-2 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder="Nhập nội dung phản hồi"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <div className="flex mt-4 items-center justify-around">
              <button
                onClick={handleUpdate}
                className="bg-red-600 hover:bg-red-700 font-bold text-white cursor-pointer rounded-lg text-sm px-10 py-3   "
              >
                {" "}
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateContact;
