import { runInAction } from 'mobx';
import { studentsMoc } from '@/mocs/mocs';
import BaseListStore from '../BaseListStore/BaseListStore';
import { Student } from '../StudentStore/types';

class StudentsStore extends BaseListStore<Student> {
  constructor(data?: Student[]) {
    super(data ?? []);
  }

  public fetch() {
    this.runWithStateControl(async () => {
      runInAction(() => {
        this.list = studentsMoc;
      });
    });
  }

  public addNewStudent(data?: Partial<Student>) {
    if (!data) {
      return;
    }
    const preparedStudent = {
      ...data,
      id: `${(new Date()).toISOString()}_${Math.random() * 10}`,
    };
    runInAction(() => {
      this.list = [...this.list ?? [], preparedStudent];
    });
  }

  public deleteStudent(id: string) {
    runInAction(() => {
      this.list = this.list.filter((i) => i.id !== id);
    });
  }
}

export default StudentsStore;
