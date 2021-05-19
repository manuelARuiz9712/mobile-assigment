import React from "react";
import {StyleSheet} from "react-native";
import theme,{CalcPercent,ScreenSize} from "./theme";

const baseWidth = CalcPercent(ScreenSize.w,100-12);
const paddingEx = 15;
const InternalWidth = baseWidth - paddingEx*2;

export default StyleSheet.create({

CardContainer:{
    flex:1,
    width:baseWidth,
    backgroundColor:"white",
    padding:paddingEx,
    flexDirection:"column",
    borderRadius:10,
    marginTop:20
    

},
CardTitleContainer:{
    paddingTop:6,
   

},
CardTitle:{
    color:theme.titleColor,
    fontSize:theme.textTitleSize,
    fontWeight:"bold",
    textTransform:"capitalize"
},
CardImage:{
    resizeMode:"contain",
    width:InternalWidth,
    height:InternalWidth,
    borderRadius:5

},
RowInfoContent:{
    width:InternalWidth,
    flexDirection:"row"
},
RowColSub:{
    width:CalcPercent(InternalWidth,30),
},
SubText:{
 color:theme.SubtitleColor,
 fontSize:theme.textSubtitleSize
},
DescripText:{
    color:theme.secondaryColor,
    fontSize:theme.textSubtitleSize
   },
RowColDesc:{
    width:CalcPercent(InternalWidth,70),
},
Divider:{
    height:10
}

});
