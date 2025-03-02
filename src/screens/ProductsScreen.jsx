import { ScrollView, StyleSheet, Text, Image, View } from "react-native";
import { ProductData } from "../data/ProductData";
import PrimeLogo from "../assets/prime-logo.png";
import { getRating } from "../utils/helper";

const ProductsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text style={styles.tagLine}>
        Price and other details may very based on produts aside and color
      </Text>
      {ProductData.map((item) => (
        <View style={styles.productMain}>
          <View style={styles.imagesArea}>
            <Image style={styles.images} source={item.image} />
          </View>

          <View style={styles.detailSec}>
            <Text style={styles.sponsor}>Sponsored</Text>
            <Text style={styles.productName}>{item.productName} </Text>

            <View style={styles.ratingArea}>
              <Text style={styles.rating}>{item.rating} </Text>
              {styles.star}
              {getRating(item.rating)}

              <Text style={styles.ratingCount}>{item.ratingCount}</Text>
            </View>
            <View style={styles.priceArea}>
              <Text style={styles.price}>{item.price} </Text>
              <Text style={styles.crossOutText}>{item.crossOutText}</Text>
            </View>
            <Text style={styles.cash}>
              Up to 5% cashback with Amazon Pay Credit Cart
            </Text>
            <Image style={styles.prime} source={PrimeLogo} />
            <Text style={styles.detail}>
              FREE Delivery by {item.deliveryBy}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },

  tagLine: {
    fontSize: 14,
    color: "gray",
  },

  productMain: {
    borderWidth: 1,
    borderColor: "#dddddd",
    flexDirection: "row",
    marginVertical: 15,
  },

  imagesArea: {
    width: "40%",
    backgroundColor: "#dddddd",
    justifyContent: "center",
  },

  images: {
    width: "%100",
    height: 150,
    resizeMode: "contain",
  },

  detailSec: {
    width: "60%",
    padding: 10,
  },

  productName: {
    fontSize: 14,
    color: "#000",
    lineHeight: 18,
  },

  sponsor: {
    fontSize: 12,
    color: "#000",
  },

  ratingArea: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  priceArea: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  rating: {
    fontSize: 13,
    color: "#017185",
    marginRight: 5,
  },

  ratingCount: {
    fontSize: 13,
    color: "#017185",
    marginLeft: 5,
  },

  price: {
    fontSize: 17,
    color: "#000000",
    marginRight: 5,
  },

  crossOutText: {
    fontSize: 13,
    color: "#000000",
  },

  cash: {
    fontSize: 10,
    marginVertical: 3,
  },

  prime: {
    width: 48,
    height: 18,
    marginVertical: 3,
  },

  detail: {
    fontSize: 10,
  },
});
