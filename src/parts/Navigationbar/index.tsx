import tw, { styled, css } from "twin.macro";
import IconNavigation from "../../components/IconNavigation";
import UserProfile from "../../components/UserProfile";
import Search from "../../components/Search";
import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import SidebarContent from "../Sidebar/Content";
import ButtonSidebar from "../../components/ButtonSidebar";

const NavigationContainer = styled.div(
  tw`gap-x-4 max-w-full p-5 sm:w-full w-screen flex flex-row bg-gray-900/95 justify-between items-center backdrop-blur-md sticky top-0 z-40`
);

const CardNFTValue = styled.div(
  tw`hidden sm:flex flex-row flex-shrink-0 gap-x-2 items-center rounded-lg text-sm justify-center p-4 h-12 text-white bg-black-background-sidebar`
);

const CardNFTValueModal = styled.div(
  tw`flex flex-row flex-shrink-0 py-2 px-4 gap-x-2 items-center rounded-lg text-lg justify-start my-8 mx-2 h-12 text-white bg-black-background-sidebar`
);

const HambMenu = styled.div(() => [
  css`
    display: flex;
    flex-direction: column;
    @media (min-width: 640px) {
      display: none;
    }
  `,
]);

const Modalheaderwrapper = styled.div(() => [
  tw`flex flex-row justify-between items-center`,
  css`
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      h1 {
        margin-left: 4px;
        background: linear-gradient(103.85deg, #6763fd 5.47%, #b84ef1 96.28%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        font-size: 20px;
        font-weight: 600;
      }
      img {
        height: 40px;
        width: 40px;
      }
      button {
        justify-content: center;
      }
    }
  `,
]);

const MenuModal = styled.div(() => [
  tw`top-0 left-0 w-full h-full overflow-hidden fixed max-h-screen bg-gray-900/95 p-4 flex flex-col z-50`,
]);

function Navigationbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <MenuModal>
          <Modalheaderwrapper>
            <Hamburger toggled={isOpen} color="#ffffff" toggle={setOpen} />
            <div>
              <img src="/icons/ETHLOGO.svg" alt="Etherium" />
              <h1>Cuan Maker</h1>
            </div>
            <span></span>
          </Modalheaderwrapper>
          <CardNFTValueModal>
            <img src="/icons/ETH.svg" alt="Etherium" />
            543,694,489 ETH
          </CardNFTValueModal>

          {SidebarContent &&
            SidebarContent.map((item, index) => {
              return (
                <ButtonSidebar
                  {...item}
                  key={index}
                  isExpand={true}
                  isActive={false}
                />
              );
            })}
        </MenuModal>
      )}
      <NavigationContainer>
        <HambMenu>
          <Hamburger toggled={isOpen} color="#B84EF1" toggle={setOpen} />
        </HambMenu>
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
    </>
  );
}

export default Navigationbar;
