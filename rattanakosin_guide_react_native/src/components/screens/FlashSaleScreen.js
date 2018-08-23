import React, {Component} from 'react'
import {
    View,
    Text, 
    StyleSheet,
    Dimensions
} from 'react-native'

import { FlashSaleLightning,FlashSalePromotion } from './stackscreens'
import {
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Header } from '../common'







export class FlashSaleScreen extends Component{


    state = {
        index: 0,
        routes: [
          { key: 'first', title: 'โปรฟ้าผ่า' },
          { key: 'second', title: 'โปรโมชั่น' },
        ],
    };


    // renderHeader= () => {
    //     console.log(" เข้าแล้วนะ")
    //     if(this.state.routes.key === 'second'){
    //         return this.setState({
    //             text: 'โปรโมชัน'
    //         });
    //     }
    //     return this.state.text;
    // }

    // _renderFooter = props => {
    //     return(
    //         <TabBar style={{backgroundColor: '#fff', elevation: 0, height: 52}} labelStyle={{fontSize: 10, color: '#000'}} indicatorStyle={{backgroundColor: '#68e884'}} {...props} renderIcon={this._renderIcon} renderIndicator={this._renderIndicator}/>
    //       )
    // }
    
    renderHeader = () => {
        console.log("------------------+++++++++++------------------");
        if(this.state.routes.key === 'second'){
            return  <Header headerText= 'โปรโมชั่น' />
        }
        return <Header headerText= 'โปรฟ้าผ่า' />
    }


    render(){
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: FlashSaleLightning,
                        second: FlashSalePromotion,
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
       
    }
})