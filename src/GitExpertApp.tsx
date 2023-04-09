import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GitExpertApp = () => {

    const [ categories, setCategories ] = useState(['Demon Slayer', 'Hero Academy']);

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
            {/* Titulo */}
            <h1>GitExpertApp</h1>

            {/* busqueda */}
            <AddCategory 
                // newCategory={ setCategories } 
                onNewCategory={ (value: string) => handleAddCategory(value) }
            />
            <ol>
                { categories.map(category => {
                    return <li key={category}> {category} </li>
                }) }
            </ol>
        </div>

    );
}

/* function GitExpertApp() {
    return (
        <h1>GitExpertApp</h1>
    );
}

export default GitExpertApp; */