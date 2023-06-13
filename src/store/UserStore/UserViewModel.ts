import { makeAutoObservable, runInAction } from 'mobx';
import BaseViewModel from '../BaseStore/BaseViewModel';
import { IUser } from './types';

class UserViewMode extends BaseViewModel<IUser> {
  constructor(data: IUser) {
    super(data);
    makeAutoObservable(this);
  }

  public get id() {
    return this.data?.id;
  }

  set(value: string) {
    runInAction(() => {
      this.data.id = value;
    });
  }
}

export default UserViewMode;
