export class PostRendered {
  rendered: string;
  protected?: boolean;
}

export class Media {
  id: number;
  guid: PostRendered;
  slug: string;
  type: string;
  title: PostRendered;
}


