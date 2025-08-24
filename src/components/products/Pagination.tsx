interface IPagination
{
    currentPage:number;
    totalPages:number;
        setCurrentPage:React.Dispatch<React.SetStateAction<number>>;
}

const Pagination=(param:IPagination)=>{
    return (<>
         <div className="flex justify-center items-center gap-2 mt-10">
        <button
          disabled={param.currentPage === 1}
          onClick={() => param.setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          ← Prev
        </button>

        {Array.from({ length: param.totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            onClick={() => param.setCurrentPage(idx + 1)}
            className={`px-4 py-2 rounded ${
              param.currentPage === idx + 1
                ? "bg-green-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          disabled={param.currentPage === param.totalPages}
          onClick={() => param.setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </>)
}
export default Pagination;