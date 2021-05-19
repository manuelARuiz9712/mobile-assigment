import React from "react";
import { View, Text, Image,TouchableOpacity } from "react-native";
import CardPersonStyles from "../assets/styles/CardPersonStyles";


type CardPersonProps = {
    name: string,
    image: any,
    origin: string,
    created_at: string,
    goToDetail:any
}


const CardPerson: React.FC<CardPersonProps> = (props) => {


    return (
        <View  style={CardPersonStyles.CardContainer}  >

            <TouchableOpacity onPress={ props.goToDetail}  style={CardPersonStyles.CardTitleContainer} >
                <Text style={CardPersonStyles.CardTitle} >{props.name}  </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={ props.goToDetail}   style={CardPersonStyles.ImageContainer}  >
                <Image source={{ uri: props.image }} style={CardPersonStyles.CardImage} />
            </TouchableOpacity>

            <View style={CardPersonStyles.RowInfoContent} >
                <View style={CardPersonStyles.RowColSub}  >
                    <Text style={CardPersonStyles.SubText} >Origin: </Text>
                </View>
                <View style={CardPersonStyles.RowColDesc}  >
                    <Text numberOfLines={1} style={CardPersonStyles.DescripText} >{props.origin} </Text>
                </View>

            </View>

            <View style={CardPersonStyles.Divider} />

            <View style={CardPersonStyles.RowInfoContent} >
                <View style={CardPersonStyles.RowColSub}  >
                    <Text style={CardPersonStyles.SubText} >Created: </Text>
                </View>
                <View style={CardPersonStyles.RowColDesc}  >
                    <Text numberOfLines={1} style={CardPersonStyles.DescripText} >{props.created_at}</Text>
                </View>

            </View>

        </View>
    )


}

export default CardPerson;