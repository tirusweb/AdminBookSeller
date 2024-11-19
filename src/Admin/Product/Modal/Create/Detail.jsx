import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { apiCreateDetailBook } from "../../../../Service/Product/Product";

const CreateDetail = ({ onclose , id }) => {

    console.log('id : ' , id)
  const [error, setError] = useState(null);
  const [supplier, setSupplier] = useState("");
  const [nhaxuatban, setNhaxuatban] = useState("");
  const [author, setAuthor] = useState("");
  const [hinhthuc, setHinhthuc] = useState("");
  const [namxb, setNamxb] = useState("");
  const [ngonngu, setNgonngu] = useState("");
  const [trongluong, setTrongluong] = useState("");
  const [size, setSize] = useState("");
  const [sotrang, setSotrang] = useState("");
  const [mota, setMota] = useState("");
  const [imagedt , setImagedt] = useState("");


  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("imagedt", imagedt);
    formData.append("supplier", supplier);
    formData.append("nhaxuatban", nhaxuatban);
    formData.append("author", author);
    formData.append("hinhthuc", hinhthuc);
    formData.append("namxb", namxb);
    formData.append("ngonngu", ngonngu);
    formData.append("trongluong", trongluong);
    formData.append("size", size);
    formData.append("sotrang", sotrang);
    formData.append("mota", mota);
    formData.append("id", id);
  
    // Debugging the FormData content
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  
    try {
      const response = await apiCreateDetailBook(formData);
      if (response.data.status === 1) {
        toast.success("Thêm sách thành công");
      } else {
        toast.error("Thêm sách thất bại");
      }
    } catch (error) {
      setError(error);
      toast.error("Có lỗi xảy ra!" , error);
    }
  };
  
  


  return (
    <>
      <div className="fixed z-40 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <ToastContainer position="top-right" />
        <div className="bg-white overflow-y-auto rounded shadow-lg">
          <div className=" w-[500px] py-3 rounded bg-white fixed flex items-center justify-center ">
            <h2 className=" text-center uppercase   font-bold text-xl text-black">
              Thêm chi tiết Sách
            </h2>
            <div onClick={onclose} className=" cursor-pointer relative ">
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
          <div className=" w-[700px] h-[400px] overflow-y-auto rounded mt-[60px] mb-10">
           
            <input
              type="file"
              className=" text-sm font-medium mt-2 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập tiêu đề sách..."
              onChange={(e) => setImagedt(e.target.files[0])}
            />
            <input
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập nhà cung cấp..."
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
            />
            <input
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder="Nhập nhà xuất bản... "
              value={nhaxuatban}
              onChange={(e) => setNhaxuatban(e.target.value)}
            />
            <input
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder="Nhập tác giả.."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập hình thức..."
              value={hinhthuc}
              onChange={(e) => setHinhthuc(e.target.value)}
            />
             <input
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập năm xuất bản..."
              type="number"

              value={namxb}
              onChange={(e) => setNamxb(e.target.value)}
            />
            <input
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập ngôn ngữ..."
              value={ngonngu}
              onChange={(e) => setNgonngu(e.target.value)}
            />
            <input
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập trọng lượng..."
              type="number"

              value={trongluong}
              onChange={(e) => setTrongluong(e.target.value)}
            />{" "}
            <input
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập kích thước..."
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
            <input
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập số trang..."
              type="number"
              value={sotrang}
              onChange={(e) => setSotrang(e.target.value)}
            />
            <textarea
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border
              border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập mô tả sách..."
              value={mota}
              onChange={(e) => setMota(e.target.value)}
            >
              {mota}
            </textarea>
            <div  className="flex mt-4 items-center justify-around">
              <button onClick={handleSubmit} className=" bg-red-600 hover:bg-red-700 font-bold text-white cursor-pointer rounded-lg text-sm px-6 py-3  ">
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

export default CreateDetail;
