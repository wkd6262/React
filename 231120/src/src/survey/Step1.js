const Step1 = ({ changeInput, data }) => {
  const { userName, userAge, userAddr, userTel } = data;
  return (
    <>
      <p>
        <label htmlFor="userName">이름</label>:
        <input
          type="text"
          id="userName"
          // 부모 컴포넌트에서 받은 props
          value={userName}
          name="userName"
          onChange={changeInput}
        />
      </p>
      <p>
        <label htmlFor="userAge">나이</label>:
        <input
          type="text"
          id="userAge"
          value={userAge}
          name="userAge"
          onChange={changeInput}
        />
      </p>
      <p>
        <label htmlFor="userAddr">주소</label>:
        <input
          type="text"
          id="userAddr"
          value={userAddr}
          name="userAddr"
          onChange={changeInput}
        />
      </p>
      <p>
        <label htmlFor="userTel">연락처</label>:
        <input
          type="tel"
          id="userTel"
          value={userTel}
          name="userTel"
          onChange={changeInput}
        />
      </p>
      <button onClick>다음</button>
    </>
  );
};

export default Step1;
