import React from "react";
import {View,FlatList} from "react-native";
import HomeStyles from "../assets/styles/HomeStyles";
import CardPerson from "../components/CardPerson";


const ListSeparator = ()=>{
    return <View style={HomeStyles.SeparatorList}  >

    </View>
}




const Home: React.FC = (props)=>{


    return (
    <View style={HomeStyles.Container}  >

         <FlatList 
         ItemSeparatorComponent={ListSeparator}
         data={Array.from({length:10}).map((ele,index)=>index) }
         keyExtractor={ele=>ele.toString()}
         renderItem={ (ele=>
            <CardPerson 
            image={"https://www.pngkit.com/png/detail/68-685736_pm-088-pocket-mortys-morty-png.png"}
            name={"Nombre del personaje"}
            origin={"Tierra"}
            created_at={"2011-03-10"}
          />
            )}
         />   
      

    </View>)

}

export default Home;