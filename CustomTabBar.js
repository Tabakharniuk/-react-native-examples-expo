/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function YourLogoComponent() {
  return <View><Text>LOGO ICON</Text></View>;
}

class CustomTabBar extends React.PureComponent {
  render() {
    const { state, navigate } = this.props.navigation;
    const activeTabIndex = state.index;

    return (
      <View style={styles.container}>
        {state.routes.map(({
          key, routes,
        }, index) => {
          const Icon = routes[0].params.icon;
          const { title } = routes[0].params;
          const isActive = activeTabIndex === index;

          if (key === 'LOGO') {
            return <YourLogoComponent />;
          }

          return (
            <TouchableOpacity key={key} onPress={() => navigate(key)} style={styles.tabItem}>
              <Icon isActive={isActive} />
              <Text style={isActive ? styles.labelActive : styles.label}>{title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    padding: 10,
    borderTopWidth: 1,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: 'black',
  },
  labelActive: {
    color: 'red',
  },
});

export default CustomTabBar;
