import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { images } from "../Utils/CoinIcons";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 20,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
    padding: 20
  },
  image: {
    width: 35,
    height: 35
  }
});

const { container, image, bold } = styles;

const CoinCard = ({
  symbol,
  coin_name,
  price_usd,
  percent_change_24h,
  percent_change_7d
}) => {
  return (
    <View style={container}>
      <Image style={styles.image} source={{ uri: images[symbol] }} />
      <Text>{symbol}</Text>
      <Text>{coin_name}</Text>
      <Text>
        {price_usd} <Text style={bold}>$</Text>
      </Text>
      <Text>Change past 24 hours: {percent_change_24h}</Text>
      <Text>Change past 7 days: {percent_change_7d}</Text>
    </View>
  );
};

export default CoinCard;
