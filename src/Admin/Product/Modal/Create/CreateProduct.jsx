import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { apiCreateBook } from "../../../../Service/Product/Product";
import CreateDetail from "./Detail";

const CreateProduct = ({ onclose }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [priceold, setPriceold] = useState("");
  const [sold, setSold] = useState("");
  const [sale, setSale] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(null);
  const [id , setId] = useState("");
  const [isShowCreteDetail, setIsShowCreteDetail] = useState(false);


  // const handleSubmit = async () => {
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("image", image); // Thêm ảnh vào FormData
  //   formData.append("price", price);
  //   formData.append("priceold", priceold);
  //   formData.append("sold", sold);
  //   formData.append("sale", sale);
  //   formData.append("type", type);

  //   console.log("data : " + formData);
  //   try {
  //     const response = await apiCreateBook(formData); // Gửi FormData
  //     if (response.data.status === 1) {
  //       toast.success("Thêm sách thành công");
  //     } else {
  //       toast.error("Thêm sách thất bại");
  //     }
  //   } catch (error) {
  //     setError(error);
  //   }
  // };


  const handleOpenDetails = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image); // Thêm ảnh vào FormData
    formData.append("price", price);
    formData.append("priceold", priceold);
    formData.append("sold", sold);
    formData.append("sale", sale);
    formData.append("type", type);

    try {
      const response = await apiCreateBook(formData); // Gửi FormData
      if (response.data.status === 1) {
        setId(response.data.id); 
        setIsShowCreteDetail(true);
      } else {
      }
    } catch (error) {
      setError(error);
    }
  }

  const handleCloseDetails = () => {
    setIsShowCreteDetail(false);
  }

  return (
    <>
      <div className="fixed z-40 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <ToastContainer position="top-right" />
        <div className="bg-white overflow-y-auto rounded shadow-lg">
          <div className=" w-[500px] py-3 rounded bg-white fixed flex items-center justify-center ">
            <h2 className=" text-center uppercase   font-bold text-xl text-black">
              Chỉnh sửa Sách
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

          <div className=" w-[500px] rounded mt-[60px] h-auto mb-10">
            <input
              className=" text-sm font-medium mt-2 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập tiêu đề sách..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="file"
              className=" text-sm font-medium mt-2 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập tiêu đề sách..."
              onChange={(e) => setImage(e.target.files[0])}
            />
            <input
              className=" text-sm font-medium mt-2 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder="Nhập giá sách "
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              className=" text-sm font-medium mt-2 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder="Nhập giá cũ sách.."
              type="number"
              
              value={priceold}
              onChange={(e) => setPriceold(e.target.value)}
            />
            <input
              className=" text-sm font-medium mt-2 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder="Nhập giảm giá..."

              value={sale}
              onChange={(e) => setSale(e.target.value)}
            />
            <input
              className=" text-sm font-medium mt-2 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder="Nhập số lượng..."
              type="number"

              value={sold}
              onChange={(e) => setSold(e.target.value)}
            />
            <select
              className="text-sm font-medium mt-2 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
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

            <div className="flex mt-4 items-center justify-around">
             
              <div onClick={handleOpenDetails} className="bg-red-600 flex items-center hover:bg-red-700 font-bold text-white cursor-pointer rounded-lg text-sm px-6 py-3">
                <button className="   "> Chi tiết sách</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 ml-2 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {isShowCreteDetail && <CreateDetail onclose={handleCloseDetails} id = {id} />}
      </div>
    </>
  );
};

export default CreateProduct;
