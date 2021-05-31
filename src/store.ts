/** @format */

import { createStore, Models, IcestoreRootState, IcestoreDispatch } from '@ice/store';
import commonModel from '@/models/commonModel';

// 定义类型
export type IStoreModels = Models;
export type IStoreDispatch<M extends Models | void = void> = IcestoreDispatch<M>;
export type IStoreRootState<M extends Models> = IcestoreRootState<M>;

interface AppStoreModels extends IStoreModels {
  commonModel: typeof commonModel;
}

const appModels: AppStoreModels = {
  commonModel,
};

const store = createStore(appModels);

export default store;

export type RootDispatch = IStoreDispatch<typeof appModels>;
export type RootState = IStoreRootState<typeof appModels>;
