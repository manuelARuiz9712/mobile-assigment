import React,{useState,useEffect} from "react";
import {View,FlatList,ActivityIndicator} from "react-native";
import HomeStyles from "../assets/styles/HomeStyles";
import CardPerson from "../components/CardPerson";
import {useNavigation} from "@react-navigation/native";
import {client as ApolloClient} from "../utils/ApolloClient";
import { gql } from '@apollo/client';
import theme from "../assets/styles/theme";
import {Person} from "../utils/interfaces/index";


const ListSeparator = ()=>{
    return <View style={HomeStyles.SeparatorList}  >

        </View>
}

const LoadingIndicator  = ({isLoading=false})=>{
    if( isLoading  ){

        return (
            <View style={HomeStyles.ContentLoading} >
                <ActivityIndicator size="large" color={theme.primaryColor}  />
            </View>
        )

     }else{

         return null;
         
     }
}



const Home: React.FC = (props)=>{

    let navigation = useNavigation();
    let [dataSet,setDataSet] = useState( [] as Array<Person>   );
    let [pageIndex,setPageIndex] = useState(1);
    let [totalPages,setTotalPages] = useState(0);
    let [loading,setLoading] = useState(false);
    
   

   useEffect(() => {

    GetPage();
    
   },[])

   const goToDetail = (item:Person)=>{
       
    navigation.navigate("detail",item);
    }
    const GetPage = ()=>{
      
        if( totalPages !== 0 && pageIndex > totalPages  ){
            console.log("Query dead");
            return 0;
        }
        setLoading(true);
        ApolloClient.query({
            query:gql`query {
                characters(page: ${pageIndex}) {
                  info {
                    pages
                  }
                  results {
                    id
                    name
                    image
                    origin{
                        name
                    }
                    gender
                    created
                    species
                    status

                  }
                 
                }
               
              }`
        }).then(result=>{

            let rows = result.data.characters.results;
            let pages = result.data.characters.info.pages;
            setDataSet([...dataSet].concat(rows) );
            setTotalPages(pages);
            setPageIndex(pageIndex+1);



        }).catch(e=>console.log(e.message)).finally(()=>{
            setLoading(false);
        });
    }



    return (
    <View style={HomeStyles.Container}  >

         <FlatList 
        /*  ItemSeparatorComponent={ListSeparator} */
         data={dataSet }
         keyExtractor={ele=>ele.id.toString()}
         onEndReached={GetPage}
         onEndReachedThreshold={0.5}
         ListFooterComponent={()=><LoadingIndicator isLoading={loading} />}
         renderItem={ ( ({item,index})  =>
            <CardPerson 
            image={item.image }
            name={item.name}
            origin={item.origin.name}
            created_at={item.created}
            goToDetail={()=>goToDetail(item)}
            
          />
            )}
         />    
      

    </View>)

}

export default Home;