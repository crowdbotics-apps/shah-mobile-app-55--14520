import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen113916Navigator from '../features/BlankScreen113916/navigator';
import BlankScreen013915Navigator from '../features/BlankScreen013915/navigator';
import BlankScreen113813Navigator from '../features/BlankScreen113813/navigator';
import BlankScreen213811Navigator from '../features/BlankScreen213811/navigator';
import BlankScreen013797Navigator from '../features/BlankScreen013797/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen113916: { screen: BlankScreen113916Navigator },
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
