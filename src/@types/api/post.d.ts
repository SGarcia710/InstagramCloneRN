type Post = {
  user: {
    username: string;
    avatarUrl: string;
    isVerified: boolean;
  };
  media: {
    url: string;
    type: 'video' | 'image';
    size: {
      width: number;
      height: number;
    };
  }[];
  description: string;
  place: {
    name: string;
  };
};
