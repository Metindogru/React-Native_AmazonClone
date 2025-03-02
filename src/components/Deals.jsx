import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Recommended from "../assets/recommend.jpg";

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>
      <Image source={Recommended} style={styles.image} />

      <View style={styles.bottomArea}>
        <View style={styles.touchArea}>
          <TouchableOpacity style={styles.touchbtn}>
            <Text style={styles.offDeal}>%20 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>

        <View style={styles.textArea}>
          <Text style={styles.newPrice}>1.439₺</Text>
          <Text style={styles.oldPrice}>1.799₺</Text>
        </View>
      </View>
      <Text style={styles.productName}>
        Nykaa Face Wash Gentle cleanser, moisturizing, refreshing, soothing,
        hydrating.
      </Text>
      <TouchableOpacity>
        <Text style={styles.allDeals}>See all deals</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#000000",
  },

  image: {
    width: "100%",
    height: 275,
  },

  bottomArea: {
    paddingHorizontal: 10,
  },

  touchArea: {
    flexDirection: "row",
    alignItems: "center",
  },

  touchbtn: {
    backgroundColor: "#be0201",
    width: 80,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },

  offDeal: {
    fontSize: 16,
    color: "#fff",
  },

  deal: {
    fontSize: 20,
    color: "#be0201",
    fontWeight: "600",
    marginLeft: 6,
  },

  textArea: {
    flexDirection: "row",
  },
  newPrice: {
    fontSize: 18,
    marginVertical: 5,
    color: "#000",
  },
  oldPrice: {
    fontSize: 12,
    marginVertical: 5,
    marginLeft: 7,
    textDecorationLine: "line-through",
  },

  productName: {
    fontSize: 16,
    color: "#000000",
  },
  allDeals: {
    fontSize: 14,
    color: "blue",
    marginVertical: 10,
  },
});
