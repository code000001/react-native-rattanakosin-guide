import React from 'react';
import { Text, TouchableOpacity } from 'react-native'

const ButtonFL = (props) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress ={props.onPress} style={[styles.buttonStyle, props.buttonStyle]}>
            <Text style = {[styles.textStyle, props.textStyle]}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};


const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#EEF4F0',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10 ,
        paddingBottom: 10,
        paddingLeft:5, 
        paddingRight:5
    },
    buttonStyle:{
        flexDirection: 'row',
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#05C037',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#05C037',
        marginLeft: 5,
        marginRight: 5,
        width: 80, height: 50
    }
};

export { ButtonFL } ;



