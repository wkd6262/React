const Step2 = ({
  changeInput,
  onPrev,
  onNext,
  userJob,
  userEmail,
  userGender,
  userInter,
}) => {
  return (
    <>
      <h2>Step2</h2>
      <p>
        <label htmlFor="userJob">직업</label>:
        <input
          type="text"
          id="userJob"
          value={userJob}
          name="userJob"
          onChange={changeInput}
        />
      </p>
      <p>
        <label htmlFor="userEmail">이메일</label>:
        <input
          type="email"
          id="userEmail"
          value={userEmail}
          name="userEmail"
          onChange={changeInput}
        />
      </p>
      <p>
        <label htmlFor="userGender">성별</label>:
        <input
          type="text"
          id="userGender"
          value={userGender}
          name="userGender"
          onChange={changeInput}
        />
      </p>
      <p>
        <label htmlFor="userInter">관심분야</label>:
        <input
          type="text"
          id="userInter"
          value={userInter}
          name="userInter"
          onChange={changeInput}
        />
      </p>
      <p>
        <button onClick={onPrev}>이전</button>
        <button onClick={onNext}>이후</button>
      </p>
    </>
  );
};

export default Step2;
