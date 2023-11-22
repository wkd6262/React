import surveyStyle from "./survey.module.css";
import Step1 from "./Step1";
import { useState } from "react";
import Step2 from "./Step2";

const Main = () => {
  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");
  // const [userAddr, setUserAddr] = useState("");
  // const [userTel, setUserTel] = useState("");
  const [data, setData] = useState({
    userName: "",
    userAge: "",
    userAddr: "",
    userTel: "",
    userJob: "",
    userEmail: "",
    userGender: "",
    userInter: "",
  });

  const changeInput = (e) => {
    const { value, name } = e.target;
    // 내가 클릭한 input의 name이 가진 vaule의 값을 가져와 data에게 반환
    // 하나의 함수로 모든 input의 value 값을 가져올 수 있게 됨
    setData({
      [name]: value,
    });
  };

  return (
    <div className={surveyStyle.wrapper}>
      <Step1 changeInput={changeInput} data={data} />
      <Step2 />
    </div>
  );
};

export default Main;
