import axios from "axios";
import { create } from "zustand";

export const createStore = create((set) => ({
  user: [],
  count: 0,
  WorkName: {
    name: "Increment and Decrement numbers",
    usersName: "Users - Name",
  },
  decrement: () =>
    set((state) => ({
      ...state,
      count: state.count < 1 ? 0 : state.count - 1,
    })),

  increment: () =>
    set((state) => {
      return {
        ...state,
        count: state.count + 1,
      };
    }),
  fetchUserData: async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      set({ user: res.data }); // Update the state with fetched user data
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  },
}));
