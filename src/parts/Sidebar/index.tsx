import tw, { styled, css } from "twin.macro";
import ButtonSidebar from "../../components/ButtonSidebar";
import SidebarContent from "./Content";

const SidebarContainer = styled.div(({ isExpand }: { isExpand: boolean }) => [
  tw`left-0 h-screen hidden flex-none sm:flex flex-col w-20 flex-shrink-0 sm:sticky top-0 z-50 bg-black-background-sidebar items-center`,
  isExpand && tw``,
]);

// Sidebar props
export interface SidebarProps {
  isExpand: boolean;
}

const LogoContainer = styled.div(() => [
  tw`py-6 border-b-2 border-gray-700 mb-4 w-full justify-center flex`,
  css`
    img {
      height: 39px;
      width: 39px;
    }
  `,
]);

function Sidebar({ isExpand }: SidebarProps) {
  return (
    <SidebarContainer {...{ isExpand }}>
      <LogoContainer>
        <img src="/icons/ETHLOGO.svg" alt="Logo" />
      </LogoContainer>
      {SidebarContent &&
        SidebarContent.map((item, index) => {
          return <ButtonSidebar key={index} {...item} />;
        })}
    </SidebarContainer>
  );
}

export default Sidebar;
