import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";

import Button from './components/Button'; 
import ImageViewer from './components/ImageViewer';
import Navbar from "./components/Navbar";

const PlaceholderImage = require("./assets/images/background-image.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Navbar></Navbar>
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo ;)" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  headerContainer: {
    flex: 1 / 3,
    width: '100%',
    alignItems: 'left',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
