import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action) =>{
                state.push(action.payload)
            },
            prepare: (title, content, userId) =>{
                const id = nanoid()
                return {
                    payload: {
                        id,
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
});
export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;