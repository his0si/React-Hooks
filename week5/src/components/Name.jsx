import React from "react";

function Name({ name }) {
  console.log("[Name] 렌더링");
  return <h1>{name}</h1>;
}

// TODO: React.memo를 사용하여 props가 변경되지 않으면 재렌더링을 방지