import * as React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import CreateStory from "../screens/CreateStory";
import Feed from "../screens/Feed";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon:({focused,color,size})=>{
            let iconName;
            if(route.name === "Feed"){
              iconName = focused ? "book" : "book-outline";
            } else if(route.name === "Criar História"){
              iconName = focused ? "create" : "create-outline";
            }
             return <Ionicons name={iconName} size={size} color={color}/>
          },
        })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "grey"
          }}>
          <Tab.Screen name="Feed" component={Feed}/>
          <Tab.Screen name="Criar História" component={CreateStory}/>
      </Tab.Navigator>
  );
}

export default BottomTabNavigator;