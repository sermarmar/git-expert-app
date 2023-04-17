import { useEffect, useState } from "react";
import { getGifs } from '../helper/GetGifs';

export const useFetchGifs = (category: string) => {

    const [images, setImages] = useState<IGifDataList>({data: null});
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages: IGifDataList = await getGifs(category);

        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }

}