import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Icon } from "react-native-vector-icons";

import style from "./style";
import background from "../../assets/images/background.png";
import COLORS from "../../assets/colors/globals";


export function ResponsiveRegister() {

    return (
        <View style={style.mainContainer}>
            <ImageBackground
                source={background}
                resizeMode="cover"
                style={style.background}>
                <View style={style.headerContainer}>
                    <View style={style.backContainer}>
                        <TouchableOpacity>
                            <Icon name="arrow-back-ios" size={"30"} color="black"/>
                            <Text style={style.backContainerText}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.headerImageContainer}>

                    </View>
                </View>
                <View style={style.formContainer}>
                    <Text>Form</Text>
                </View>
            </ImageBackground>

        </View>
    );

}