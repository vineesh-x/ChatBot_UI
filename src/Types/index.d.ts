export interface MenuItemProps {
    title: string;
    image: any;
    onPress: () => void;
  }

  export type RootStackParamList = {
    'Camera-Gallery': { source: string };
  };
  