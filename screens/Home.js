import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";

const Home = () => {
  // this is javascript object just for storing data we create a javascript array
  const data = [
    { id: 1, name: "Madhu", position: "Web Developer", city: "Auckland" },
    { id: 2, name: "Aayan", position: "Web Developer", city: "Auckland" },
    { id: 3, name: "Bhattarai", position: "Web Developer", city: "Auckland" },
    { id: 4, name: "Parbati", position: "Web Developer", city: "Auckland" },
  ];
  // just create a variable
  // this is not a function so we shouldn't need to use () while calling
  const dataToShow = data.map((a) => {
    return (
      <Card
        style={{ backgroundColor: "#32a89d", margin: 5, maxHeight: 120 }}
        key={a.id}
      >
        {/* // Note Due to flexDirection :row view1 and view 2 are align row wise
        but text inside view2 will allign colum-wise because by default
        flexDirection is Columnwise */}
        {/* view 1 */}
        <View
          style={{
            // alignItems: "center",
            // justifyContent: "center",
            flexDirection: "row", // Ny default flexDirection is column(up-down) you can change to row(sideby side left toright)
            // all contains should be in one view
            padding: 5,
          }}
        >
          {/* To pickup random images search "unsplash" on google */}
          <Image
            style={{ height: 100, width: 100, borderRadius: 50, margin: 5 }}
            source={{
              uri:
                "https://images.unsplash.com/flagged/photo-1578848151039-b8916d7c1c34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=821&q=80",
            }}
          />
          {/* View 2 */}

          <View style={{ paddingTop: 20 }}>
            <Text>Name:{a.name}</Text>
            <Text>Position:{a.position}</Text>
            <Text>City: {a.city}</Text>
          </View>
        </View>
      </Card>
    );
  });

  return <>{dataToShow}</>;
};

export default Home;
