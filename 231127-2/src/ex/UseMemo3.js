import React, { useState } from "react";

const UseMemo3 = () => {
  const [list, setList] = useState(0);
  return (
    <div>
      <input type="number" />
      <button>추가</button>

      <ul>{list.map()}</ul>

      <h2>평균값:</h2>
    </div>
  );
};

export default UseMemo3;
