// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }: any) => {
   return (
      <View style={styles.container}>
         <View style={clicked ? styles.searchBar__clicked : styles.searchBar__unclicked}>
            <Feather name="search" size={20} color="black" style={{ marginLeft: 1 }} />

            <TextInput
               style={styles.input}
               placeholder="Search"
               value={searchPhrase}
               onChangeText={setSearchPhrase}
               onFocus={() => {
                  setClicked(true);
               }}
            />

            {clicked && (
               <Entypo
                  name="cross"
                  size={20}
                  color="black"
                  style={{ padding: 1 }}
                  onPress={() => {
                     setSearchPhrase("");
                  }}
               />
            )}
         </View>

         {clicked && (
            <View>
               <Button
                  title="Cancel"
                  onPress={() => {
                     Keyboard.dismiss();
                     setClicked(false);
                  }}></Button>
            </View>
         )}
      </View>
   );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
   container: {
      margin: 15,
      marginTop: 100,
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      // width: "90%",
   },
   searchBar__unclicked: {
      padding: 10,
      paddingVertical: 5,
      flexDirection: "row",
      // width: "95%",
      flex: 1,
      backgroundColor: "#d9dbda",
      borderRadius: 15,
      alignItems: "center",
   },
   searchBar__clicked: {
      padding: 10,
      paddingVertical: 5,
      marginRight: 15,
      flexDirection: "row",
      // width: "80%",
      flex: 1,
      backgroundColor: "#d9dbda",
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "space-evenly",
   },
   input: {
      fontSize: 16,
      marginLeft: 10,
      width: "90%",
      padding: 5,
   },
});
