import React from "react";
import {View,Text,Image} from "react-native";
import DetailPersonStyles from "../assets/styles/DetailStyles";



const DetailPerson: React.FC = (props)=>{



    return (
        <View style={DetailPersonStyles.Container}  >

            <View style={DetailPersonStyles.CardContainer} >

                <View style={DetailPersonStyles.ImageContainer} >

                    <Image style={DetailPersonStyles.ImageCard} source={{ uri: 'https://www.pngkit.com/png/detail/68-685736_pm-088-pocket-mortys-morty-png.png' }} />

                </View>


                <View style={DetailPersonStyles.InfoContainer} >

                    <View >
                        <Text style={DetailPersonStyles.TitleInfo} >Nombre del personaje</Text>
                    </View>

                    <View style={DetailPersonStyles.RowInfo} >

                        <View style={DetailPersonStyles.ColSub} >
                            <Text style={DetailPersonStyles.Subtitle} >Origin:</Text>
                        </View>
                        <View style={DetailPersonStyles.ColDesc} >
                        <Text style={DetailPersonStyles.Descripcion} >Descripcion</Text>
                        </View>

                    </View>
                     <View style={DetailPersonStyles.RowInfo} >

                        <View style={DetailPersonStyles.ColSub} >
                            <Text style={DetailPersonStyles.Subtitle} > Status:</Text>
                        </View>
                        <View style={DetailPersonStyles.ColDesc} >
                        <Text style={DetailPersonStyles.Descripcion} >Descripcion</Text>
                        </View>

                    </View>
                     <View style={DetailPersonStyles.RowInfo} >

                        <View style={DetailPersonStyles.ColSub} >
                            <Text style={DetailPersonStyles.Subtitle} >Species:</Text>
                        </View>
                        <View style={DetailPersonStyles.ColDesc} >
                        <Text style={DetailPersonStyles.Descripcion} >Descripcion</Text>
                        </View>

                    </View>
                     <View style={DetailPersonStyles.RowInfo} >

                        <View style={DetailPersonStyles.ColSub} >
                            <Text style={DetailPersonStyles.Subtitle} >Gender:</Text>
                        </View>
                        <View style={DetailPersonStyles.ColDesc} >
                        <Text style={DetailPersonStyles.Descripcion} >Descripcion</Text>
                        </View>

                    </View>
                     <View style={DetailPersonStyles.RowInfo} >

                        <View style={DetailPersonStyles.ColSub} >
                            <Text style={DetailPersonStyles.Subtitle} >Created:</Text>
                        </View>
                        <View style={DetailPersonStyles.ColDesc} >
                        <Text style={DetailPersonStyles.Descripcion} >Descripcion</Text>
                        </View>

                    </View>

                </View>

            </View>

        </View>
    )


}
export default DetailPerson;