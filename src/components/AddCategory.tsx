import { ChangeEvent, Dispatch, FormEvent, useState, SetStateAction } from 'react';

// interface CategoryProps {
//     onNewCategory: (setCategories: SetStateAction<string[]>) => void;
// }

export const AddCategory = ( {onNewCategory} : any ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value);
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        // newCategory( categories => [inputValue, ...categories] );
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={ inputValue } 
                onChange={ onInputChange }
            />
        </form>
    );
}