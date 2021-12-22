import tw, { styled, css } from "twin.macro";

const SkeletonContainer = styled.div(() => [
  tw`rounded-xl bg-gradient-to-r from-purple-background-banner-1 to-purple-background-banner-2 animate-pulse`,
  css`
    height: 160px;
    width: 100%;
    min-width: 325px;
  `,
]);

function Skeleton() {
  return <SkeletonContainer></SkeletonContainer>;
}

export default Skeleton;
