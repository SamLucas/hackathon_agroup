import React, {useState} from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  NavigationActions,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import {Colors} from './config/DefaultStyle';

import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import vacas from './pages/vaca/index';
import vaca_description from './pages/vaca/description';
import index from './pages/';
import prenha from './pages/lotes/prenha';
import seca from './pages/lotes/seca';
import terco_final from './pages/lotes/terco_final';
import transicao from './pages/lotes/transicao';
import vazia from './pages/lotes/vazia';
import avaliation_index from './pages/avaliation';
import avaliation from './pages/avaliation/avaliation';
import avaliation_questions from './pages/avaliation/questions';
import friends from './pages/friends';
import friendscomponent from './components/friends';
import profile from './pages/profile';

const Tabs = createMaterialTopTabNavigator(
  {
    Vazia: {
      screen: vazia,
      navigationOptions: () => ({
        title: 'Vazia',
      }),
    },
    Prenha: {
      screen: prenha,
      navigationOptions: () => ({
        title: 'Prenha',
      }),
    },
    TercoFinal: {
      screen: terco_final,
      navigationOptions: () => ({
        title: 'Lac. Final',
      }),
    },
    Seca: {
      screen: seca,
      navigationOptions: () => ({
        title: 'Seca',
      }),
    },
    Transicao: {
      screen: transicao,
      navigationOptions: () => ({
        title: 'Transição',
      }),
    },
  },
  {
    tabBarOptions: {
      scrollEnabled: true,
      labelStyle: {
        color: 'black',
        fontWeight: 'bold',
      },
      style: {backgroundColor: 'white'},
      indicatorStyle: {backgroundColor: Colors.cor_default},
    },
  },
);

const Stack = createStackNavigator({
  Home: {
    screen: index,
    navigationOptions: () => ({
      title: 'MiBook',
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      headerLeft: (
        <IconMaterialCommunityIcons
          name="menu"
          style={{fontSize: 22, marginRight: -30, marginLeft: 10}}
        />
      ),
      headerRight: (
        <IconMaterialCommunityIcons
          name="bell-outline"
          style={{fontSize: 22, marginRight: 15}}
        />
      ),
    }),
  },
  AvaliationHome: {
    screen: avaliation_index,
    navigationOptions: () => ({
      title: 'Avaliação',
      headerTitleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
      },
    }),
  },
  AvaliationQuestion: {
    screen: avaliation_questions,
    navigationOptions: () => ({
      title: 'Questões',
      headerTitleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
      },
    }),
  },
  Avaliation: {
    screen: avaliation,
    navigationOptions: () => ({
      title: 'Categorias da avaliação',
      headerTitleStyle: {
        fontSize: 15,
        fontWeight: 'bold',
      },
    }),
  },
});

const Container = createAppContainer(
  createSwitchNavigator({
    Stack,
    profile,
    friends,
    friendscomponent,
    avaliation_questions,
  }),
);

module.exports = Container;
console.disableYellowBox = true;
