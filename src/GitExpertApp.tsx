import { useState } from 'react';
import { AddCategory, GitGrid } from './components';

export const GitExpertApp = () => {

    const [ categories, setCategories ] = useState(['Demon Slayer']);

    const handleAddCategory = (newCategory: string) => {
        if( categories.map(s => s.toLowerCase()).includes(newCategory.toLowerCase()) ) return;
        setCategories( [newCategory, ...categories] );
    };

    return (

        <div>
            <h1>GitExpertApp</h1>

            <AddCategory 
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