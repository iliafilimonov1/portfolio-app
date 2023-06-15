import React from 'react';
import { UserStore } from '@/store/UserStore/UserStore';
import StudentStore from '@/store/StudentStore/StudentViewModel';

/** Создаем контекст сущностей (синглтон) для дальнейшей работы с ними */
const storesContext = React.createContext({
  /** Сущность пользователя */
  userStore: new UserStore(),
  studentStore: new StudentStore(),
});

export default storesContext;
