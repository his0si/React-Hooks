import React from "react";

function Button({ onClick, children }) {
  console.log(`[Button: ${children}] 렌더링`);
  return <button onClick={onClick}>{children}</button>;
}

// React.memo 적용하여 props 변경 없으면 재렌더링 방지
export default React.memo(Button);
