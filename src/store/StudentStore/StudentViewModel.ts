import { makeAutoObservable } from 'mobx';
import { Student } from './types';
import BaseViewModel from '../BaseViewModel/BaseViewModel';

class StudentViewModel extends BaseViewModel<Student> {
  constructor(data: Student) {
    super(data);
    /** Делает все поля сущности отслеживаемыми */
    makeAutoObservable(this);
  }

  public get name() {
    return this.data.name;
  }

  public set name(value: string | undefined) {
    this.data.name = value;
  }

  public get surname() {
    return this.data.surname;
  }

  public set surname(value: string | undefined) {
    this.data.surname = value;
  }
}

export default StudentViewModel;
