import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { apiGetDetailProduct, apiUpdateDetailBook } from "../../../../Service/Product/Product";

const DetailProduct = ({ onclose, id }) => {
  console.log("id nè", id);

  const [details, setDetail] = useState([]);
  const [error, setError] = useState(null);
  const [DetailId, setDetailId] = useState("");
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


  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await apiGetDetailProduct(id);
        console.log("Data detail", response.data);

        if (response.data.status === 1) {
          setDetail(response.data.book);
          setDetailId(response.data.book.detailid);
          setSupplier(response.data.book.supplier);
          setNhaxuatban(response.data.book.nhaxuatban);
          setAuthor(response.data.book.author);
          setHinhthuc(response.data.book.hinhthuc);
          setNamxb(response.data.book.namxb);
          setNgonngu(response.data.book.ngonngu);
          setTrongluong(response.data.book.trongluong);
          setSize(response.data.book.size);
          setSotrang(response.data.book.sotrang);
          setMota(response.data.book.mota);
        } else {
          toast.error(response.data.msg); // Sửa 'message' thành 'msg'
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchDetail();
  }, [id]);


  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("detailid", DetailId); // Ensure id is included
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


    // Append image only if it's present
    if (imagedt) {
        formData.append("imagedt", imagedt);
    }
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    try {
        const response = await apiUpdateDetailBook(formData);

        if (response.data.status === 1) {
            toast.success("Update thành công");
        } else {
            toast.error("Không update được sách");
        }
    } catch (error) {
        toast.error("Lỗi API");
    }
};
  return (
    <>
      <div className="fixed z-40 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <ToastContainer position="top-right" />
        <div className="bg-white overflow-y-auto rounded shadow-lg">
          <div className=" w-[500px] py-3 rounded bg-white fixed flex items-center justify-center ">
            <h2 className=" text-center uppercase   font-bold text-xl text-black">
              Chỉnh sửa chi tiết Sách
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
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder="Mã chi tiết Sách"
              value={DetailId}
              readOnly
            />
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
              placeholder=" Nhập ngôn ngữ..."
              value={ngonngu}
              onChange={(e) => setNgonngu(e.target.value)}
            />
            <input
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập trọng lượng..."
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
              value={sotrang}
              onChange={(e) => setSotrang(e.target.value)}
            />
            <textarea
              className=" text-sm font-medium mt-4 ml-12 w-[80%] border
              border-gray-300 border-solid outline-cyan-200 px-6 py-2 rounded"
              placeholder=" Nhập kích thước..."
              value={mota}
            onChange={(e) => setMota(e.target.value)}
            >{mota}</textarea>
            <div onClick={handleUpdate} className="flex mt-4 items-center justify-around">
              <button className=" bg-red-600 hover:bg-red-700 font-bold text-white cursor-pointer rounded-lg text-sm px-6 py-3  ">
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

export default DetailProduct;
