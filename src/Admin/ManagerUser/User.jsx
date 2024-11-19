import React, { useState, useEffect } from "react";
import { apiDeleteUserByname, apiGetUser } from "../../Service/User/User";
import ModalEdit from "./Modal/Edit";
import { toast, ToastContainer } from "react-toastify";

const User = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [isModalEdit, setModalEdit] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);

  const [username, setUsername] = useState("");

  const fetchUser = async () => {
    try {
      const response = await apiGetUser();
      console.log(response.data);
      if (response.data.status === 1) {
        setUser(response.data.books);
      } else {
        setError(" lỗi khi call API");
      }
    } catch (error) {
      setError(" Lỗi rồi");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleDelete = async (username) => {
    try {
      const response = await apiDeleteUserByname(username);
      console.log(" teen nguoi dung : ", username);
      console.log(response);
      if (response.data.status === 1) {
        toast.success("Xóa người dùng thành công");
        await fetchUser();
      } else {
        toast.error("Người dùng đang mua sản phẩm không thế xóa");
      }
    } catch (error) {
      toast.error("Lỗi khi gọi API: " + error.message);
    }
  };

  const openModalDelete = (username) => {
    setUserToDelete(username);
    setDeletePopupOpen(true);
  };
  const confirmDelete = async () => {
    if (userToDelete) {
      await handleDelete(userToDelete);
      setDeletePopupOpen(false);
      setUserToDelete(null);
    }
  };

  const handleCloseDelete = () => {
    setDeletePopupOpen(false);
    setUserToDelete(null);
  };

  const HandleShow = (username) => {
    setModalEdit(true);
    setUsername(username);
  };

  const HandleClose = () => {
    setModalEdit(false);
  };
  return (
    <>
      <div className=" w-[100%]">
        <ToastContainer position="top-right" />
        <div className="">
          <div className=" w-full flex-1 flex py-6 items-center bg-white shadow  justify-start ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6 ml-4 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>
            <h2 className=" text-red-600 bg-white w-full text-xl font-bold text-red uppercase ml-3 ">
              {" "}
              Quản lý người dùng
            </h2>
          </div>

          <div className=" mt-2 grid-cols-10 mx-2 grid gap-2 ">
            <div className=" overflow-x-auto col-span-10 w-full">
              <table className=" overflow-x-auto border border-gray-200 table-fixed xs:w-[900px]  lg:w-full">
                <thead>
                  <tr className=" py-4 bg-red-500">
                    <th
                      colSpan={1}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      STT
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white  border-solid px-3  text-white tracking-wider"
                    >
                      Tên tài khoản
                    </th>
                    <th
                      colSpan={3}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Họ tên người dùng
                    </th>
                    <th
                      colSpan={3}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Địa chỉ
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Số điện thoại
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Mật khẩu
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2  border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Công cụ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((users, index) => (
                    <tr key={index} className=" bg-white">
                      <td
                        colSpan={1}
                        className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {index + 1}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {users.username}
                      </td>
                      <td
                        colSpan={3}
                        className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xl text-center"
                      >
                        {" "}
                        {users.fullname}
                      </td>
                      <td
                        colSpan={3}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {users.email}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {users.address}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {users.phone}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {" "}
                        {users.pass}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-bold text-red-500 lg:text-xl border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        <div className=" flex items-center justify-around">
                          <div
                            onClick={() => HandleShow(users.username)}
                            className=" cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6 text-blue-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                              />
                            </svg>
                          </div>
                          <div
                            onClick={() => openModalDelete(users.username)}
                            className=" cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {isModalEdit && <ModalEdit onClose={HandleClose} username={username} />}
        {isDeletePopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
              <p>Bạn có chắc chắn muốn xóa sách này không?</p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleCloseDelete}
                  className="bg-gray-300 px-4 py-2 rounded mr-2"
                >
                  Hủy
                </button>
                <button
                  onClick={confirmDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default User;
