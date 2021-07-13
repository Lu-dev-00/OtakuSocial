import React from 'react';
import {View,Text,Button,StyleSheet,Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

export const onboarding = ({navigation}) => {
    return (
        <Onboarding  
        bottomBarHighlight = {false}
        onDone = {() => navigation.navigate('signIn')}
        onSkip = {() => navigation.navigate('signIn')}
        pages={[
            {
                backgroundColor: '#ffabd5',
                image: <Image style={styles.onboardingImage} source={require('../Media/woman.png')} />,
                title: 'Welcome',
                titleStyles: {
                    color:'white',
                },  
                subTitleStyles: {
                    color:'white'
                },
                subtitle: 'Otaku social lets you connect to people just like us', 
            },
            {
                backgroundColor: '#3d3d3d',
                image: <Image style={styles.onboardingImage} source={require('../Media/ghost.png')} />,
                title: 'Chat',
                subtitle: 'Chat with your friends',
            },
            {
                backgroundColor: '#6bb0a4',
                image: <Image style={styles.onboardingImage} source={require('../Media/megaphone.png')} />,
                title: 'Profiles',
                subtitle: 'Create a profile and let everyone know what you are into',
                showDone: true,
            },
            
        ]}
        />
    );
};

export default onboarding;

export const styles = StyleSheet.create({
    onboardingImage: {
        width: 100,
        height: 100,
    }
});