import {Dimensions} from 'react-native';
import { useSelector } from 'react-redux';
const {width, height} = Dimensions.get('window');

export const COLORS = 
  { primary: '#3b82f6', //blue
    rose: '#be123c', //rose
    green: '#15803d', 
    green2: '#65a30d', 
    gray: '#EEF1F3',
    gray3: '#f4f4f5', 
    gray4: '#e5e5e5',
    gray2: '#a3a3a3',
    white:"#fff",
    gold: '#eab308',
    black: '#171717',
    dark: "#111",
    dark2: "#000",
    fillColor:"#00000a10", 
    amber:"#d97706",
    chocolate:"#78350f",
    fuschia:"#c026d3",
    pink:"#be185d"

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
