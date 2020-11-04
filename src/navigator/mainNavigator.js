import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213922Navigator from '../features/BlankScreen213922/navigator';
import BlankScreen113921Navigator from '../features/BlankScreen113921/navigator';
import BlankScreen013920Navigator from '../features/BlankScreen013920/navigator';
import BlankScreen313918Navigator from '../features/BlankScreen313918/navigator';
import BlankScreen213917Navigator from '../features/BlankScreen213917/navigator';
import BlankScreen013915Navigator from '../features/BlankScreen013915/navigator';
import BlankScreen113813Navigator from '../features/BlankScreen113813/navigator';
import BlankScreen213811Navigator from '../features/BlankScreen213811/navigator';
import BlankScreen013797Navigator from '../features/BlankScreen013797/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213922: { screen: BlankScreen213922Navigator },
BlankScreen113921: { screen: BlankScreen113921Navigator },
BlankScreen013920: { screen: BlankScreen013920Navigator },
BlankScreen313918: { screen: BlankScreen313918Navigator },
BlankScreen213917: { screen: BlankScreen213917Navigator },
BlankScreen013915: { screen: BlankScreen013915Navigator },
BlankScreen113813: { screen: BlankScreen113813Navigator },
BlankScreen213811: { screen: BlankScreen213811Navigator },
BlankScreen013797: { screen: BlankScreen013797Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
