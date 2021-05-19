import React from "react";
import {StyleSheet} from "react-native";
import theme,{CalcPercent,ScreenSize} from "./theme";

let spacingContainer = CalcPercent(ScreenSize.w,8);

export default StyleSheet.create({

Container:{
    flex:1,
    backgroundColor:theme.bodyColor,
    padding:spacingContainer,

}


});
