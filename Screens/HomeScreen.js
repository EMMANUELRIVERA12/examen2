import React, {useContext} from 'react';
import { Header, Card, Image, Button} from 'react-native-elements';
import { StyleSheet, View, ScrollView,Text } from 'react-native'

import {PeliculasContext} from '../Context/PeliculasContext';

const HomeScreen = ({navigation}) => {
    const {cartelera,agregar} = useContext(PeliculasContext);
    return (
        <ScrollView>
            <Header
                centerComponent={{ text: 'CINEMEX', style: { color: '#fff'}}}
                containerStyle={{borderBottomColor:'black',backgroundColor: 'red'}}
            />

            <View style={styles.container2}>
            {cartelera.map((e,i)=>{
                return(
                    <Card  
                    containerStyle={{
                        width: '95%',
                        marginBottom: 10
                    }} 
                    key={i}>
                        <Card.Title>{e.nombre}</Card.Title> 
                        <Card.Divider/>
                       
                        <View style={styles.container}>
                            <View style={styles.container5}>
                                <Image
                                style={styles.imagen}
                                source={{
                                   uri: `${e.url}`, 
                                }}
                                
                                />
                            </View>
                            <View style={styles.container5}>
                                <Text>{e.idioma}</Text>
                                <Text>{e.clasificacion}</Text>
                                {e.horarios.map((horario,index)=>{
                                    return( 
                                        <View style={styles.container2}>
                                            <Button
                                                onPress={()=>(
                                                    agregar(e,horario),
                                                    navigation.navigate('PeliculasScreen')
                                                    )}
                                                key={index}
                                                title={horario}
                                                style={styles.buttonStyle}
                                            />
                                        </View>
                                        
                                    )
                                })} 

                            </View>
                        </View>
                    </Card>
                );
            })
            }
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection:'row',    
    },
    container5:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    imagen: {
        minHeight:150,
        minWidth: 100,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom:10,
    },
      buttonStyle: {
        color: 'blue',
        marginBottom: 20,
    }
});
  