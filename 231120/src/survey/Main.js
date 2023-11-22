import surveyStyle from "./survey.module.css";
import Step1 from "./Step1";
import { useState } from "react";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

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
  const [step, setStep] = useState(1);

  const changeInput = (e) => {
    const { value, name } = e.target;
    // 내가 클릭한 input의 name이 가진 vaule의 값을 가져와 data에게 반환
    // 하나의 함수로 모든 input의 value 값을 가져올 수 있게 됨
    setData({
      ...data,
      [name]: value,
    });
  };

  // 페이지 이후
  const onNext = () => {
    setStep(step + 1);
  };

  // 페이지 이전
  const onPrev = () => {
    setStep(step - 1);
  };

  const { userName } = data;

  return (
    <div className={surveyStyle.wrapper}>
      {step === 1 && (
        <Step1 changeInput={changeInput} data={data} onNext={onNext} />
      )}
      {step === 2 && (
        <Step2
          changeInput={changeInput}
          data={data}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
      {step === 3 && <Step3 onPrev={onPrev} onNext={onNext} {...data} />}
      {step === 4 && <Step4 userName={userName} />}
    </div>
  );
};

export default Main;
