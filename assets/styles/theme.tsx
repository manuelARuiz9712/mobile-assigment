import React from "react";
import {StyleSheet,Dimensions} from "react-native";

/**
 * 
 * @param base Valor sobre el cual se va a calcular el porcentaje
 * @param percent  el porcentaje que se sacara del valor
 */
export const CalcPercent = (base:number,percent:number)=>{

return base * ( percent/100 );

}
export const ScreenSize = {w:Dimensions.get("screen").width,h:Dimensions.get("screen").height};

const theme = {
    bodyColor:"#E8E8E8",
    primaryColor:"#4A85AF",
    secondaryColor:"#0091FF",
    SubtitleColor:"#A1A1A1",
    titleColor:"#303030",
    textTitleSize:15,
    textSubtitleSize:13,
    textDescriptionSize:13,
    


}

export const GlobalStyles  = {

    header:{
        headerStyle:{backgroundColor:theme.primaryColor},
        headerTintColor:"white",
        
       
     }
    
}
export default theme;