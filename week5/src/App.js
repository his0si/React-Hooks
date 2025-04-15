import React, { useState, useCallback, useMemo } from "react";
import Name from "./components/Name";
import Text from "./components/Text";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(170);

  // useCallback: 상태 변경 시 함수 내부에서 함수형 업데이트를 사용하여 의존성 없이 처리
  // 따라서 함수의 참조는 최초 생성 이후 변경되지 않습니다.
  const incrementWeight = useCallback(() => {
    setWeight((prevWeight) => prevWeight + 1);
    console.log("[incrementWeight] 함수 실행");
  }, []);  // 빈 배열 → 함수 참조 고정

  const incrementHeight = useCallback(() => {
    setHeight((prevHeight) => prevHeight + 1);
    console.log("[incrementHeight] 함수 실행");
  }, []);  // 빈 배열 → 함수 참조 고정

  // useMemo를 사용해 각각의 Text 컴포넌트를 메모이제이션
  // weight 또는 height가 변경될 때만 해당 컴포넌트가 재평가 됩니다.
  const memoizedWeightText = useMemo(() => {
    console.log("Rendering Weight Text");
    return <Text title="Weight" value={weight} />;
  }, [weight]);

  const memoizedHeightText = useMemo(() => {
    console.log("Rendering Height Text");
    return <Text title="Height" value={height} />;
  }, [height]);

  return (
    <div className="App">
      <Name name="이화연" />

      {memoizedWeightText}
      {memoizedHeightText}

      <Button onClick={incrementWeight}>Increase Weight</Button>
      <Button onClick={incrementHeight}>Increase Height</Button>
    </div>
  );
}

export default App;
