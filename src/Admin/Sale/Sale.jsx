import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { apiDeleteVoucher, apiGetVoucher } from "../../Service/Sale/Sale";
import CreateVoucher from "./Model/Create";
import UpdateVoucher from "./Model/Edit";

const Sale = () => {
  const [voucher, setVoucher] = useState([]);
  const [error, setError] = useState(null);
  const [isShowCreate, setIsShowCreate] = useState(false);
  const [isId, setIsId] = useState("");
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isShowEdit, setIsShowEdit] = useState(false);

  const fetchVoucher = async () => {
    try {
      const response = await apiGetVoucher();
      console.log(response.data);
      if (response.data.status === 1) {
        setVoucher(response.data.books);
        console.log(response.data.books);
      } else {
        console.log(" lỗi khi gọi database");
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchVoucher();
  }, []);

  const handleShowCreate = () => {
    setIsShowCreate(true);
  };

  const handleClose = () => {
    setIsShowCreate(false);
  };

  const handleShowEdit = (id) => {
    setIsId(id);
    setIsShowEdit(true);
  };

  const handleCloseEdit = () => {
    setIsShowEdit(false);
  };

  const handleShowDelete = (id) => {
    setIsId(id);
    setIsDeletePopupOpen(true);
  };

  const handleCloseDelete = () => {
    setIsDeletePopupOpen(false);
  };

  const handleDelete = async () => {
    try {
      const response = await apiDeleteVoucher(isId);
      console.log(response);
      if (response.data.status === 1) {
        await fetchVoucher();
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
        <ToastContainer position="top-right" />
        <div className="">
          <div className=" flex flex-1  w-full items-center justify-between bg-white shadow">
            <div className="  flex py-5 items-center   justify-start ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-8 text-red-600 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>

              <h2 className=" text-red-600 bg-white w-full text-xl font-bold text-red uppercase ml-3 ">
                {" "}
                Quản lý mã giảm giá
              </h2>
            </div>
            <div
                onClick={handleShowCreate}
              className=" flex cursor-pointer items-center rounded-lg shadow-lg py-2 px-4 justify-start mr-[80px] bg-green-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h2 className=" text-white  w-full text-sm font-medium text-red uppercase ml-3 ">
                {" "}
                Thêm giảm giá
              </h2>
            </div>
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
                      Mã giảm giá
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white  border-solid px-3  text-white tracking-wider"
                    >
                      Số tiền giảm
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Đơn hàng từ
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      người dùng áp dụng
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
                  {voucher.map((cus, index) => (
                    <tr key={cus.id} className=" bg-white">
                      <td
                        colSpan={1}
                        className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {cus.idvou}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {cus.saleof}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xl text-center"
                      >
                        {" "}
                        {cus.limit}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {cus.username}
                      </td>

                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-bold text-red-500 lg:text-xl border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        <div className=" flex items-center justify-around">
                          <div
                            onClick={() => handleShowEdit(cus.idvou)}
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
                            onClick={() => handleShowDelete(cus.idvou)}
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
        {isShowCreate && <CreateVoucher onclose={handleClose} />}
        {isShowEdit && <UpdateVoucher onclose={handleCloseEdit} idvou={isId} />}
      </div>
    </>
  );
};

export default Sale;
