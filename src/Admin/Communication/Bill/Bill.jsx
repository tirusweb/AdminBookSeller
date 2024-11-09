import React, { useEffect, useState } from "react";
import { apiGetBillByStatus, apiGetBillS } from "../../../Service/Bill/Bill";
import UpdateBill from "./Model/Edit";

const ListBill = () => {
  const [bill, setBill] = useState([]);
  const [dagiao, setDagiao] = useState("");
  const [dadat, setDaDat] = useState("");
  const [daHuy, setDaHuy] = useState("");
  const [error, setError] = useState(null);
  const [status , setStatus] = useState("");
  const [isId, setIsId] = useState("");
  const [isShowEdit, setIsShowEdit] = useState(false);


  useEffect(() => {
    const fetBill = async () => {
      try {
        const response = await apiGetBillS();
        console.log(response.data);
        if (response.data.status === 1) {
          setBill(response.data.books);
          setDaDat(response.data.total_quality["Đã đặt"]);
          setDaHuy(response.data.total_quality["Đã hủy"]);
          setDagiao(response.data.total_quality["Đã giao"]);
        } else {
          setError("Loi");
        }
      } catch (error) {
        setError("Loi");
      }
    };

    fetBill();
  }, []);

  const handleBillAll = async () => {
    try {
      const response = await apiGetBillS();
      console.log(response.data);
      if (response.data.status === 1) {
        setBill(response.data.books);
      
      } else {
        setError("Loi");
      }
    } catch (error) {
      setError("Loi");
    }
  }

  const handleByStatus = async (Status) => {
    setStatus(Status); // Set the status when the button is clicked

    try {
      const response = await apiGetBillByStatus(Status);
      console.log(response.data);
      if (response.data.status === 1) {
        setBill(response.data.books);
      } else {
        setError("Lỗi");
      }
    } catch (error) {
      setError("Lỗi");
    }
  };

  const handleShowEdit = (id) => {
    setIsId(id);
    setIsShowEdit(true);
  };

  const handleCloseEdit = () => {
    setIsShowEdit(false);
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
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 ml-4 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"
              />
            </svg>

            <h2 className=" text-red-600 bg-white w-full text-xl font-bold text-red uppercase ml-3 ">
              {" "}
              Thống kê Hóa đơn
            </h2>
          </div>
          <div className=" grid grid-cols-8 gap-2 my-2 mx-2 ">
            <div onClick={() => handleBillAll()} className=" col-span-2 cursor-pointer py-4 bg-white rounded shadow-lg">
              <div className=" pt-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                  />
                </svg>

                <p className=" font-bold text-xl ml-2 text-gray-600 ">
                  {bill.length}
                </p>
              </div>
              <p className=" uppercase text-xl font-semibold text-gray-600 text-center ">
                {" "}
                Hóa đơn
              </p>
            </div>
            <div onClick={() => handleByStatus("Đã giao")} className=" col-span-2 cursor-pointer py-4 bg-white rounded shadow-lg">
              <div className=" pt-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6 text-red-600 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p className=" font-bold text-xl ml-2 text-gray-600 ">
                  {dagiao}
                </p>
              </div>
              <p className=" uppercase text-xl font-semibold text-gray-600 text-center ">
                {" "}
                Đã giao
              </p>
            </div>
            <div onClick={() => handleByStatus("Đã đặt")} className=" col-span-2 cursor-pointer py-4 bg-white rounded shadow-lg">
              <div className=" pt-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                  />
                </svg>

                <p className=" font-bold text-xl ml-2 text-gray-600 ">
                  {dadat}
                </p>
              </div>
              <p className=" uppercase text-xl font-semibold text-gray-600 text-center ">
                {" "}
                Đã Đặt
              </p>
            </div>
            <div onClick={() => handleByStatus("Đã hủy")} className=" col-span-2 cursor-pointer py-4 bg-white rounded shadow-lg">
              <div className=" pt-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>

                <p className=" font-bold text-xl ml-2 text-gray-600 ">
                  {daHuy}
                </p>
              </div>
              <p className=" uppercase text-xl font-semibold text-gray-600 text-center ">
                {" "}
                Đã hủy
              </p>
            </div>
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
                      Mã đơn
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white  border-solid px-3  text-white tracking-wider"
                    >
                      Ảnh sách
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white  border-solid px-3  text-white tracking-wider"
                    >
                      Tiêu đề
                    </th>
                    <th
                      colSpan={2}
                      className="text-left py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      số lượng
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Phí ship
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      phương thức
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Trang thái
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2  border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      tổng tiền
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      khách hàng
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Ngày đặt
                    </th>
                    {/* <th
                      colSpan={2}
                      className="text-center py-2  border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Công cụ
                    </th> */}
                  </tr>
                </thead>
                <tbody className="">
                  {bill.map((book, index) => (
                    <tr key={index} className=" bg-white">
                      <td
                        colSpan={1}
                        className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {book.idbill}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        <img
                          className=" w-[100px]"
                          src={`/image/${book.image}`}
                          alt="Ảnh sản phẩm"
                        />
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
                        {book.quality}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {book.ship}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {" "}
                        {book.method}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {" "}
                        {book.status}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {" "}
                        {book.total}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {" "}
                        {book.idcus}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {" "}
                        {book.updated_at}
                      </td>
                      {/* <td
                        colSpan={2}
                        className="py-3 pl-2 font-bold text-red-500 lg:text-xl border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        <div className=" flex items-center justify-around">
                          <div
                            onClick={() =>
                              handleShowEdit(book.idbill)
                            }
                            className={` ${daHuy === "" ? " hidden" : " block"} ${dadat === "" ? " hidden" : " block"}   cursor-pointer`} 
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
                          <div className=" cursor-pointer">
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
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {isShowEdit && <UpdateBill onclose={handleCloseEdit} idbill={isId} />}

      </div>
    </>
  );
};

export default ListBill;
