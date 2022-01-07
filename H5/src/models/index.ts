import { Effect, Reducer, Subscription } from 'umi';
// import { getToken } from '@/services/index'
export interface IndexModelState {
  loginToken: null,
  accessToken: null,
}

export interface IndexModelType {
  namespace: 'global';
  state: IndexModelState;
  effects: {
    fetchGetToken: Effect;
  };
  reducers: {
    fetchGetTokenUpdate?: Reducer<IndexModelState>;
  };
}

const IndexModel: IndexModelType = {
  namespace: 'global',

  state: {
    loginToken: null,
    accessToken: null,
  },

  effects: {
    *fetchGetToken({ payload: { username, password } }, { put, call, select }) {

    },
  },

  reducers: {
    // fetchGetTokenUpdate(state, { }) {
    //   return {
    //     ...state,
    //   };
    // },
  },
};

export default IndexModel;
