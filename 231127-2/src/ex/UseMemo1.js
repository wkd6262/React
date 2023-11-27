import React, { useMemo, useState } from "react";

const UseMemo1 = () => {
  const [difficult, setDifficult] = useState(0);
  const [easy, setEasy] = useState(0);

  //렌더링 될 때 마다 새로운 값을 구하기 때믄에 오래 걸림
  // 복잡한 계산기.입력값에 +1000 되어 출력

  const difficultResult = useMemo(() => {
    return difficult + 1000;
  }, [difficult]);
  const easyResult = useMemo(() => {
    return easy + 1;
  }, [easy]);

  return (
    <div>
      <h2>useMemo</h2>
      <ul>
        <li>렌더링 성능 최적화를 위해 사용</li>
        <li>
          기존 연산 값을 저장한 뒤 동일한 값 입력시 재계산 대신 캐시된 값을 반환
        </li>
        <li>
          <p>useMemo(()=>{"{계산 비용이 큰 함수}"},[의존성배열])</p>
          의존성 배열값이 변경되지 않으면 이전의 결과값을 반환하며 다시 계산하지
          않음
        </li>
        <li>useMemo는 값을, useCallback은 함수 반환</li>
      </ul>
      <hr />
      <h2>쉬운 계산기</h2>
      <input
        type="number"
        value={easy}
        onChange={(e) => setEasy(parseInt(e.target.value))}
      />
      <strong>+1 = {easyResult}</strong>
      <h2>어려운 계산기</h2>
      <input
        type="number"
        value={difficult}
        onChange={(e) => setDifficult(parseInt(e.target.value))}
      />
      <strong>+1000 = {difficultResult}</strong>
    </div>
  );
};

export default UseMemo1;

/* import React, { useMemo, useState } from "react";

const UseMemo1 = () => {
  const [easy, setEasy] = useState(0);
  const [hard, setHard] = useState(0);
  const easyResult = useMemo(() => {
    return easy + 1;
  }, [easy]);

  const hardResult = useMemo(() => {
    return hard + 1000;
  }, [hard]);
  return (
    <div>
      <h2>쉬운계산기</h2>
      <input
        type="number"
        value={easy}
        onChange={(e) => setEasy(parseInt(e.target.value))}
      />{" "}
      + 1 ={easyResult}
      <h2>어려운계산기</h2>
      <input
        type="number"
        value={hard}
        onChange={(e) => setHard(parseInt(e.target.value))}
      />{" "}
      + 1000 ={hardResult}
    </div>
  );
};

export default UseMemo1; */
