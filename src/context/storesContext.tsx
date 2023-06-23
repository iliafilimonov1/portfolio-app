import React from 'react';
import { UserStore } from '@/store/UserStore/UserStore';
import StudentsStore from '@/store/StudentsStore/StudentsStore';

/** Создаем контекст сущностей (синглтон) для дальнейшей работы с ними */
const storesContext = React.createContext({
  /** Сущность пользователя */
  userStore: new UserStore(),
  studentsStore: new StudentsStore(),
});

export default storesContext;
