import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  apiDeleteBook,
  apiDeleteDetailBook,
  apiGetDetailProduct,
} from "../../../Service/Product/Product";

const DeleteBook = ({ onclose, id }) => {
  const [ids, setId] = useState("");
  const [error, setError] = useState(null);
  console.log("id nè", id, ids);
  const fetchDetail = async () => {
    try {
      const response = await apiGetDetailProduct(id);

      if (response.data.status === 1) {
        setId(response.data.book.detailid);
      } else {
      }
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  const handleDelete = async () => {
    try {
      // Xóa detail trước
      const responseDetail = await apiDeleteDetailBook(ids);
      if (responseDetail.data.status === 1) {
        // Nếu xóa detail thành công, tiếp tục xóa book
        const responseBook = await apiDeleteBook(id);
        if (responseBook.data.status === 1) {
          toast.success("Xóa khách hàng thành công");
          await fetchDetail();
        } else {
          toast.error("Xóa không thành công");
        }
      } else {
        toast.error("Không thể xóa chi tiết sách");
      }
    } catch (error) {
      toast.error("Lỗi khi gọi API: " + error.message);
    }
  };

  return (
    <>
      <div className="fixed z-40 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <ToastContainer position="top-right" />
        <div className="bg-white overflow-y-auto rounded shadow-lg">
          <div className=" w-[300px] py-3 rounded bg-white fixed flex items-center justify-center ">
            <h2 className=" text-center uppercase font-medium text-sm text-black">
              Bạn có chắc chắn muốn xóa sách không !
            </h2>
          </div>

          <div className=" w-[300px] rounded mt-[60px] h-auto mb-10">
            <div className="flex mt-12 items-center justify-around">
              <button
                onClick={onclose}
                className=" bg-red-600 hover:bg-red-700 font-bold text-white cursor-pointer rounded-lg text-sm px-3 py-1  "
              >
                {" "}
                Hủy
              </button>
              <button onClick={handleDelete} className="bg-red-600 flex items-center hover:bg-red-700 font-bold text-white cursor-pointer rounded-lg text-sm px-3 py-1 ">
                {" "}
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeleteBook;
