import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { getPage } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";

const PaginationCom = () => {
  const handlePageClick = (data) => {
    
    dispatch(getPage(data.selected +1));

  };

  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
    setPageCount(pages);
  }, []);


  

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      renderOnZeroPageCount={null}
      className={"list-style-none mb-9 flex h-[32px]"}
      pageLinkClassName={
        "block rounded-full shadow-sm px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-info-300  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
      }
      previousLinkClassName={
        "block rounded-full bg-transparent hover:bg-neutral-300 px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
      }
      nextLinkClassName={
        "block rounded-full bg-transparent hover:bg-neutral-300 px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
      }
      breakLinkClassName={
        "block rounded-full bg-transparent shadow-sm px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-info-300  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
      }
      activeLinkClassName={
        "bg-info-900 hover:bg-info-800 w-full h-full font-medium text-white dark:bg-neutral-900 overflow-hidden whitespace-nowrap [clip:rect(0,0,0,0)]"
      }
    />
  );
};

export default PaginationCom;
