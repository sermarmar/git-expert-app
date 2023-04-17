interface IImages {
  downsized_medium: {
    url: string | null;
  };
}

interface IGif {
  id: number;
  title: string;
  images: IImages;
}

interface IGifList {
  gifs: IGif[];
}

interface IGifDataList {
  data: IGifData[] | null;
}

interface IGifData {
  id: number;
  title: string;
  url: string;
}
