export class PostRendered {
  rendered: string;
  protected?: boolean;
}

export class Post {
  id: number;
  date: string;
  slug: string;
  status: number;
  type: string;
  title: PostRendered;
  content: PostRendered;
  excerpt: PostRendered;
  featured_media: number;
}


