import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Text, View, Button } from 'react-native';

const Greeting = () => {
  const [timeOfDay, setTimeOfDay] = useState('morning');
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime >= 6 && currentTime < 12) {
      setTimeOfDay('morning');
    } else if (currentTime >= 12 && currentTime < 18) {
      setTimeOfDay('afternoon');
    } else {
      setTimeOfDay('evening');
    }
  }, []);

  const changeGreeting = () => {
    setCount(countRef.current + 1);
    countRef.current++;
    setTimeOfDay('hello');
  };

  const greeting = useMemo(() => {
    switch (timeOfDay) {
      case 'morning':
        return 'Good morning!';
      case 'afternoon':
        return 'Good afternoon!';
      case 'evening':
        return 'Good evening!';
      case 'hello':
        return 'Hello!';
      default:
        return '';
    }
  }, [timeOfDay]);

  return (
    <View>
      <Text>{greeting}</Text>
      <Text>You have clicked the button {count} times</Text>
      <Button onPress={changeGreeting} title="Change Greeting" />
    </View>
  );
};

export default Greeting;
