import React from 'react'
import {Text, TouchableOpacity } from 'react-native'


const TextButton = ({ label, labelStyle, buttonContainerStyle, onPress, disable }) => {
    return (
        <TouchableOpacity style={{
            alignItems: "center",
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            ...buttonContainerStyle
        }}
            disabled={disable}
            onPress={onPress}
        >
            <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}
export default TextButton