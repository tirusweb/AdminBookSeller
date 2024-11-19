import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { apiGetProduct, apiSearchName } from "../../Service/Product/Product";
import EditProduct from "./Modal/Edit";
import { type } from "@testing-library/user-event/dist/type";
import CreateProduct from "./Modal/Create/CreateProduct";
import DeleteBook from "./Modal/Delete";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [data, setData] = useState("");
  const [modalDelete, setModalDelete] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await apiGetProduct();
        console.log(response.data);
        if (response.data.status === 1) {
          setBooks(response.data.books);
        } else {
          setError(" lỗi khi call API");
        }
      } catch (error) {
        setError(" Lỗi rồi");
      }
    };

    fetchBook();
  }, []);

  const handleShowCraete = () => {
    setShowCreate(true);
  };
  const handleCloseCreate = () => {
    setShowCreate(false);
  };

  // edit
  const handleShowEdit = (id) => {
    setData(id);
    setShowEdit(true);
  };

  const handleClose = () => {
    setShowEdit(false);
  };

  //dellete
  const handleShowDelete = (id) => {
    setData(id);
    setModalDelete(true);
  };

  const handleCloseDelete = () => {
    setModalDelete(false);
  };
  const handleSearch = async () => {
    try {
      const response = await apiSearchName(title);
      console.log(response.data);
      if (response.data.status === 1) {
        setBooks(response.data.books);
      } else {
        setError(" lỗi khi call API");
      }
    } catch (error) {
      setError(" Lỗi rồi");
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
                className="size-8 ml-4 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>

              <h2 className=" text-red-600 bg-white w-full text-xl font-bold text-red uppercase ml-4 ">
                {" "}
                Quản lý Sách
              </h2>
            </div>

            <div className="flex items-center justify-around py-2 border border-solid rounded-lg border-gray-400">
              <input
                className="ml-2 flex-1 text-sm px-2 outline-none border-none "
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Tìm kiếm sản phẩm ..."
              />
              <div
                onClick={handleSearch}
                className=" bg-red-700 px-4 mr-2 rounded py-1 hover:bg-red-600 cursor-pointer "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-4 font-bold text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
            <div
              onClick={handleShowCraete}
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
                Thêm sách
              </h2>
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
                      Giá cũ
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
                    <th
                      colSpan={2}
                      className="text-center py-2  border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Công cụ
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {books.map((book, index) => (
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
                        {book.priceold}
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
        {showEdit && <EditProduct onClose={handleClose} ids={data} />}
        {showCreate && <CreateProduct onclose={handleCloseCreate} />}
        {modalDelete && <DeleteBook onclose={handleCloseDelete} id={data} />}
        {/* {isModalEdit && <ModalEdit onClose={HandleClose} username={username} />}
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
        )} */}
      </div>
    </>
  );
};

export default Product;
