import IconButton from '../IconButton';
import { Image, Text} from 'react-native';

function Header({ icon, month }) {
  // var icon = icon.active
  //   ? require('icon-active')
  //   : require('icon-inactive');
  return (
    <header>
      // <Image source={icon} />
      <IconButton
        name="right"
        backgroundColor="transparent"
        color="#139892"
        size={30}
        alignContent="center"
      />
      <Text>{month}</Text>
      <IconButton
        name="left"
        backgroundColor="transparent"
        color="#139892"
        size={30}
        alignContent="center"
      />
    </header>
  );
}

export default Header;