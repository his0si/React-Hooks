import React from "react";

function Text({ title, value }) {
  console.log(`[Text: ${title}] 렌더링`);
  return (
    <p>
      {title}: {value}
    </p>
  );
}

// React.memo 적용
export default React.memo(Text);
