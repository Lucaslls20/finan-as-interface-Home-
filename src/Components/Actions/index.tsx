import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Action(){
    

    return(
       <ScrollView 
         style={styles.container} 
         horizontal={true} 
         showsHorizontalScrollIndicator={false}
         contentContainerStyle={styles.contentContainer}
       >
    
    <TouchableOpacity style={styles.actionButton}>
    <View style={styles.areaButton}>
    <AntDesign name="addfolder" size={26} color='#000' />
    </View>
    <Text style={styles.labelButton}>Entradas</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.actionButton}>
    <View style={styles.areaButton}>
    <AntDesign name="tagso" size={26} color='#000' />
    </View>
    <Text style={styles.labelButton}>Compras</Text>
    </TouchableOpacity>
   
    <TouchableOpacity style={styles.actionButton}>
    <View style={styles.areaButton}>
    <AntDesign name="creditcard" size={26} color='#000' />
    </View>
    <Text style={styles.labelButton}>Carteira</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.actionButton}>
    <View style={styles.areaButton}>
    <AntDesign name="barcode" size={26} color='#000' />
    </View>
    <Text style={styles.labelButton}>Boletos</Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.actionButton}>
    <View style={styles.areaButton}>
    <AntDesign name="setting" size={26} color='#000' />
    </View>
    <Text style={styles.labelButton}>Conta</Text>
    </TouchableOpacity>
      
      
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
    marginBottom:14,
    marginTop:18,
    paddingEnd:14,
    paddingStart:14,
    },
    contentContainer: {
      paddingHorizontal: 17,
      paddingVertical: 17,
    },
    actionButton:{
        alignItems:'center',
        marginRight:32
    },
    areaButton:{
        backgroundColor:'#ecf0f1',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        width:60
    },
    labelButton:{
    marginTop:4,
    textAlign:'center',
    fontWeight:'bold',
    color:'#777'
    }
})