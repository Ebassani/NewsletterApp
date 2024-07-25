import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface ImageViewProps {
  placeholderImageSource: ImageSourcePropType;
}

export default function ImageView(props:ImageViewProps) {
  return (
    <Image source={props.placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});