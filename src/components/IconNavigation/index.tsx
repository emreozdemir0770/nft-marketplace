import tw, { css, styled } from "twin.macro";

export interface IconNavigationProps {
  icon: string;
  text: string;
  isUserProfile: boolean;
}

const IconNavigationContainer = styled.div(() => [
  tw`xs:flex hidden rounded-full relative bg-gradient-to-r from-gray-background-icon-1 to-gray-background-icon-2 cursor-pointer outline-none border-none h-12 w-12 flex-shrink-0 justify-center items-center overflow-hidden`,
]);
const UserProfileContainer = styled.img(() => [
  tw`rounded-full cursor-pointer outline-none border-none h-12 w-12 flex-shrink-0  overflow-hidden`,
]);

function IconNavigation({ icon, text, isUserProfile }: IconNavigationProps) {
  if (isUserProfile) {
    return <UserProfileContainer src={icon} alt={text} />;
  }
  return (
    <IconNavigationContainer>
      <img src={icon} alt={text} />
    </IconNavigationContainer>
  );
}

export default IconNavigation;
