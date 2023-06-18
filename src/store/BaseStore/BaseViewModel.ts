import { makeAutoObservable } from 'mobx';
import BaseStore from './BaseStore';

class BaseViewModel<T> extends BaseStore {
  private _data: Partial<T>;

  private _errors?: Record<string, string>;

  public get data() {
    return this._data;
  }

  public get errors() {
    return this._errors;
  }

  constructor(data: Partial<T>) {
    super();
    this._data = data;
    makeAutoObservable(this);
  }
}

export default BaseViewModel;
