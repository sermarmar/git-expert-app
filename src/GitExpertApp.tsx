import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GitGrid } from './components/GitGrid';


export const GitExpertApp = () => {

    const [ categories, setCategories ] = useState(['Demon Slayer']);

    // const onAddCategory = () => {
    //     setCategories( ['Pokemon', ...categories] );
    //     setCategories(category => [...category, 'Pokemon']);
    // }

    const handleAddCategory = (newCategory: string) => {
        if( categories.map(s => s.toLowerCase()).includes(newCategory.toLowerCase()) ) return;

        setCategories( [newCategory, ...categories] );
    };

    return (

        <div>
            <h1>GitExpertApp</h1>

            <AddCategory 
                // newCategory={ setCategories } 
                onNewCategory={ (value: string) => handleAddCategory(value) }
            />
            <ol>
                { 
                    categories.map(category => ( 
                        <GitGrid 
                            key={ category }
                            category={ category }
                        /> 
                    ))
                }
            </ol>
        </div>

    );
}