import { makeAutoObservable } from 'mobx';
import { Student } from './types';
import BaseViewModel from '../BaseViewModel/BaseViewModel';

class StudentStore extends BaseViewModel<Student> {
  constructor(data: Student) {
    super(data);
    /** Делает все поля сущности отслеживаемыми */
    makeAutoObservable(this);
  }
}

export default StudentStore;
