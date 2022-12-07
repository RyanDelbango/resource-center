import store from "../libs/store"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch