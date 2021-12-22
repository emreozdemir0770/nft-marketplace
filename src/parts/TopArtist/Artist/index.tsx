import tw, { styled, css } from "twin.macro";

export interface ArtistProps {
  createdAt: Date;
  name: string;
  avatar: string;
  username: string;
  id: string;
  num: number;
}

const ArtistContainer = styled.div(() => [
  tw`relative flex flex-row items-center flex-shrink-0 gap-x-2 sm:gap-x-4 w-full`,
  css`
    height: 48px;
    h2 {
      margin: 0 8px;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
    }
  `,
]);

const ImageProfile = styled.img(
  tw`sm:w-12 sm:h-12 w-8 h-8 rounded-full p-0 outline-none bg-none m-0 flex-shrink-0`
);

const UsernameContainer = styled.div(() => [
  tw`flex flex-col items-stretch`,
  css`
    h3 {
      white-space: nowrap;
      font-size: 16px;
      font-weight: 400;
      color: #fff;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      color: #878787;
    }
    @media (max-width: 640px) {
      h3 {
        white-space: nowrap;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
      }
      p {
        font-size: 12px;
        font-weight: 400;
        color: #878787;
      }
    }
  `,
]);

const ButtonFollow = styled.div(
  tw`py-2 px-4 rounded-xl text-white cursor-pointer font-normal text-base bg-gradient-to-r absolute right-2 from-purple-background-banner-1 to-purple-background-banner-2`
);

function Artist(props: ArtistProps) {
  return (
    <ArtistContainer>
      <h2>{props.num}</h2>
      <ImageProfile src={props.avatar} alt={props.username} />
      <UsernameContainer>
        <h3>{props.name}</h3>
        <p>{props.username}</p>
      </UsernameContainer>
      <span className="w-full" />
      <ButtonFollow>Follow</ButtonFollow>
    </ArtistContainer>
  );
}

export default Artist;
