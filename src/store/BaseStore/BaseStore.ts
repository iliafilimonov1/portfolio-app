import { makeAutoObservable, runInAction } from 'mobx';
import StateStore from '../StateStores/StateStore';
import { Status } from '../StateStores/types';

/** Абстрактный базовый класс с состоянием */
abstract class BaseStore {
  public _state?: StateStore;

  constructor() {
    try {
      makeAutoObservable(this);
    } catch (error) {
      console.warn(error);
    }
  }

  /**
   * Функция обертка в которую необходимо передавать асинхронную функцию
   * чтобы контролировать состояние загрузки
   */
  protected async runWithStateControl<T = void>(func: () => (Promise<T>)): Promise<T | undefined> {
    this._state = new StateStore(Status.Fetching);
    try {
      const result = await func();
      runInAction(() => {
        this._state = new StateStore(Status.Success);
      });
      return result;
    } catch (e) {
      runInAction(() => {
        this._state = new StateStore(Status.Error);
      });
      return undefined;
    }
  }
}

export default BaseStore;
