import tw, { styled } from "twin.macro";

const Button = styled.button(tw`rounded-lg bg-white px-6 py-3`);

const Span = styled.span(
  tw`text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-background-banner-1 to-purple-background-banner-2`
);

function BannerButton({ text }: { text: string }) {
  return (
    <Button>
      <Span>{text}</Span>
    </Button>
  );
}

export default BannerButton;
