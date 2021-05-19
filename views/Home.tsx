import React from "react";
import {View,FlatList} from "react-native";
import HomeStyles from "../assets/styles/HomeStyles";
import CardPerson from "../components/CardPerson";
import {useNavigation} from "@react-navigation/native";


const ListSeparator = ()=>{
    return <View style={HomeStyles.SeparatorList}  >

    </View>
}




const Home: React.FC = (props)=>{

    let navigation = useNavigation();

    
    const goToDetail = ()=>{
        navigation.navigate("detail");
    }

    return (
    <View style={HomeStyles.Container}  >

         <FlatList 
        /*  ItemSeparatorComponent={ListSeparator} */
         data={Array.from({length:10}).map((ele,index)=>index) }
         keyExtractor={ele=>ele.toString()}
         renderItem={ (ele=>
            <CardPerson 
            image={"https://www.pngkit.com/png/detail/68-685736_pm-088-pocket-mortys-morty-png.png"}
            name={"Nombre del personaje"}
            origin={"Tierra"}
            created_at={"2011-03-10"}
            goToDetail={goToDetail}
            
          />
            )}
         />    
      

    </View>)

}

export default Home;