import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import AmazonPay from "../assets/amazon-pay.png";
import SendMoney from "../assets/send-money.jpg";
import ScanQR from "../assets/scan-qr.jpeg";
import PayBills from "../assets/pay-bills.jpeg";
import { RecentSearchData } from "../data/RecentSearchData";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <ScrollView
      style={styles.mainContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 20 }}
    >
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.innerCont}>
            <Image style={styles.images} source={AmazonPay} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>

          <View style={styles.innerCont}>
            <Image style={styles.images} source={SendMoney} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.innerCont}>
            <Image style={styles.images} source={ScanQR} />
            <Text style={styles.title}>Scan QR</Text>
          </View>

          <View style={styles.innerCont}>
            <Image style={styles.images} source={PayBills} />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>

        <View></View>
      </View>
      {RecentSearchData.map((item) => (
        <ServiceCard item={item} />
      ))}
    </ScrollView>
  );
};

export default Service;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: -48,
    paddingHorizontal: 10,
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  innerCont: {
    padding: 10,
    alignItems: "center",
    paddingTop: 15,
  },

  images: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 10,
    color: "#000",
    marginTop: 2,
  },
});
