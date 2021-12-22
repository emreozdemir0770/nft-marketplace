import tw, { css, styled } from "twin.macro";

import Skeleton from "../Skeleton";

import { useState, useEffect } from "react";
import { MillisConvertion } from "../../../lib/Time";

export interface CardImageProps {
  artworksUrl: string;
  category: string;
  timer: Date;
  name: string;
}

const ImageContainer = styled.div(() => [
  tw`w-full rounded-xl relative overflow-hidden`,
  css`
    height: 160px;
    .preview-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
]);

const CategoryBadge = styled.h2(() => [
  tw`text-base font-normal text-white rounded-xl px-3 py-1 absolute top-3 left-3`,
  css`
    background-color: rgba(196, 196, 196, 0.5);
  `,
]);

const TimerWrapper = styled.div(
  tw` absolute bottom-0 left-0 flex items-center justify-center w-full py-2 text-white bg-black-background-sidebar bg-opacity-80 outline-none border-none font-normal text-base`
);

const LoveButton = styled.img(({ loved }: { loved: boolean }) => [
  tw`absolute top-3 right-3 cursor-pointer w-10 h-10 rounded-full`,
  loved && tw`border-2 border-pink-500 bg-pink-500`,
]);

function CardImage({ artworksUrl, category, timer, name }: CardImageProps) {
  const [imgLoad, setImgLoad] = useState(false);
  const [tm, setTime] = useState<number[]>([]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      let diff = new Date().getTime() - timer.getTime();
      setTime(MillisConvertion(diff));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <ImageContainer>
      <img
        src={artworksUrl}
        alt={`${category}-${name}`}
        id="preview-image"
        style={imgLoad ? {} : { display: "none" }}
        onLoad={() => setImgLoad(true)}
      />
      {!imgLoad && <Skeleton />}
      <CategoryBadge>{category}</CategoryBadge>
      <LoveButton src="/icons/LOVE.svg" loved={true} alt={`love-${name}`} />
      <TimerWrapper>
        <span>{`End in: ${tm[0]}h: ${tm[1]}m: ${tm[2]}s`}</span>
      </TimerWrapper>
    </ImageContainer>
  );
}

export default CardImage;
