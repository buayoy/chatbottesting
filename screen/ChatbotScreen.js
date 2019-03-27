/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Keyboard,WebView, ActivityIndicator,KeyboardAvoidingView,TextInput,StyleSheet,View,Dimensions} from 'react-native';
// import { WebView } from "react-native-webview";

export default class ChatbotScreen extends Component {
    static navigationOptions = {
        title: 'ถาม-ตอบ' ,
        headerStyle: {
            backgroundColor: '#00802b' ,
            textAlign: 'center' ,
        },
        headerTintColor: '#fff' ,
        headerTitleStyle: {
            fontWeight: 'bold' ,
        },
    };
    state={
        height:1,
        keyboardshow:false,
        loading:false
    }

    render() {
        return (
            this.state.loading ?
                <ActivityIndicator size='large' color="#006600" /> :
                <WebView
                    // scrollEnabled={false}
                    source={{uri: 'https://icn1-dev.convolab.ai/site/chat.page?appId=icndev'}}
                    // style={{marginTop: 0}}
                    useWebkit={true}
                />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }, 
});