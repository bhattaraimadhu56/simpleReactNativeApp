import React from "react";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";

const Home = () => {
  return (
    <>
      <Card style={{ backgroundColor: "#32a89d" }}>
        {/* // Note Due to flexDirection :row view1 and view 2 are align row wise
        but text inside view2 will allign colum-wise because by default
        flexDirection is Columnwise */}
        {/* view 1 */}
        <View
          style={{
            // alignItems: "center",
            // justifyContent: "center",
            flexDirection: "row", // By default flexDirection is column     (up- to- down) you can change to row( side by side left to right)
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
            <Text>Welcome</Text>
            <Text>from Home Page</Text>
          </View>
        </View>
      </Card>
    </>
  );
};

export default Home;
