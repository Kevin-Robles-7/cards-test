import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ContentState{
    videos: Video[];
    loading: boolean;
    error:string | null;
}

interface Video{
    id: number;
    title: string;
    description: string;
    url: string
}

const initialState: ContentState={
    videos:[],
    loading:false,
    error:null,
};

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers:{
        fetchVideosStart(state){
            state.loading = true;
            state.error = null;
        },
        fetchVideosSuccess(state, action: PayloadAction<Video[]>){
            state.videos = action.payload;
            state.loading = false;
        },
        fetchVideosFailure(state, action: PayloadAction<string>){
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchVideosStart, fetchVideosSuccess, fetchVideosFailure} = contentSlice.actions;

export default contentSlice.reducer;

