import tw, { styled, css } from "twin.macro";
import IconNavigation from "../../components/IconNavigation";
import UserProfile from "../../components/UserProfile";
import Search from "../../components/Search";

const NavigationContainer = styled.div(
  tw`gap-x-4 w-full p-5 flex flex-row rounded-lg`
);

const CardNFTValue = styled.div(
  tw`flex flex-row flex-shrink-0 gap-x-2 items-center rounded-lg text-sm justify-center p-4 h-12 text-white bg-black-background-sidebar`
);

function Navigationbar() {
  return (
    <NavigationContainer>
      <Search />
      <CardNFTValue>
        <img src="/icons/ETH.svg" alt="Etherium" />
        543,694,489 ETH
      </CardNFTValue>
      <IconNavigation
        icon="/icons/MESSAGE.svg"
        text="Message Icon"
        isUserProfile={false}
      />
      <IconNavigation
        icon="/icons/NOTIFICATION.svg"
        text="Notification Icon"
        isUserProfile={false}
      />
      <UserProfile name="Marvin McKinney" profile="/content/user-1.png" />
    </NavigationContainer>
  );
}

export default Navigationbar;
