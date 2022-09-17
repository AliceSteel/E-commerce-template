import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
)
//to create memoized selector:

export const selectCategoriesMap = createSelector(  
    [selectCategories],  //as long as this array doesn't change, the following method doesnt re-run
    (categories) => categories.reduce((acc, category) =>{
        const {title, items} = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
)