import tw, { styled, css } from "twin.macro";

export interface CardActivityProps {
  createdAt: Date;
  name: string;
  avatar: string;
  message: string;
  id: string;
  isOnline: boolean;
}

const CardActivityContainer = styled.div(() => [
  tw`relative flex flex-row items-center flex-shrink-0 gap-x-4 w-full p-4 rounded-xl overflow-hidden`,
  css`
    h2 {
      margin: 0 4px;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
    }
  `,
]);

const ImageProfile = styled.img(
  tw`w-12 h-12 rounded-full p-0 outline-none bg-none m-0 flex-shrink-0`
);

const UsernameContainer = styled.div(({ isOnline }: { isOnline: boolean }) => [
  tw`flex flex-col items-stretch`,
  css`
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      h3 {
        white-space: nowrap;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
      }
      svg {
        margin-left: 8px;
      }
    }
    p {
      font-size: 14px;
      font-weight: 400;
      color: #e5e5e5;
    }
  `,
  !isOnline &&
    css`
      div {
        svg {
          display: none;
        }
      }
    `,
  ,
]);

const BgLayer = styled.div(({ isOnline }: { isOnline: boolean }) => [
  isOnline &&
    css`
      background: linear-gradient(
        103.85deg,
        rgba(103, 99, 253, 0.1) 5.47%,
        rgba(184, 78, 241, 0.1) 96.28%
      );
    `,
  tw`h-full w-full top-0 left-0 absolute`,
]);

function CardActivity(props: CardActivityProps) {
  return (
    <CardActivityContainer>
      <BgLayer isOnline={props.isOnline} />
      <ImageProfile src={props.avatar} alt={props.name} />
      <UsernameContainer isOnline={props.isOnline}>
        <div>
          <h3>{props.name}</h3>
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="4.5"
              transform="matrix(-1 0 0 1 4.5 4.5)"
              fill="#6763FD"
            />
          </svg>
        </div>
        <p>{props.message}</p>
      </UsernameContainer>
    </CardActivityContainer>
  );
}

export default CardActivity;
