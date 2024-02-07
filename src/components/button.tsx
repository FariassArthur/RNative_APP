import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode;
};

type ButtonTextProps = {
  children: ReactNode;
};

type ButtonIconProps = {
  children: ReactNode;
};

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      {...rest}
      className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row"
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  );
};

const ButtonText = ({ children }: ButtonTextProps) => {
  return (
    <Text className="text-black font-heading text-base mx-2">{children}</Text>
  );
};

const ButtonIcon = ({ children }: ButtonIconProps) => {
  return children;
};

Button.Text = ButtonText;
Button.Icon = ButtonIcon;
/* Basicamente injeto os elementos dentro do outro e exporto o elemento principal paraa utiização */
export { Button };
