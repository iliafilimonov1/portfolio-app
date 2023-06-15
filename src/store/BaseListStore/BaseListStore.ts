import { makeAutoObservable } from 'mobx';
import BaseStore from '../BaseStore/BaseStore';
import { IViewModel } from '../BaseViewModel/types';

class BaseListStore<T extends IViewModel<T>> extends BaseStore {
  list: T[] = [];

  constructor(data: T[]) {
    super();
    makeAutoObservable(this);
    this.list = data;
  }
}

export default BaseListStore;
