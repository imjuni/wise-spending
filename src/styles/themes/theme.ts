'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'persian_indigo',
  colors: {
    persian_indigo: [
      // DEFAULT: '#27187e',
      '#080519', // 100
      '#0f0932', // 200
      '#170e4b', // 300
      '#1f1363', // 400
      '#27187e', // 500
      '#3a23b9', // 600
      '#5f49dc', // 700
      '#9485e8', // 800
      '#cac2f3', // 900
      '#cac2f3', // 900
    ],
    mint_green: [
      // DEFAULT: '#bee9e8',
      '#163f3e', // 100
      '#2b7e7d', // 200
      '#41bdbb', // 300
      '#7fd3d2', // 400
      '#bee9e8', // 500
      '#cbeded', // 600
      '#d8f2f1', // 700
      '#e5f6f6', // 800
      '#f2fbfa', // 900
      '#f2fbfa', // 900
    ],
    moonstone: [
      // DEFAULT: '#62b6cb',
      '#0f272d', // 100
      '#1e4e5a', // 200
      '#2d7587', // 300
      '#3c9cb5', // 400
      '#62b6cb', // 500
      '#82c4d5', // 600
      '#a1d3e0', // 700
      '#c0e2ea', // 800
      '#e0f0f5', // 900
      '#e0f0f5', // 900
    ],
    columbia_blue: [
      // DEFAULT: '#cae9ff',
      '#00365c', // 100
      '#006bb8', // 200
      '#149dff', // 300
      '#70c3ff', // 400
      '#cae9ff', // 500
      '#d6eeff', // 600
      '#e0f2ff', // 700
      '#ebf7ff', // 800
      '#f5fbff', // 900
      '#f5fbff', // 900
    ],
    picton_blue: [
      // DEFAULT: '#5fa8d3',
      '#0d2330', // 100
      '#1a4760', // 200
      '#276a90', // 300
      '#358dc0', // 400
      '#5fa8d3', // 500
      '#7fbadc', // 600
      '#9fcbe5', // 700
      '#bfdced', // 800
      '#dfeef6', // 900
      '#dfeef6', // 900
    ],
  },
});

// - Tailwind

// { 'persian_indigo':
//   { DEFAULT: '#27187e', 100: '#080519', 200: '#0f0932', 300: '#170e4b', 400: '#1f1363', 500: '#27187e', 600: '#3a23b9', 700: '#5f49dc', 800: '#9485e8', 900: '#cac2f3' }, 'mint_green': { DEFAULT: '#bee9e8', 100: '#163f3e', 200: '#2b7e7d', 300: '#41bdbb', 400: '#7fd3d2', 500: '#bee9e8', 600: '#cbeded', 700: '#d8f2f1', 800: '#e5f6f6', 900: '#f2fbfa' }, 'moonstone': { DEFAULT: '#62b6cb', 100: '#0f272d', 200: '#1e4e5a', 300: '#2d7587', 400: '#3c9cb5', 500: '#62b6cb', 600: '#82c4d5', 700: '#a1d3e0', 800: '#c0e2ea', 900: '#e0f0f5' }, 'columbia_blue': { DEFAULT: '#cae9ff', 100: '#00365c', 200: '#006bb8', 300: '#149dff', 400: '#70c3ff', 500: '#cae9ff', 600: '#d6eeff', 700: '#e0f2ff', 800: '#ebf7ff', 900: '#f5fbff' }, 'picton_blue': { DEFAULT: '#5fa8d3', 100: '#0d2330', 200: '#1a4760', 300: '#276a90', 400: '#358dc0', 500: '#5fa8d3', 600: '#7fbadc', 700: '#9fcbe5', 800: '#bfdced', 900: '#dfeef6' } }

// - CSV

// 27187e,bee9e8,62b6cb,cae9ff,5fa8d3

// - With #

// #27187e, #bee9e8, #62b6cb, #cae9ff, #5fa8d3

// - Array

// ["27187e","bee9e8","62b6cb","cae9ff","5fa8d3"]

// - Object

// {"Persian indigo":"27187e","Mint green":"bee9e8","Moonstone":"62b6cb","Columbia blue":"cae9ff","Picton Blue":"5fa8d3"}

// - Extended Array

// [{"name":"Persian indigo","hex":"27187e","rgb":[39,24,126],"cmyk":[69,81,0,51],"hsb":[249,81,49],"hsl":[249,68,29],"lab":[18,39,-54]},{"name":"Mint green","hex":"bee9e8","rgb":[190,233,232],"cmyk":[18,0,0,9],"hsb":[179,18,91],"hsl":[179,49,83],"lab":[89,-14,-4]},{"name":"Moonstone","hex":"62b6cb","rgb":[98,182,203],"cmyk":[52,10,0,20],"hsb":[192,52,80],"hsl":[192,50,59],"lab":[70,-20,-18]},{"name":"Columbia blue","hex":"cae9ff","rgb":[202,233,255],"cmyk":[21,9,0,0],"hsb":[205,21,100],"hsl":[205,100,90],"lab":[91,-6,-14]},{"name":"Picton Blue","hex":"5fa8d3","rgb":[95,168,211],"cmyk":[55,20,0,17],"hsb":[202,55,83],"hsl":[202,57,60],"lab":[66,-11,-29]}]

// - XML

// <palette>
//   <color name="Persian indigo" hex="27187e" r="39" g="24" b="126" />
//   <color name="Mint green" hex="bee9e8" r="190" g="233" b="232" />
//   <color name="Moonstone" hex="62b6cb" r="98" g="182" b="203" />
//   <color name="Columbia blue" hex="cae9ff" r="202" g="233" b="255" />
//   <color name="Picton Blue" hex="5fa8d3" r="95" g="168" b="211" />
// </palette>
