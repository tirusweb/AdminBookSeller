import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  apiGetContactLast,
  apiGetContactUsername,
  apiSeenContact,
  apiUpdateContact,
} from "../../../../Service/Contact/Contact";
// import { apiGetContact, apiSeenContact } from "../../services/Contact/Contact";
import user from "../../../../image/avatar.jpg";
import admin from "../../../../image/admin.webp";
const ShowResponse = ({ onclose, username }) => {
  const [contact, setContact] = useState([]);
  const [id, setId] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState(null);

  const handleClose = () => {
    window.location.reload();
    onclose();
  };
  
  const fetContactLast = async () => {
    try {
      const response = await apiGetContactLast(username);
      console.log("Lase", response.data);
      if (response.data.status === 1) {
        setId(response.data.customer.id);
      } else {
        toast.error("Có Lỗi xảy ra, vui lòng thử lại");
      }
    } catch (error) {
      toast.error("Lỗi APi  : ", error);
    }
  };
  useEffect(() => {

    fetContactLast();
  }, [username]);

  const fetContact = async () => {
    try {
      const response = await apiGetContactUsername(username);
      if (response.data.status === 1) {
        setContact(response.data.notifications);
      } else {
        toast.error("Có Lỗi xảy ra, vui lòng thử lại");
      }
    } catch (error) {
      toast.error("Lỗi APi  : ", error);
    }
  };
  useEffect(() => {
    fetContact();
  }, [username]);

  const handleUpdate = async () => {
    try {
      const response = await apiUpdateContact(id, feedback);
      if (response.data.status === 1) {
        await fetContact();
        setFeedback("");
      } else {
        toast.error("Cập nhật dữ liệu thất bại");
      }
    } catch (e) {
      toast.error("Lỗi APi");

      setError(e);
    }
  };

  const handleSeen = async () => {
    await fetContact();
    await fetContactLast();
  }

  return (
    <>
      <div className="fixed z-40 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <ToastContainer position="top-right" />
        <div className="bg-white overflow-y-auto rounded shadow-lg">
          <div className=" w-[500px] py-3 rounded bg-white fixed flex items-center justify-center ">
            <h2 className=" text-center uppercase   font-bold text-xl text-black">
              Phản hồi người dùng
            </h2>
            <div onClick={handleClose} className=" cursor-pointer relative  ">
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

          <div className="w-[500px] rounded mt-[60px] h-[300px] overflow-y-auto mb-10">
            {contact.map((contacts, index) => (
              <div key={index}>
                <div className=" ml-12 mt-2 flex items-center justify-start">
                  <img className=" w-[30px] h-[30px]" src={user} alt="user" />
                  <p className=" tex ml-3">{contacts.descript}</p>
                </div>
                <div className=" mr-12 flex items-center justify-end">
                  <p className=" tex mr-3">{contacts.feedback}</p>
                  <img
                    className=" border border-solid rounded-full border-black w-[30px] h-[30px]"
                    src={admin}
                    alt="user"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className=" border border-solid ml-12 mr-12 mb-3 border-gray-300 rounded-lg  flex items-center justify-start">
            <svg
            onClick={handleSeen}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-12 bg-red-600 text-white px-2 rounded-lg cursor-pointer "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>

            <input
              className=" text-sm border-none outline-none font-medium  w-[90%] border border-gray-300  px-6"
              placeholder=""
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <div
              onClick={handleUpdate}
              className=" cursor-pointer hover:bg-red-700 flex px-4 py-1 rounded-lg my-2 mr-2 bg-red-600 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-6 text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowResponse;
