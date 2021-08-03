import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from './colors';

const icons = {
  // might want to take color from global color set file
  back: <Icon name="arrow-back" size={25} color={Colors.textDefault} />,
  notfificationOn: (
    <Icon name="notifications-outline" size={25} color={Colors.textDefault} />
  ),
  notfificationOff: (
    <Icon
      name="notifications-off-outline"
      size={25}
      color={Colors.textDefault}
    />
  ),
  close: <Icon name="close" size={25} color="#777" />,
  accept: <Icon name="checkmark" size={25} color="#777" />,
};
export default icons;