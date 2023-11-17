import React from "react";
import BusinessItem from "./BusinessItem";

const BusinessList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => (
        <BusinessItem key={item.id} item={item} />
      ))}
      {/* li = 4개인데... 어떻게.. */}
      {/*<BusinessItem data={data} /> 이렇게도 가능한데 더 어렵게 하자
        <BusinessItem data={data} />
        <BusinessItem data={data} />
        <BusinessItem data={data} /> */}
    </ul>
  );
};

export default BusinessList;
