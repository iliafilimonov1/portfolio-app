import React from 'react';
import { UserStore } from '@/store/UserStore/UserStore';

/** Создаем контекст сущностей (синглтон) для дальнейшей работы с ними */
const storesContext = React.createContext({
  /** Сущность пользователя */
  userStore: new UserStore(),
});

export default storesContext;
