import { makeAutoObservable } from 'mobx';

export interface Student {
  name?: string;
  surname?: string;
}

export class StudentsStore {
  students?: Array<Student> = [];

  constructor() {
    /** Делает все поля сущности отслеживаемыми */
    makeAutoObservable(this);
  }

  addNewStudent(student: Student) {
    this.students?.push(student);
  }
}
