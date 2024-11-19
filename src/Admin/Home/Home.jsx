import React, { useEffect, useState } from "react";
import { apiGetUser } from "../../Service/User/User";
import { apiGetProduct } from "../../Service/Product/Product";
import { apiGetContact } from "../../Service/Contact/Contact";
import { apiGetBill } from "../../Service/Bill/Bill";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState([]);
  const [books, setBooks] = useState([]);
  const [contact, setContact] = useState([]);
  const [bill, setBill] = useState([]);
  const [error, setError] = useState(null);
  //API user
  useEffect(() => {
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

    fetchUser();
  }, []);

  // APi Số lượng sản phẩm
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

  // api contatc

  useEffect(() => {
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

    fetchBook();
  }, []);

  // Api get tổng tiền
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await apiGetBill();
        console.log(response.data);
        if (response.data.status === 1) {
          setBill(response.data.total_sum);
        } else {
          setError(" lỗi khi call API");
        }
      } catch (error) {
        setError(" Lỗi rồi");
      }
    };

    fetchBook();
  }, []);

  const navigation = useNavigate();

  

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
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
              />
            </svg>
            <h2 className=" text-red-600 bg-white w-full text-xl font-bold text-red uppercase ml-3 ">
              {" "}
              Trang chủ Admin
            </h2>
          </div>
          <div className=" grid grid-cols-8 gap-2 my-2 mx-2 ">
            <div onClick={() => navigation("/quan-ly-nguoi-dung")} className=" col-span-2 cursor-pointer py-4 bg-white rounded shadow-lg">
              <div  className=" pt-4 flex items-center justify-center">
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
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                <p className=" font-bold text-xl ml-2 text-gray-600 ">
                  {user.length}
                </p>
              </div>
              <p className=" text-xl font-semibold text-gray-600 text-center ">
                {" "}
                Người Dùng
              </p>
            </div>
            <div onClick={() => navigation("/quan-ly-sach")} className=" col-span-2 cursor-pointer py-4 bg-white rounded shadow-lg">
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
              <p className=" text-xl font-semibold text-gray-600 text-center ">
                {" "}
                Sản phẩm
              </p>
            </div>
            <div onClick={() => navigation("/thong-ke-lien-he")} className=" col-span-2 cursor-pointer py-4 bg-white rounded shadow-lg">
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
                    d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>

                <p className=" font-bold text-xl ml-2 text-gray-600 ">
                  {contact.length}
                </p>
              </div>
              <p className=" text-xl font-semibold text-gray-600 text-center ">
                {" "}
                Liện hệ
              </p>
            </div>
            <div onClick={() => navigation("/thong-ke-doanh-thu")} className=" col-span-2 cursor-pointer py-4 bg-white rounded shadow-lg">
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
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>

                <p className=" font-bold text-xl ml-2 text-gray-600 ">
                  {" "}
                  {Number(bill).toLocaleString("vi-VN")} đ
                </p>
              </div>
              <p className=" text-xl font-semibold text-gray-600 text-center ">
                {" "}
                Tổng doanh thu
              </p>
            </div>
          </div>
          <div className=" grid-cols-10 mx-2 grid gap-2 ">
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
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Họ tên người dùng
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      colSpan={2}
                      className="text-center py-2 border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                    >
                      Mật khẩu
                    </th>
                  
                  </tr>
                </thead>
                <tbody>
                  {user.map((users, index) => (
                    <tr
                      key={index}
                      className=" bg-white"
                    >
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
                        colSpan={2}
                        className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xl text-center"
                      >
                        {" "}
                        {users.fullname}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {users.email}
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                      >
                        {" "}
                        {users.pass}
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

export default Home;
