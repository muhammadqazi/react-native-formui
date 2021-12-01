import React from 'react'
import { TextInput, Text, View, Image } from 'react-native'

const TextField = ({
    contaiinerStyle,
    labelStyle,
    label,
    errorMessage,
    IdenfierComponent,
    actionComponent,
    placeholder,
    onChange,
    placeholderTextColor,
    secureTextEntry,
    keyboardType,
    autoCompleteType,
    autoCapitalize
  }) => {
    return (
      <View style={{ ...contaiinerStyle }}>
  
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={{ ...labelStyle }}>
            {label}
          </Text>
  
          <Text style={{ color: 'gray' }}>{errorMessage}</Text>
        </View>
  
  
        <View style={{
          flexDirection: 'row',
          height: 55,
          paddingHorizontal: 15,
          marginTop: 5,
          borderRadius: 15,
          backgroundColor: 15
        }}>
  
          {IdenfierComponent}
  
  
          <TextInput
            style={{
              flex: 1
            }}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCompleteType={autoCompleteType}
            autoCapitalize={autoCapitalize}
            onChangeText={(text) => onChange(text)}
          />
  
          {actionComponent}
  
        </View>
      </View>
    )
  }
  
export default TextField