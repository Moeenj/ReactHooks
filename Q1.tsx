import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const ShowTime = () => {
  const [time, setTime] = useState(new Date());
  const [isDark, setIsDark] = useState(false);

  const toggleBackground = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentSeasonImage = () => {
    const month = time.getMonth();
    const season = 
      month >= 2 && month <= 4 ? 'spring' :
      month >= 5 && month <= 7 ? 'summer' :
      month >= 8 && month <= 10 ? 'autumn' :
      'winter';
    return `./images/${season}.png`;
  };

  const seasonImage = getCurrentSeasonImage();

  return (
    <TouchableOpacity
      style={{ 
        backgroundColor: isDark ? '#333' : '#fff', 
        color: isDark ? '#fff' : '#333',
        textAlign: 'center',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onPress={toggleBackground}
    >
      <Text>{time.toLocaleTimeString()}</Text>
      <Image source={require(seasonImage)} />
    </TouchableOpacity>
  );
};

export default ShowTime;
