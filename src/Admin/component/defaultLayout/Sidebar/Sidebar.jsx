import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../image/image.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isDropdownEdu, setIsDropdownEdu] = useState(false);
  const [isSign, setIsSign] = useState(false);
  const [isTuition, setIsTuition] = useState(false);
  const [isSetting, setIsSetting] = useState(false);
  const navigate = useNavigate();
  const toggleDropDown = () => {
    setIsDropdown(!isDropdown);
    setIsDropdownEdu(false);
    setIsSign(false);
    setIsTuition(false);
    setIsSetting(false);
  };
  const toggleDropDownEdu = () => {
    setIsDropdownEdu(!isDropdownEdu);
    setIsDropdown(false);
    setIsSign(false);
    setIsTuition(false);
    setIsSetting(false);
  };
  const toggleDropDownSign = () => {
    setIsSign(!isSign);
    setIsDropdown(false);
    setIsDropdownEdu(false);
    setIsTuition(false);
    setIsSetting(false);
  };
  const toggleDropDownTuition = () => {
    setIsTuition(!isTuition);
    setIsDropdown(false);
    setIsDropdownEdu(false);
    setIsSign(false);
    setIsSetting(false);
  };
  const toggleDropDownSetting = () => {
    setIsSetting(!isSetting);
    setIsTuition(false);
    setIsDropdown(false);
    setIsDropdownEdu(false);
    setIsSign(false);
  };

  const handleLogout = () => {
    // Clear the authentication token from localStorage
    localStorage.removeItem("token");
    // Redirect to the login page
    navigate("/login");
  };

  return (
    <>
      <div className=" h-screen bg-white shadow-lg">
        <div className="">
          <ul>
            <li className="flex items-center justify-start pl-2 py-2 border-solid border-gray-500 border-b">
              <Link to="/">
                <img
                  className="pl-4 h-[56px] mt-1 w-auto object-cover"
                  src={logo}
                  alt="Logo Bán Sách"
                />
              </Link>
              <p className=" uppercase mt-6 font-bold text-xl ml-1 text-red-500">
                {/* Book HUH */}
              </p>
            </li>
            <li className="flex items-center hover:bg-red-200 justify-start pl-2 py-2 border-solid border-gray-500 border-b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-4 text-red-600 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <a
                href="/"
                className="uppercase text-gray-600 text-sm font-semibold pl-2"
              >
                Trang chủ
              </a>
            </li>
            <li
              onClick={toggleDropDown}
              className="  block items-center justify-start x border-solid border-gray-500 border-b"
            >
              <div className=" pl-2 py-2 text-gray-600 hover:bg-red-200  flex items-center justify-between">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-4 text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>

                  <a
                    href="/quan-ly-nguoi-dung"
                    className="text-sm  font-semibold uppercase pl-2"
                  >
                    Quản lý người dùng
                  </a>
                </div>
              </div>
            </li>
            <li
              onClick={toggleDropDownTuition}
              className="  block items-center justify-start x border-solid border-gray-500 border-b"
            >
              <div className=" pl-2 py-2 hover:bg-red-200 flex items-center justify-between">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.0}
                    stroke="currentColor"
                    className="size-4 text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>

                  <p className="text-sm text-gray-600 font-semibold uppercase pl-2">
                    Cập nhật thông tin
                  </p>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-4 text-red-600 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <ul
                className={` cursor-pointer text-gray-600 font-medium h-auto py-2 ${
                  isTuition ? "block translate-y-auto" : "hidden"
                }`}
              >
                <li className="py-2 pl-4 text-sm hover:bg-red-200">
                  <Link
                    to="/quan-ly-khach-hang"
                    className="text-inherit no-underline"
                  >
                    Thông tin khách hàng
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-red-200">
                  <Link to="/quan-ly-sach" className="text-inherit no-underline">
                    Thông tin sách
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-red-200">
                  <Link
                    to="/quan-ly-thong-bao"
                    className="text-inherit no-underline"
                  >
                    Thông tin thông báo
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-red-200">
                  <Link
                    to="/quan-ly-giam-gia"
                    className="text-inherit no-underline"
                  >
                    Thông tin giảm giá
                  </Link>
                </li>
              </ul>
            </li>
            <li
              onClick={toggleDropDownEdu}
              className="  block items-center justify-start x border-solid border-gray-500 border-b"
            >
              <div className=" pl-2 py-2 hover:bg-red-200 flex items-center justify-between">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.0}
                    stroke="currentColor"
                    className="size-4 text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>

                  <p className="text-sm text-gray-600 font-semibold uppercase pl-2">
                    Quản lý thống kê
                  </p>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-4 text-red-600 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <ul
                className={` cursor-pointer text-gray-600 font-medium h-auto py-2 ${
                  isDropdownEdu ? "block translate-y-auto" : "hidden"
                }`}
              >
                <li className="py-2 pl-4 text-sm hover:bg-red-200">
                  <Link
                    to="/thong-ke-sach"
                    className="text-inherit no-underline"
                  >
                    Danh sách sản phẩm
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-red-200">
                  <Link to="/thong-ke-lien-he" className="text-inherit no-underline">
                    danh sách liên hệ
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-red-200">
                  <Link
                    to="/thong-ke-hoa-don"
                    className="text-inherit no-underline"
                  >
                    hóa đơn khách hàng
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-red-200">
                  <Link
                    to="/thong-ke-doanh-thu"
                    className="text-inherit no-underline"
                  >
                    doanh thu
                  </Link>
                </li>
              </ul>
            </li>

            <li
              onClick={toggleDropDownSetting}
              className="  block items-center justify-start x border-solid border-gray-500 border-b"
            >
              <div className=" pl-2 py-2 hover:bg-red-200 flex items-center justify-between">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-4 text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <p className="text-sm text-gray-600 font-semibold uppercase pl-2">
                    Cài đặt
                  </p>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-4 text-red-600 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <ul
                className={` cursor-pointer text-gray-600 font-medium h-auto py-2 ${
                  isSetting ? "block translate-y-auto" : "hidden"
                }`}
              >
                <li className="py-2 pl-4 text-sm hover:bg-red-200">
                  <p onClick={handleLogout} className="text-inherit no-underline">
                    Đăng xuất
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
