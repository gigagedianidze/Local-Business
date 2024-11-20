import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {collection, doc, getDocs, query} from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'


export default function Slider() {

    const [sliderList,setSliderList]=useState([]);
    useEffect(()=>{

        GetSliderList();
    },[]);
    const GetSliderList=async()=>{
        setSliderList([]);
        const q=query(collection(db,Slider));
        const querySnapshot=await getDocs(q);

        querySnapshot.forEach((doc)=>{
            console.log(doc.data());
            setSliderList(prev=>[...prev,doc.data()]);
        })
    }
  return (
    <View>
      <Text style={{
        fontFamily:'outfit-B',
        fontSize:20,
        padding:20,
      }}>
        #Active Business Listing
      </Text>

      <FlatList
        data={sliderList}
        renderItem={({item,index})=>(
            <Image source={{uri:item.imageUrl}}
                style={{
                    width:300,
                    height:160,
                    borderRadius:9,
                }}
            
            />
        )}
      />
    </View>
  )
}