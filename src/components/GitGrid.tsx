import { GitItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


interface Props {
    category: string;
}
export const GitGrid = ( {category}: Props ) => {

    const {images, isLoading} = useFetchGifs(category);

    return (
        <div>
            <h3>{ category }</h3>
            {
                isLoading ? ( <h2>Cargando...</h2> ) :
                images.data ? 
                <div className="card-grid">
                        {
                            images.data?.map((gif: IGifData) => (
                                <GitItem 
                                    key={ gif.id } 
                                    { ...gif }
                                    // title={ gif.title }
                                    // url={ gif.url }    
                                />
                            )) 
                        }
                </div> : null
            }
        </div>
    )
}