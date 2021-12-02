# react-native-form
A simple react-native component to wrap your form fields and get their values without attaching listeners everywhere.Modern form UI kit for react-native application, with full hand control over customization


## Installation
```
npm install --save react-native-formui
```

### Usage

```shell
             <FormInput
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
                    appendComponent={
                        <TouchableOpacity style={{
                            width: 40,
                            alignItems: 'flex-end',
                            justifyContent: 'center'

                        }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image
                                source={showPass ? icons.eye_close : icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                />

```



