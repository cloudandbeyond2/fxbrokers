'use client';

import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from '@/store/store';
import PluginInit from '@/helper/PluginInit';
import { hydrateUser } from '@/store/userSlice';

function InitUser() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hydrateUser());
  }, [dispatch]);
  return null;
}

export default function ClientProviders({ children }) {
  return (
    <Provider store={store}>
      <PluginInit />
      <InitUser />
      {children}
    </Provider>
  );
}
