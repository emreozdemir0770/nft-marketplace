import tw, { css, styled } from "twin.macro";

// Button props
// type SvgType = HTMLElement & SVGElement
export interface ButtonCategoryProps {
  text: string;
  slug: string;
  category: string;
  isActive: boolean;
}

// Button styles
const Button = styled.label(({ isActive }: { isActive: boolean }) => [
  tw`flex flex-shrink-0 mr-4 items-center border-2 cursor-pointer border-white whitespace-nowrap border-opacity-0 text-white text-base font-normal py-2 pr-6 w-min justify-center rounded-3xl leading-loose bg-white bg-opacity-5 relative hover:bg-white hover:bg-opacity-10`,
  isActive && tw`border-2 border-purple-sidebar-active bg-white bg-opacity-30`,
  css`
    padding-left: 11px;
    input {
      visibility: hidden;
    }
  `,
]);

function ButtonCategory({
  text,
  category,
  slug,
  isActive,
}: ButtonCategoryProps) {
  return (
    <Button {...{ isActive }}>
      <input type="radio" name={category} id={slug} />
      <span>{text}</span>
    </Button>
  );
}

export default ButtonCategory;
