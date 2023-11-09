import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text , Image} from 'react-native';
import FiMoreHorizontal from './src/FiMoreHorizontal';

const DATA = [
    {id: '000-933',Lastname: 'Antopina' ,Firstname: 'Deborah Jane', address:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-944',Lastname: 'Amang',Firstname:'Jesse',address:'Corella, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-911',Lastname: 'Amora',Firstname: 'Kent Ivan', address:'Cortes, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-855',Lastname: 'Angcahan', Firstname:'Ria Mae', address:'Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-874',Lastname: 'Ayuban', Firstname:'Katherine Mae', address:'Dauis, Bohol',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-966',Lastname: 'Banaga', Firstname:'Bernadeth', address:'Loboc, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-984',Lastname: 'Bongcaras', Firstname:'Airen Mae', address:'Dauis, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-932',Lastname: 'Bucia', Firstname:'James Warren', address:'Cortes, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-912',Lastname: 'Bunol', Firstname:'Raymond', address:'Cortes, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-827',Lastname: 'Carbonilla', Firstname:'Marlon', address:'Antiquera, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-754',Lastname: 'Coquilla', Firstname:'Nathaniel Louise', address:'Antiquera, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-763',Lastname: 'Dalen', Firstname:'Rhizabelle Jhaine', address:'Dauis, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-122',Lastname: 'Dela Cruz', Firstname:'Mary Anne', address:'Balilihan, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-242',Lastname: 'Dondoyano', Firstname:'Sherline Rose', address:'Balilihan, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />} ,
    {id: '000-452',Lastname: 'Escuadro', Firstname:'Nelbrey Jillian', address:'Lapaz, Cortes, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-356',Lastname: 'Eusalan', Firstname:'Daisy Dianne', address:'Dauis, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-451',Lastname: 'Felisilda', Firstname:'Arnold James', address:'Valencia, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-657',Lastname: 'Fuentes', Firstname:'Loui', address:'Corella, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-951',Lastname: 'Garcia', Firstname:'Rodel', address:'Hanopol, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-123',Lastname: 'Jagunos', Firstname:'Joana', address:'Hanopol, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-659',Lastname: 'Juntilla', Firstname:'Hershiel Jay', address:'Sevilla, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-969',Lastname: 'Lahoy', Firstname:'Sherwen', address:'Cortes, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-741', Lastname: 'Linog', Firstname:'Jesriel', address:'Sevilla, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-813',Lastname: 'Luayon', Firstname:'Hazel Mae', address:'Corella, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-252',Lastname: 'Madanguit', Firstname:'Rusel Nino', address:'Cortes, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-361',Lastname: 'Magale', Firstname:'Pearly Diane', address:'Maribojoc, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />}, 
    {id: '000-314',Lastname: 'Magsino', Firstname:'Lovelyn', address:'Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-543',Lastname: 'Malanguis', Firstname:'Donilyn', address:'Corella, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-561',Lastname: 'Maldora', Firstname:'Angelo', address:'Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-394',Lastname: 'Marabulas', Firstname:'Ailen Mae', address:'Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-185',Lastname: 'Maslog', Firstname:'Cloyd', address:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-923',Lastname: 'Mirabite', Firstname:'Mic Roland', address:'Maribojoc, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-713',Lastname: 'Oring', Firstname:'Jea Norene', address:'Boctol, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-847',Lastname: 'Paguican', Firstname:'Nicole James', address:'Jagna, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-333',Lastname: 'Pajota', Firstname:'Arnel', address:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-669',Lastname: 'Pilipino', Firstname:'Jesrel',address:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-888',Lastname: 'Sarabia', Firstname:'Earl Mike',address:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-445',Lastname: 'Saraga', Firstname:'Sheilo',address:'Catigbian, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-656',Lastname: 'Tabanyag', Firstname:'John',address:'Cortes, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-111', Lastname: 'Tadlas', Firstname:'Kenneth',address:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-833',Lastname: 'Tahil', Firstname:'Adriane Jane',address:'Hanopol, Bohol' , icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-555',Lastname: 'Tinaja', Firstname:'Ma. Luisa', address:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
    {id: '000-999',Lastname: 'Valiente', Firstname:'Melrose', address:'Tagbilaran, Bohol', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
];

const Item = ({ Lastname, Firstname, address,icon }) => {
  // Extract the first letters of the first name and last name
  const firstInitial = Firstname.charAt(0);
  const lastInitial = Lastname.charAt(0);

  return (
    <View style={styles.wholeContainer}>
      <View style={styles.intialsContainer}><Text style={styles.initials}>{firstInitial}{lastInitial}</Text></View>
      <View style={styles.listItem}>
        
        <Text style={styles.listItemText}>{Lastname}, {Firstname}</Text>
        <Text style={styles.listItemAdd}>{address}</Text>
        
      </View>
      
     
      <View style={styles.iconContainer}>{icon}</View>
   
    </View>
  );
};

export default function App() {
   
      return (
        <SafeAreaView>
            <View style={styles.container}>
                
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Item Lastname={item.Lastname} Firstname={item.Firstname} address={item.address}  icon={item.icon}/>}
                    
                />
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: 'white',
        alignItems: 'left',
        height: 670,
        marginTop:170,
        
    },
    text: {
        fontSize: 18,
        color: '#101010',
        marginTop: 5,
        fontWeight: '700',
        fontFamily:'Arial',
        marginBottom:10
    },
    listItem: {
        marginTop: 15,
        
        alignItems: 'left',
        backgroundColor: '#fff',
        width: '70%'
    },
    listItemText: {
        fontSize: 18,
        fontWeight:'bold',
        fontFamily:'Arial'
      
    },
    listItemAdd:{
        fontSize:15,
        fontFamily:'Arial'
    },
    wholeContainer:{
        flexDirection:'row' ,
        

    },
    initials:{
      fontSize:15,
      fontWeight:'bold',
      fontFamily:'Arial',
      alignSelf:'center',
      margin:10,
      color:'white'
      
    },
    intialsContainer:{
        alignContent:'center',
        alignItems:'center',
       margin:10,
        backgroundColor:'skyblue',
        height:35,
        width:35,
        borderRadius:70
    },
    iconContainer: {
        margin: 10,
      },
});