import { makeAutoObservable } from 'mobx';
import BaseStore from '../BaseStore/BaseStore';

class BaseViewModel<Model> extends BaseStore {
  private _data: Partial<Model>;

  constructor(data: Partial<Model>) {
    super();
    makeAutoObservable(this);
    this._data = data;
  }

  public get data() {
    return this._data;
  }

  public set data(data: Partial<Model>) {
    this._data = data;
  }
}

export default BaseViewModel;
