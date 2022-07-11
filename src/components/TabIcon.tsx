import { MaterialIcons } from '@expo/vector-icons'

export type MaterialIconName = React.ComponentProps<typeof MaterialIcons>['name'];

type TabIconProps = {
  focused: boolean;
  color: string;
  size: number;
  name: MaterialIconName;
}

export const TabIcon = ({ focused, ...props}: TabIconProps) => (
  <MaterialIcons 
    {
      ...props
    }
  />
)