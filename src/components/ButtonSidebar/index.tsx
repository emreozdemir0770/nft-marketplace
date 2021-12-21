import tw, { css, styled } from "twin.macro";

// Button props
// type SvgType = HTMLElement & SVGElement
export interface ButtonSidebarProps {
  text: string;
  icon: string;
  isActive: boolean;
  isExpand: boolean;
}

// Button styles
const Button = styled.button(
  ({ isActive, isExpand }: { isActive: boolean; isExpand: boolean }) => [
    tw`flex items-center text-white text-base font-normal py-4 w-full justify-center relative hover:bg-white hover:bg-opacity-5`,
    css`
      span {
        display: none;
      }
      img {
        height: 36px;
        width: 36px;
      }
    `,
    isActive &&
      tw`border-l-4 border-purple-sidebar-active bg-white bg-opacity-10`,
    isExpand &&
      css`
        span {
          display: block;
        }
      `,
  ]
);

function ButtonSidebar({ text, icon, isActive, isExpand }: ButtonSidebarProps) {
  return (
    <Button {...{ isActive, isExpand }}>
      <img src={icon} alt={text} />
      <span>{text}</span>
    </Button>
  );
}

export default ButtonSidebar;
