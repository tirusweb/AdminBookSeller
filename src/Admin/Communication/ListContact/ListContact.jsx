import React, { useEffect, useState } from "react";
import { apiGetProduct } from "../../../Service/Product/Product";
import {
  apiDeleteContact,
  apiGetContact,
} from "../../../Service/Contact/Contact";
import UpdateContact from "./Model/Edit";
import { toast } from "react-toastify";

const ListContact = () => {
  const [contact, setContact] = useState([]);
  const [error, setError] = useState(null);
  const [isShowEdit, setIsShowEdit] = useState(false);
  const [isId, setIsId] = useState("");
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const fetchBook = async () => {
    try {
      const response = await apiGetContact();
      console.log(response.data);
      if (response.data.status === 1) {
        setContact(response.data.books);
      } else {
        setError(" lỗi khi call API");
      }
    } catch (error) {
      setError(" Lỗi rồi");
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const handleShowDelete = (id) => {
    setIsId(id);
    setIsDeletePopupOpen(true);
  };

  const handleCloseDelete = () => {
    setIsDeletePopupOpen(false);
  };

  const handleShowEdit = (id) => {
    setIsId(id);
    setIsShowEdit(true);
  };

  const handleCloseEdit = () => {
    setIsShowEdit(false);
  };

  const handleDelete = async () => {
    try {
      const response = await apiDeleteContact(isId);
      console.log(response);
      if (response.data.status === 1) {
        await fetchBook();
        toast.success("Xóa thành công");
        setIsDeletePopupOpen(false);
      } else {
        toast.error("Thông báo không thế xóa");
      }
    } catch (error) {
      toast.error("Lỗi khi gọi API: " + error.message);
    }
  };

  return (
    <>
      <div className=" w-[100%]">
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
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>

            <h2 className=" text-red-600 bg-white w-full text-xl font-bold text-red uppercase ml-3 ">
              {" "}
              Thống kê Liên kê
            </h2>
          </div>

          <div className=" mt-2 grid-cols-10 mx-2 grid gap-2 ">
            <div className=" overflow-x-auto overflow-y-auto h-screen col-span-10 w-full">
              <table className=" overflow-x-auto  border border-gray-200 table-fixed xs:w-[900px]  lg:w-full">
                <thead>
                  <tr className=" py-4 bg-red-500">
                    <th
                      colSpan={1}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Mã Liên hệ
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white  border-solid px-3  text-white tracking-wider"
                    >
                      tiêu đề
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white  border-solid px-3  text-white tracking-wider"
                    >
                      Nội dung
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white  border-solid px-3  text-white tracking-wider"
                    >
                      Trạng thái
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      người gửi
                    </th>

                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Công cụ
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {contact.map((book, index) => (
                    <tr key={index} className=" bg-white">
                      <td
                        colSpan={1}
                        className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {book.id}
                      </td>

                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xl text-center"
                      >
                        {" "}
                        {book.title}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {book.descript}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {book.feedback}
                      </td>

                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {" "}
                        {book.username}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-bold text-red-500 lg:text-xl border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        <div className=" flex items-center justify-around">
                          <div
                            onClick={() => handleShowEdit(book.id)}
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
                            onClick={() => handleShowDelete(book.id)}
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
        {isDeletePopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg">
              <p>Bạn có chắc chắn muốn xóa khách hàng này không?</p>
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleCloseDelete}
                  className="bg-gray-300 px-4 py-2 rounded mr-2"
                >
                  Hủy
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        )}
        {isShowEdit && <UpdateContact onclose={handleCloseEdit} id={isId} />}
      </div>
    </>
  );
};

export default ListContact;
