import tw, { css, styled } from "twin.macro";
import BannerButton from "../../components/BannerButton";

const BannerContainer = styled.div(
  tw`px-8 py-10 rounded-xl overflow-hidden flex flex-col bg-gradient-to-r from-purple-background-banner-1 to-purple-background-banner-2 relative`,
  css`
    h1 {
      font-size: 27px;
      font-weight: 600;
      color: white;
    }
    ,
    h2 {
      font-size: 16px;
      font-weight: 400;
      color: white;
      line-height: 24px;
      margin: 24px 0;
    }
    ,
    div {
      button {
        margin-right: 16px;
      }
    }
  `
);

const ImageBanner = styled.img(tw`absolute right-0 bottom-0 h-2/3`);

function Banner() {
  return (
    <BannerContainer>
      <h1>One Stop NFT Marketplace</h1>
      <h2>
        Discover limited-edition digital artwork
        <br />
        Create, Sell, and Collect yours now!
      </h2>
      <div>
        <BannerButton text="Start Create" />
        <BannerButton text="How It works" />
      </div>
      <ImageBanner src="/icons/BANNER.svg" alt="Banner Image" />
    </BannerContainer>
  );
}

export default Banner;
