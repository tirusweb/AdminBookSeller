import React, { useEffect, useState } from "react";
import { apiGetUserByname, apiUpdateUser } from "../../../Service/User/User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ModalEdit = ({ username, onClose }) => {
  console.log(username);

  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  const handleClose = () => {
    onClose();
    window.location.href = "/quan-ly-nguoi-dung";
  }

  const handleUpdate = async () => {
    if (fullname.trim() === "") {
      return toast.error("Họ và tên không được để trống");
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return toast.error("Email không hợp lệ");
    }
    if (!/^[0-9]{10}$/.test(phone)) {
      return toast.error("Số điện thoại phải có 10 chữ số");
    }
    if (pass.length < 8) {
      return toast.error("Mật khẩu phải có ít nhất 8 ký tự");
    }

    const data = { fullname, address, phone, email, pass };

    try {
      const response = await apiUpdateUser(username, data);

      if (response.data.status === 1) {
        toast.success("Cập nhật thông tin thành công");
      } else {
        toast.error("Cập nhật thông tin thất bại");
      }
    } catch (error) {
      setError("Đã xảy ra lỗi khi cập nhật thông tin. Vui lòng thử lại.");
      console.error("Lỗi khi cập nhật thông tin:", error.message);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiGetUserByname(username);
        console.log(response.data);
        if (response.data.status === 1) {
          const user = response.data.user;
          setFullName(user.fullname);
          setPhone(user.phone);
          setEmail(user.email);
          setAddress(user.address);
          setPass(user.pass);
        } else {
          setError(response.data.msg);
        }
      } catch (error) {
        setError("Không thể tải chi tiết người dùng. Vui lòng thử lại.");
      }
    };

    fetchUsers();
  }, [username]);

  return (
    <>
      <div className="fixed z-40 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <ToastContainer position="top-right" />
        <div className="bg-white overflow-y-auto rounded shadow-lg">
          <div className=" w-[500px] py-3 rounded bg-white fixed flex items-center justify-center ">
            <h2 className=" text-center uppercase   font-bold text-xl text-black">
              Chỉnh sửa người dùng
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
              value={username}
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=""
              readOnly
            />
            <input
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập họ và tên"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" nhập địa chỉ email"
            />
             <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" nhập địa chỉ "
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" nhập số điện thoại"
            />
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập mật khẩu"
            />
            <div className="flex mt-4 items-center justify-center">
              <button
                onClick={handleUpdate}
                className=" bg-red-600 hover:bg-red-700 font-bold text-white cursor-pointer rounded-lg text-sm px-10 py-3  "
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

export default ModalEdit;
