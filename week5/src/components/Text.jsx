import React from "react";

function Text({ title, value }) {
  console.log(`[Text: ${title}] 렌더링`);
  return (
    <p>
      {title}: {value}
    </p>
  );
}

// TODO: React.memo를 사용하여 props가 변경되지 않으면 재렌더링을 방지