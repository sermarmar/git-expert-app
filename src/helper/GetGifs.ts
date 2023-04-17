export const getGifs = async( category: string) => {

    const api_key = 'j5c55iwuz2kce8Sl5Tn6SjNDpWHjbMP2';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ category }&limit=${ 10 }`;

    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs: IGifDataList = {
        data: data.map( (img: IGif) => ({
            id: img.id,
            title: img.title,
            url: img.images ? img.images.downsized_medium.url : null
        }))
    };

    return gifs;
}