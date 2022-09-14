import { createSlice, configureStore } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { rewardModalOpen: false, thanksModalOpen: false },
  reducers: {
    showRewardModal(state) {
      state.rewardModalOpen = true;
    },
    hideRewardModal(state) {
      state.rewardModalOpen = false;
    },
    showThanksModal(state) {
      state.thanksModalOpen = true;
      state.rewardModalOpen = false; 
    },
    hideThanksModal(state) {
      state.thanksModalOpen = false;
    },
  },
});

const rewardSlice = createSlice({
  name: "reward",
  initialState: { selectedReward: "" },
  reducers: {
    selectReward(state, action) {
      state.selectedReward = action.payload;
    },
  },
});

const backedSlice = createSlice({
  name: "backed",
  initialState: { amountBacked: 89914, backers: 5007 },
  reducers: {
    updateAmount(state, action) {
      state.amountBacked += action.payload;
    },
    updateBackers(state) {
      state.backers += 1;
    },
  },
});

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    reward: rewardSlice.reducer,
    backed: backedSlice.reducer,
  },
});

export const modalActions = modalSlice.actions;
export const rewardActions = rewardSlice.actions;
export const backedActions = backedSlice.actions;
export default store;
