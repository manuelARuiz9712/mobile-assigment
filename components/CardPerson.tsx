import React from "react";
import { View, Text, Image } from "react-native";
import CardPersonStyles from "../assets/styles/CardPersonStyles";


type CardPersonProps = {
    name: string,
    image: any,
    origin: string,
    created_at: string
}


const CardPerson: React.FC<CardPersonProps> = (props) => {


    return (
        <View style={CardPersonStyles.CardContainer}  >

            <View style={CardPersonStyles.CardTitleContainer} >
                <Text style={CardPersonStyles.CardTitle} >{props.name}  </Text>
            </View>
            
            <View>
                <Image source={{ uri: props.image }} style={CardPersonStyles.CardImage} />
            </View>

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