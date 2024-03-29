import tw, { css, styled } from "twin.macro";
import IconNavigation from "../IconNavigation";

export interface UserProfileProps {
  name: string;
  profile: string;
}

const UserProfileContainer = styled.div(
  tw`text-white relative h-12 rounded-full flex-shrink-0  hover:bg-white hover:bg-opacity-10 hover:backdrop-blur-md`
);

const UserProfileNvaigation = styled.button(
  tw`flex flex-row flex-none justify-between gap-x-4 items-center pr-0 lg:pr-8 h-full rounded-l-xl focus:border-black-background-sidebar focus:ring-0`
);

const NavigationPopupContainer = styled.div(() => [
  tw`border-gray-background-icon-1  backdrop-blur-md bg-gray-900 bg-opacity-75  group-focus-within:opacity-100 group-focus-within:translate-y-1 group-focus-within:visible absolute right-0 top-full invisible z-50 w-60 rounded-xl border opacity-0 transition-all`,
  ,
  css`
    ul {
      display: flex;
      padding: 0.25rem 0;
      flex-direction: column;
    }
    ul > li {
      padding: 1rem 1rem;
      display: flex;
      justify-content: flex-end;
      a {
        color: #fff;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 16px;
        font-weight: 400;
        text-align: right;
        width: 100%;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  `,
]);

const Username = styled.div(
  tw`lg:flex lg:flex-row hidden lg:items-center lg:gap-x-2`
);

function UserProfile({ name, profile }: UserProfileProps) {
  return (
    <UserProfileContainer className="group">
      <UserProfileNvaigation onClick={(e) => e.preventDefault()}>
        <IconNavigation icon={profile} isUserProfile={true} text={name} />
        <Username>
          {name}
          <svg
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 1.84135e-05C2.23365 -0.000437899 2.46008 0.0809368 2.64 0.230018L8 4.71002L13.37 0.39002C13.4723 0.306954 13.59 0.244922 13.7163 0.20749C13.8427 0.170059 13.9752 0.157965 14.1062 0.171904C14.2372 0.185843 14.3642 0.22554 14.4798 0.288714C14.5955 0.351888 14.6975 0.437293 14.78 0.540019C14.8631 0.642307 14.9251 0.760003 14.9625 0.886343C15 1.01268 15.0121 1.14517 14.9981 1.2762C14.9842 1.40723 14.9445 1.53421 14.8813 1.64985C14.8181 1.76549 14.7327 1.8675 14.63 1.95002L8.63 6.78002C8.45106 6.9271 8.22662 7.00751 7.995 7.00751C7.76337 7.00751 7.53893 6.9271 7.36 6.78002L1.36 1.78002C1.25874 1.69607 1.17504 1.59297 1.11368 1.47662C1.05233 1.36027 1.01453 1.23297 1.00246 1.10199C0.990384 0.971013 1.00427 0.838941 1.04331 0.713337C1.08236 0.587733 1.14579 0.471067 1.23 0.370018C1.32305 0.255305 1.44036 0.162631 1.5735 0.098656C1.70664 0.0346811 1.85229 0.000994963 2 1.84135e-05Z"
              fill="white"
            />
          </svg>
        </Username>
      </UserProfileNvaigation>
      <NavigationPopupContainer tabIndex={0}>
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Wishlist</a>
          </li>
          <li>
            <a href="#" style={{ fontWeight: 600 }}>
              Sign out
            </a>
          </li>
        </ul>
      </NavigationPopupContainer>
    </UserProfileContainer>
  );
}

export default UserProfile;
