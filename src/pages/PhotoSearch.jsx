import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { handleSearch } from "../store/searchSlice";

import store from "../store/store";
import SearchSkeleton from "../components/common/SearchSkeleton";
const PhotoSearch = () => {
  const { query } = useParams();
  const { dispatch } = store;

  // const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleSearch(query));
  }, [query]);
  const photoserachData = useSelector(
    (state) => state?.search?.data?.photoSearch
  );
  const isLoading = useSelector((state) => state?.search?.isLoading);
  return (
    <section className="serach mt-[10rem] px-[3rem]">
      <div className="wrapper md:grid md:grid-cols-2  lg:grid-cols-4 gap-2 md:gap-4 ">
        {isLoading
          ? Array(15)
              .fill(0)
              .map((val, i) => {
                return <SearchSkeleton card={photoserachData.length} key={i} />;
              })
          : photoserachData?.photos?.map((photo, i) => {
              return (
                <div key={i}>
                  <div className="photo-item mt-5 md:mt-0">
                    <img src={photo?.src?.landscape} alt="" />
                  </div>
                </div>
              );
            })}
      </div>
    </section>
  );
};

export default PhotoSearch;
