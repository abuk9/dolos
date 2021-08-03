import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const icons = {
  // might want to take color from global color set file
  back: <Icon name="arrow-back" size={25} color="black" />,
  notfificationOn: (
    <Icon name="notifications-outline" size={25} color="black" />
  ),
  notfificationOff: (
    <Icon name="notifications-off-outline" size={25} color="black" />
  ),
};
export default icons;
