import React from "react";
import {View,Text,Image} from "react-native";
import DetailPersonStyles from "../assets/styles/DetailStyles";
import {Person} from "../utils/interfaces/index";
import {useRoute} from "@react-navigation/native";


const DetailPerson: React.FC = (props)=>{

    let router = useRoute();
    let PersonData = router.params as Person ;
     


    return (
        <View style={DetailPersonStyles.Container}  >

            <View style={DetailPersonStyles.CardContainer} >

                <View style={DetailPersonStyles.ImageContainer} >

                    <Image style={DetailPersonStyles.ImageCard} source={{ uri: PersonData.image }} />

                </View>


                <View style={DetailPersonStyles.InfoContainer} >

                    <View >
                        <Text style={DetailPersonStyles.TitleInfo} >{PersonData.name}</Text>
                    </View>

                    <View style={DetailPersonStyles.RowInfo} >

                        <View style={DetailPersonStyles.ColSub} >
                            <Text style={DetailPersonStyles.Subtitle} >Origin:</Text>
                        </View>
                        <View style={DetailPersonStyles.ColDesc} >
                        <Text style={DetailPersonStyles.Descripcion} >{PersonData.origin.name}</Text>
                        </View>

                    </View>
                     <View style={DetailPersonStyles.RowInfo} >

                        <View style={DetailPersonStyles.ColSub} >
                            <Text style={DetailPersonStyles.Subtitle} > Status:</Text>
                        </View>
                        <View style={DetailPersonStyles.ColDesc} >
                        <Text style={DetailPersonStyles.Descripcion} >{PersonData.status}</Text>
                        </View>

                    </View>
                     <View style={DetailPersonStyles.RowInfo} >

                        <View style={DetailPersonStyles.ColSub} >
                            <Text style={DetailPersonStyles.Subtitle} >Species:</Text>
                        </View>
                        <View style={DetailPersonStyles.ColDesc} >
                        <Text style={DetailPersonStyles.Descripcion} >{PersonData.species}</Text>
                        </View>

                    </View>
                     <View style={DetailPersonStyles.RowInfo} >

                        <View style={DetailPersonStyles.ColSub} >
                            <Text style={DetailPersonStyles.Subtitle} >Gender:</Text>
                        </View>
                        <View style={DetailPersonStyles.ColDesc} >
                        <Text style={DetailPersonStyles.Descripcion} >{PersonData.gender}</Text>
                        </View>

                    </View>
                     <View style={DetailPersonStyles.RowInfo} >

                        <View style={DetailPersonStyles.ColSub} >
                            <Text style={DetailPersonStyles.Subtitle} >Created:</Text>
                        </View>
                        <View style={DetailPersonStyles.ColDesc} >
                        <Text style={DetailPersonStyles.Descripcion} >{PersonData.created}</Text>
                        </View>

                    </View>

                </View>

            </View>

        </View>
    )


}
export default DetailPerson;