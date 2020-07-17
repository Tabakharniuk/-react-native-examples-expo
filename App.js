import React from 'react';
import { View } from 'react-native';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import CustomTabBar from './CustomTabBar';

const Screen = () => <View />;

const TabIcon = ({ isActive }) => (
  <View style={{
    height: 20, width: 20, borderWidth: 1, borderColor: isActive ? 'red' : null,
  }}
  />
);

export default function App() {
  return (
    <Router>
      <Tabs
        tabs
        initial
        tabBarComponent={CustomTabBar}
        showLabel={false}
      >
        <Scene key="timer" title="Timer" icon={TabIcon} component={Screen} />
        <Scene key="settings" icon={TabIcon} title="Settings" component={Screen} />
        <Scene key="LOGO" component={View} />
        <Scene key="graph" component={Screen} title="Graph" icon={TabIcon} />
        <Scene key="more" component={Screen} title="More" icon={TabIcon} />
      </Tabs>
    </Router>
  );
}
