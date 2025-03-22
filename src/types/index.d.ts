type TActiveLinkProps = {
  children: React.ReactNode;
  url: string;
}

type TMenuItem = {
  url: string;
  title: string;
  icon: React.ReactNode;
}

// User
type TCreateUserParams = {
  clerkId: string;
  username: string;
  email_address: string;
  name?: string;
  avatar?: string;
}

export type { TActiveLinkProps, TMenuItem, TCreateUserParams };