import React, { useEffect, useState } from "react";
import { apiGetBill, apiGetBillDate } from "../../../Service/Bill/Bill";
import { toast, ToastContainer } from "react-toastify";

const Revenua = () => {
  const [bill, setBill] = useState(0);
  const [quality, setQuality] = useState(0);
  const [error, setError] = useState(null);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [bills, setBills] = useState([]);

  const handleDate = async () => {
    try {
      const response = await apiGetBillDate(dateFrom, dateTo);
      console.log("data:", response.data);
      if(dateTo < dateFrom){
        toast.error("Ngày kết thúc phải sau ngày bắt đầu");
        return;
      }
      if(dateFrom === "" || dateFrom === ""){
        toast.error("Vui lòng chọn ngày");
        return;
      }

      if (response.data.status === 1) {
        setBill(response.data.total_sum);
        setQuality(response.data.total_quantity);
        console.log(response.data.total_quantity)
        setBills(response.data.data);
      } else {
        setError("Không có sách nào trong danh sách.");
      }
    } catch (error) {
      setError("Lỗi khi tải dữ liệu: " + error.message);
    }
  };

  const fetchBook = async () => {
    try {
      const response = await apiGetBill();
      if (response.data.status === 1) {
        setBill(response.data.total_sum);
        setQuality(response.data.total_quantity);
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



  return (
    <>
      <div className=" w-[100%]">
      <ToastContainer position="top-right"/>
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
              Doanh thu bán hàng
            </h2>
          </div>
          <div className=" grid grid-cols-4 gap-2 my-2 mx-2 ">
            <div onClick={fetchBook} className=" col-span-2 cursor-pointer py-4 bg-white rounded shadow-lg">
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
                  {Number(bill).toLocaleString("vi-VN")} đ
                </p>
              </div>
              <p className=" uppercase text-xl font-semibold text-gray-600 text-center ">
                {" "}
                Doanh thu bán hàng
              </p>
            </div>
            <div className=" col-span-2 cursor-pointer py-4 bg-white rounded shadow-lg">
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
                  {quality}
                </p>
              </div>
              <p className=" uppercase text-xl font-semibold text-gray-600 text-center ">
                {" "}
                Số lượng đã bán
              </p>
            </div>
            <div className=" rounded shadow-lg col-start-2 col-span-1 bg-white ">
              <p className=" text-sm font-medium text-black  text-center ">
                {" "}
                từ ngày{" "}
              </p>
              <input
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className=" w-full px-4 py-2"
                type="date"
              />
            </div>
            <div className=" rounded shadow-lg col-start-3 col-span-1 bg-white ">
              <p className=" text-sm font-medium text-black  text-center ">
                {" "}
                đến ngày
              </p>
              <input
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className=" w-full px-4 py-2"
                type="date"
              />
            </div>
            <div
              onClick={handleDate}
              className=" flex cursor-pointer hover:bg-red-700 items-center justify-center rounded shadow-lg col-start-4 col-span-1 bg-red-600 "
            >
              <button className="text-xl font-bold  text-white ">
                {" "}
                Lọc doanh thu
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-2 grid-cols-10 mx-2 grid gap-2 ">
        <h2 className=" col-span-10 bg-white text-gray-600 py-1 px-6 text-xl font-semibold  "> Sản phẩm bán được trong thời gian này </h2>
            <div className=" overflow-x-auto  col-span-10 w-full">
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
                   
                  </tr>
                </thead>
                <tbody className="">
                  {bills.map((book, index) => (
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
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        {/* {isShowEdit && <UpdateBill onclose={handleCloseEdit} idbill={isId} />} */}
      </div>
    </>
  );
};

export default Revenua;
