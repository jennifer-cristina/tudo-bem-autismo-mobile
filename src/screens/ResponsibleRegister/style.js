import { StyleSheet, StatusBar } from "react-native";

import COLORS from "../../assets/colors/globals";

const style = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight,
    },
    background: {
        width: '100%',
        height: '100%',
    },
    headerContainer: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: COLORS.blue,
    },
    formContainer: {
        flex: 3,
        alignSelf: 'stretch',
        backgroundColor: COLORS.gray,
    },
    backContainer: {
        flex: 1,
        color: COLORS.black,
    },
    backContainerText: {
        fontSize: 20,
        fontFamily: 'Poppins_400Regular',
    },
    headerImageContainer: {
        flex: 5,
        backgroundColor: COLORS.darkBlue,
    },
});

export default style;