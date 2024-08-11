import { Appearance, StyleSheet } from "react-native";

const colorScheme = Appearance.getColorScheme();
const colorSchemeDark = colorScheme === 'dark' ? true : false;


//COLORS
const yellowZest = '#fafa04';

/*The idea is on light: 
    primary: white
    secondary: black
    tertiary: yellowZest

    Accents: lightGray, darkGray
*/

/*The idea is on dark: 
    primary: black
    secondary: yellowZest
    tertiary: white

    Accents: lightGray, darkGray
*/

const darkGray = '#303030';
const lightGray = '#cccc';
const white = '#fff';
const black = '#1e1e1e';


//TODO: ALT colors and alt styles
//TODO: Separate the styles into different const for each component e.g. buttonStyles, textStyles, etc.
export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: colorSchemeDark ? black : white,
        color: colorSchemeDark ? white : black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: colorSchemeDark ? yellowZest: darkGray,
        borderRadius: 20,
        color: yellowZest,
        bottom: 100,
        padding: 20
    },
    startButtonText: {
        color: colorSchemeDark ? darkGray : yellowZest,
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageOnBoarding: {
        flex: 0.8,
        justifyContent: 'center',
    },
    titleOnBoarding: {
        fontSize: 36,
        fontWeight: '800',
        marginBottom: 10,
        textAlign: 'center',
    },
    descriptionOnBoarding: {
        fontSize: 15,
        fontWeight: '300',
        textAlign: 'center',
        paddingHorizontal: 64,
    },
    containerPaginator: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginator: {
        flexDirection: 'row',
        height: 64,
    },
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: colorSchemeDark ? yellowZest : darkGray,
        marginHorizontal: 8,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
});