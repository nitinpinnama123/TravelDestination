import { View, Text, ImageBackground, StyleSheet} from 'react-native';

const TravelServicesScreen = () => (
    <ImageBackground source={{ uri: 'https://e7.pngegg.com/pngimages/346/14/png-clipart-air-travel-flight-airplane-travel-agent-travel-agency-globe-world-thumbnail.png'}} style={styles.backgroundImage} blurRadius={5}>
        <View style={styles.box}>
            <Text style={styles.title} > Our Travel Services </Text>
            <Text style={styles.subText} > 
                - Flight Booking{'\n'}
                - Hotel Reservations{'\n'}
                - Guided Tours{'\n'}
                - Travel Insurance{'\n'}
            </Text>
        </View>
    </ImageBackground>
);

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    box: {
        backgroundColor: '#ffffff', // white box background
    padding: 20,
    borderRadius: 12,
    elevation: 5, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    },
    title: {
        fontSize: 26,
    fontWeight: 'bold',
    color: '#000000', // black text
    marginBottom: 10,
    textAlign: 'center',
    },
    subText: {
        fontSize: 18,
        color: '#000000',
        lineHeight: 24,
    },
});
export default TravelServicesScreen
