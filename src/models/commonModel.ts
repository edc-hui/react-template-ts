import { RootDispatch, RootState } from '@/store';

export default {
    state: {
        systemName: '智慧楼宇产品',
    },
    reducers: {
        update(prevState: any, payload: any) {
            return {
                ...prevState,
                ...payload,
            };
        },
    },
    effects: (dispatch: RootDispatch) => ({
        setState(payload: any, rootState: RootState): void {
            // rootState对象身上可以拿到其他model中的state数据
            console.log(rootState, '全局的state');
            dispatch.commonModel.update(payload);
        },
    }),
};
