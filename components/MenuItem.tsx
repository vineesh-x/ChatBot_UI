import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { MenuItemProps } from '../types';
import { styles } from '../styles/styles';

const MenuItem: React.FC<MenuItemProps> = ({ title, image, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Image source={image} style={styles.menuItemImage} />
    <Text style={styles.menuItemText}>{title}</Text>
  </TouchableOpacity>
);

export default MenuItem;
