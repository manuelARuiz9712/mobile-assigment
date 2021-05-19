import React from "react";
import {StyleSheet} from "react-native";
import theme,{CalcPercent,ScreenSize} from "./theme";

const BaseWidth = CalcPercent(ScreenSize.w,90); 
const BaseInfo = BaseWidth-20;

export default StyleSheet.create({

    Container:{
      //  flex:1,
        backgroundColor:theme.bodyColor,
        minHeight:ScreenSize.h,
        
    },
    CardContainer:{
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:"white",
        width:BaseWidth,
        alignSelf:"center",
        marginTop:20

    },
    ImageContainer:{
       
    },
    ImageCard:{
        resizeMode:"contain",
        width:BaseWidth,
        height:BaseWidth
    },
    InfoContainer:{
       
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:50
    },
    TitleInfo:{
        marginBottom:10,
        fontSize:theme.textTitleSize,
        color:theme.titleColor,
        fontWeight:"bold"
    },
    RowInfo:{
        flexDirection:"row",
        width:BaseInfo,
        marginTop:10

    },
    ColSub:{
        width:CalcPercent(BaseWidth,25)
    },
    ColDesc:{
        width:CalcPercent(BaseWidth,75)
    },
    Subtitle:{
        color:theme.SubtitleColor,
        fontSize:theme.textSubtitleSize,
        fontWeight:"700"
    },
    Descripcion:{
        color:theme.secondaryColor,
        fontSize:theme.textSubtitleSize
    }
    
    



});