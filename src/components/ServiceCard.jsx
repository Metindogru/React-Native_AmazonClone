import { StyleSheet, Text, View, Image } from "react-native";

const ServiceCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title} </Text>
      <Image source={item.image} style={styles.images} />
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  container: {
    width: 140,
    padding: 5,
    marginLeft: 8,
    backgroundColor: "#fff",
    borderRadius: 5,
  },

  title: {
    fontSize: 14,
    marginBottom: 8,
    color: "#000000",
  },

  images: {
    width: "100%",
    height: 130,
  },
});
