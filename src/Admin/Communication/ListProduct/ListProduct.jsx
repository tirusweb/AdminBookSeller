import React, { useState, useEffect } from "react";
import {
  apiGetProduct,
  apiGetProductByType,
} from "../../../Service/Product/Product";

const ListProduct = () => {
  const [books, setBooks] = useState([]);
  const [total, settotal] = useState(0);
  const [error, setError] = useState(null);
  const [type, setType] = useState("");
  const [bookTypes, setBookTypes] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await apiGetProduct();
        console.log(response.data);
        if (response.data.status === 1) {
          setBooks(response.data.books);
          settotal(response.data.total_quality);
          console.log(response.data.books);
        } else {
          setError(" lỗi khi call API");
        }
      } catch (error) {
        setError(" Lỗi rồi");
      }
    };

    fetchBook();
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await apiGetProductByType(type);
        console.log(response.data);
        if (response.data.status === 1) {
          setBookTypes(response.data.books);
          console.log("data type : ", response.data.books);
        } else {
          setError(response.data.msg);
        }
      } catch (error) {
        setError("Không thể tải chi tiết sách. Vui lòng thử lại.");
        console.error("Lỗi khi gọi API:", error.message);
      }
    };

    fetchBooks();
  }, [type]);
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
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>

            <h2 className=" text-red-600 bg-white w-full text-xl font-bold text-red uppercase ml-3 ">
              {" "}
              Thống kê Sách
            </h2>
          </div>
          <div className=" grid grid-cols-6 gap-2 my-2 mx-2 ">
            <div className=" col-span-2 cursor-pointer py-4 bg-white rounded shadow-lg">
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
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <p className=" font-bold text-xl ml-2 text-gray-600 ">
                  {books.length}
                </p>
              </div>
              <p className=" uppercase text-xl font-semibold text-gray-600 text-center ">
                {" "}
                Đầu sách
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
                  className="size-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>

                <p className=" font-bold text-xl ml-2 text-gray-600 ">
                  {total}
                </p>
              </div>
              <p className=" uppercase text-xl font-semibold text-gray-600 text-center ">
                {" "}
                tổng số lượng sách
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
                  className="size-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                  />
                </svg>

                <p className=" font-bold text-xl ml-2 text-gray-600 ">5</p>
              </div>
              <p className=" uppercase text-xl font-semibold text-gray-600 text-center ">
                {" "}
                thể loại sách
              </p>
            </div>
            <div className=" col-start-5 col-span-2 cursor-pointer  bg-white rounded shadow-lg">
              <div className=" flex items-center justify-center">
                <select
                  className="text-sm font-medium w-[90%] border-none outline-none  px-6 py-2 rounded"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Chọn thể loại sách...</option>
                  <option value="Tiếng Anh">Tiếng anh</option>
                  <option value="Kinh Tế">Kinh tế</option>
                  <option value="Tâm Lý - Kỹ Năng Sống">
                    Tâm Lý - Kỹ Năng Sống
                  </option>
                  <option value="Văn Học">Văn học</option>
                  <option value="Tô màu">Tô màu</option>
                </select>
              </div>
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
                      Mã Sách
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white  border-solid px-3  text-white tracking-wider"
                    >
                      Ảnh Sách
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white  border-solid px-3  text-white tracking-wider"
                    >
                      Tiêu đề
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Giá bán
                    </th>

                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Số lượng
                    </th>
                    <th
                      colSpan={1}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Giảm giá
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Thể loại
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {bookTypes.map((book, index) => (
                    <tr key={index} className=" bg-white">
                      <td
                        colSpan={1}
                        className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {book.id}
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
                        {book.price}
                      </td>

                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {" "}
                        {book.sold}
                      </td>
                      <td
                        colSpan={1}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {" "}
                        {book.sale}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {" "}
                        {book.type}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
