import {Dimensions} from 'react-native';
import { useSelector } from 'react-redux';
const {width, height} = Dimensions.get('window');

export const COLORS = 
  { primary: '#3b82f6', //blue
    rose: '#be123c', //rose
    green: '#15803d', 
    gray: '#EEF1F3',
    gray3: '#f4f4f5', 
    gray4: '#e5e5e5',
    gray2: '#a3a3a3',
    white:"#fff",
    gold: '#eab308',
    black: '#171717',
    dark: "#111",
    fillColor:"#00000a10", 
    amber:"#d97706"

};
export const WEIGHT = {

    light: 200,
    light2: 300,
    bold: 500,
    bold2: 600,
    bold3: 700,

};

export const SIZES = {
  // global sizes
  icon:20,
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 45,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 18,
  h5: 13,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};


const appTheme = {COLORS, SIZES,WEIGHT};

export default appTheme;
