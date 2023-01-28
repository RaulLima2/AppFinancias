import { Button } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

function IconButton(props) {
  return (
      <Icon.Button
        {...props}
        />
  );
}


export default IconButton;