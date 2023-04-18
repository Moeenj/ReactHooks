import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';

const CounterWithLimits = () => {
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(10);
  const [minCount, setMinCount] = useState(-10);

  const incrementCount = () => {
    if (count < maxCount) {
      setCount(prevCount => prevCount + 1);
    } else {
      setCount(maxCount);
    }
  };

  const decrementCount = () => {
    if (count > minCount) {
      setCount(prevCount => prevCount - 1);
    } else {
      setCount(minCount);
    }
  };

  const resetCount = () => {
    setCount(0);
    setMaxCount(10);
    setMinCount(-10);
  };

  useEffect(() => {
    if (count >= 0) {
      document.title = `Count: ${count}`;
    } else {
      document.title = `Negative Count: ${count}`;
    }
  }, [count, maxCount, minCount]);

  return (
    <View>
      <Text>Counter with Limits</Text>
      <Text>Count: {count}</Text>
      <Button title="+" onPress={incrementCount} />
      <Button title="-" onPress={decrementCount} />
      <Button title="Reset" onPress={resetCount} />
    </View>
  );
};

export default CounterWithLimits;
