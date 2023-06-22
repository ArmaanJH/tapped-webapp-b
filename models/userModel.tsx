export type UserModel = {
  id: string;
  email: string;

  username: string;

  artistName: string;
  bio: string;
  genres: string[];
  occupations: string[];
  label: string;

  profilePicture?: string;

  placeId?: string; //google maps api location
  geohash?: string; //hash of latitude and logitude
  lat?: number;
  lng?: number;

  loopsCount: number;
  badgesCount: number;
  followerCount: number;
  followingCount: number;

  deleted: boolean;
  shadowBanned: boolean;
  accountType: string;

  epkUrl?: string;

  youtubeChannelId?: string;
  tiktokHandle?: string;
  instagramHandle?: string;
  twitterHandle?: string;
  spotifyId?: string;

  pushNotificationsLikes: boolean;
  pushNotificationsComments: boolean;
  pushNotificationsFollows: boolean;
  pushNotificationsDirectMessages: boolean;
  pushNotificationsITLUpdates: boolean;

  emailNotificationsAppReleases: boolean;
  emailNotificationsITLUpdates: boolean;

  stripeConnectedAccountId?: string;
  stripeCustomerId?: string;
};
