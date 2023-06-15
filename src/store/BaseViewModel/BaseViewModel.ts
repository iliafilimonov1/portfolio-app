import { makeAutoObservable, runInAction } from 'mobx';
import BaseStore from '../BaseStore/BaseStore';

class BaseViewModel<T> extends BaseStore {
  private _data: Partial<T>;

  private _errors: Record<string, string>;

  public get data() {
    return this._data;
  }

  public get errors() {
    return this._errors;
  }

  constructor(data: Partial<T>) {
    super();
    this._data = data;
    this._errors = {};
    makeAutoObservable(this);
  }

  public clear() {
    runInAction(() => {
      this._data = {};
      this._errors = {};
    });
  }
}

export default BaseViewModel;
