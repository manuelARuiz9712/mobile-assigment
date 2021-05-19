import React from "react";
import {StyleSheet} from "react-native";
import theme,{CalcPercent,ScreenSize} from "./theme";

let spacingContainer = CalcPercent(ScreenSize.w,6);

export default StyleSheet.create({

Container:{
    flex:1,
    backgroundColor:theme.bodyColor,
    paddingLeft:spacingContainer,
    paddingRight:spacingContainer,
  

},
SeparatorList:{
    height:20
},
ContentLoading:{
    paddingBottom:10,
    paddingTop:10
}


});
