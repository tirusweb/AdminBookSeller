import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { apiGetVoucher, apiGetVoucherByID, apiUpdateVoucher } from "../../../Service/Sale/Sale";
import { apiGetUser } from "../../../Service/User/User";

const UpdateVoucher = ({ onclose, idvou }) => {
  const [saleof, setSaleof] = useState("");
  const [limit, setLimition] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);

  const handleClose = () => {
    onclose();
    window.location.reload();
  };

  useEffect(() => {
    const fetchNotify = async () => {
      try {
        const response = await apiGetVoucherByID(idvou);
        console.log("data vou", response.data);

        if (response.data.status === 1) {
          setSaleof(response.data.user.saleof);
          setLimition(response.data.user.limit);
          setUsername(response.data.user.username);
        } else {
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchNotify();
  }, [idvou]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await apiGetUser();
        console.log(response.data);
        if (response.data.status === 1) {
          setUser(response.data.user);
        } else {
          setError(" lỗi khi call API");
        }
      } catch (error) {
        setError(" Lỗi rồi");
      }
    };
    fetchUser();
  }, []);

  const handleUpdate = async () => {
    const data = {
      saleof,
      limit,
    };
    try {
      const response = await apiUpdateVoucher(idvou, data);
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
              Cập nhật giảm giả
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
          <input
              className=" text-sm font-medium mt-2 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              readOnly
              value={username}
            />
            <input
              className=" text-sm font-medium mt-2 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập giá cần giảm..."
              type="number"
              value={saleof}
              onChange={(e) => setSaleof(e.target.value)}
            />

            <input
              className=" text-sm font-medium mt-2 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder="Nhập giới hạn.. "
              type="number"
              value={limit}
              onChange={(e) => setLimition(e.target.value)}
            />
           

            <div className="flex mt-4 items-center justify-around">
              <button
                onClick={handleUpdate}
                className="bg-red-600 hover:bg-red-700 font-bold text-white cursor-pointer rounded-lg text-sm px-10 py-3   "
              >
                {" "}
                Gửi thông tin
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateVoucher;
