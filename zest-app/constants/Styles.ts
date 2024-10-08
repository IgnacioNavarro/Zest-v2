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
const lightGray = '#f5f5f0';
const white = '#fff';
const black = '#181811';
const darkYellow = '#3a3a27';


//TODO: ALT colors and alt styles
//TODO: Separate the styles into different const for each component e.g. buttonStyles, textStyles, etc.
export const styles = StyleSheet.create({
    parentContainer:{
        flex: 1,
        paddingTop: 50,
        backgroundColor: colorSchemeDark ? black : white,
    },
    container: {
        flex: 1,
        backgroundColor: colorSchemeDark ? black : white,
        color: colorSchemeDark ? white : black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: colorSchemeDark ? yellowZest: yellowZest,
        borderRadius: 20,
        color: black,
        bottom: 100,
        padding: 20
    },
    startButtonText: {
        color: black,
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
        marginVertical: 10,
        height: 1,
        width: '100%',
        backgroundColor: colorSchemeDark ? darkYellow : lightGray,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    header: {
        flexDirection: 'row',
        backgroundColor: colorSchemeDark ? black : white,
        padding: 20,
        paddingTop: 30,
        //width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleHeader: {
        flex: 4,
        fontSize: 42,
        fontWeight: 'bold',
        color: colorSchemeDark ? white : darkGray,
    },
    userImageContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
    },
    userImage: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 50,
    },
    habitItem: {
        backgroundColor: colorSchemeDark ? black : white,
        padding: 16,
        borderRadius: 10,
      },
      habitHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      habitInfo: {
        flex: 1,
        marginRight: 10,
        color: colorSchemeDark ? white : black,
      },
      habitTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colorSchemeDark ? white : black,
      },
      habitStreak: {
        color: colorSchemeDark ? white : black,
        marginTop: 4,
      },
      habitImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
      },
      progressLabel: {
        marginTop: 10,
        fontSize: 14,
        color: colorSchemeDark ? white : black,
      },
      daysContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
      },
      dayButton: {
        backgroundColor: colorSchemeDark ?  darkYellow : lightGray,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 5,
        marginBottom: 5,
      },
      dayText: {
        fontSize: 14,
        color: colorSchemeDark ? white : black,
        fontWeight: '400'
      },
      list: {
        flexGrow: 1,
      },
      fab: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: colorSchemeDark ? yellowZest : darkGray,
        width: 60,
        height: 60,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
        color: colorSchemeDark ? white : black,
      },
      fabText:{
        color: colorSchemeDark ? black : white,
        fontSize: 18,
        fontWeight: 'bold'
      },
      reminderExplanation: {
        //this should be at the top of the screen
        flex: 1,
        alignItems: 'flex-start',
        padding: 20,
      },
      reminderTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colorSchemeDark ? white : black,
      },
      reminderDescription: {
        fontSize: 15,
        fontWeight: '300',
        color: colorSchemeDark ? white : black,
        paddingVertical: 10,
      },
      reminderButton: {
        backgroundColor: yellowZest,
        color: black,
        padding: 15,
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
      },
      reminderButtonText: {
        color: black,
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'center',
      },
      input: {
        backgroundColor: colorSchemeDark ? darkYellow : lightGray,
        padding: 20,
        borderRadius: 20,
        width: '100%',
        marginBottom: 20,
        color: colorSchemeDark ? white : black,
      },

});