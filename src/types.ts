export interface GeneralProps {
    img: string;
    title: string;
    text: string;
    date: string;
    author?: string;
    articleOrder?: "first"|"remaining";
    handleClick?: () => void;
}
export interface articleOrderProps {
  articleOrder: "first"|"remaining";
}
export interface NewsProps extends GeneralProps{
    url:string
}

export interface LatestNewsType extends GeneralProps {
    last:boolean
}



export interface Article {
  source: {
  id: string|null,
  name: string
  },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string 
}

export interface NewsState {
news: Article[];
category: string;
selectedArticle?: Article | null;
status: "idle" | "loading" | "succeeded" | "failed";
error: string | null;
}

export interface Publisher{
  category: string
  country:string
  description:string
  id:string
  language:string
  name:string
  url:string
}

export interface PublisherState {
  publisher: Publisher[];
  selectedAuthor: Publisher | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  }