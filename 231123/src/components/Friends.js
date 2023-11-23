import React, { useCallback, useRef, useState } from "react";
import FriendsList from "./FriendsList";
import FriendsBtn from "./FriendsBtn";
import FriendsInput from "./FriendsInput";

//배열을 넣었으니 이제 여기서 가지고 논다.
import dataList from "../assets/DB/catData";

const Friends = () => {
  // catData는 useState안에서 반응하다.
  const [data, setData] = useState(dataList);
  //토글 !
  const [isChk, setIsChk] = useState(false);
  const no = useRef(dataList.length + 1);

  //체크박스
  //내가 체크한 값을 돌려받는다?
  // isChk는 이제 토글 상태가 되어버림
  const changeInput = useCallback((e) => {
    const { checked } = e.target;
    setIsChk(checked);
  }, []);

  //추가
  const onAdd = (form) => {
    form.id = no.current++;
    setData([...data, form]);
  };

  //삭제
  const onDel = (id) => {
    // id만 빼고 반환
    setData(data.filter((item) => item.id !== id));
  };
  //모두삭제
  const onRemove = () => {
    //setData의 변수값을 통해 ([])빈 배열 데이터를 불러옴
    setData([]);
  };
  //복구
  const onReset = () => {
    //setData의 변수값을 통해 원래 상태값을 불러옴
    setData(dataList);
  };

  return (
    <div>
      {/* 고양이 데이터의 갯수 세기 */}
      <h2>고양이 친구들 : {data.length} 마리</h2>

      {/* 데이터를 다 넘길것임 */}
      <FriendsList data={data} onDel={onDel} />
      {/* 이름이 왜 같냐? -> 그냥 관습적으로 똑같이 하는거다. 리셋은리셋 리무브는 리무브 알아보기쉽게 */}
      <FriendsBtn onRemove={onRemove} onReset={onReset} />

      <label htmlFor="chk">
        {/* checked - true 체크 상태 false 체크풀림*/}
        <input
          type="checkbox"
          id="chk"
          checked={isChk}
          onChange={changeInput}
        />
        고양이 추가
      </label>
      {isChk && <FriendsInput onAdd={onAdd} />}
    </div>
  );
};

export default Friends;
