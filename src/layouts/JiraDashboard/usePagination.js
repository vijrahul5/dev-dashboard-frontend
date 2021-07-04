import { useEffect, useState } from "react";
import GeneralApis from "./GeneralApis";
const EntryPerPage = 10;
const usePagination = (URL, jql) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  const { getIssues } = GeneralApis();
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getIssues(URL, (pageNumber - 1) * EntryPerPage, EntryPerPage, jql).then(
      (data) => {
        let arr = data.issues.map((detail) => {
          let newItem = [
            detail.fields.issuetype.name,
            detail.key,
            detail.fields.summary,
            detail.fields.priority.name,
          ];
          return newItem;
        });
        setData(arr);
        let totalPages = Math.ceil(data.total / EntryPerPage);
        setTotalPages(totalPages);
      }
    );
  }, [pageNumber, URL, jql]);

  return {
    pageNumber,
    data,
    totalPages,
    setPageNumber,
  };
};

export default usePagination;
