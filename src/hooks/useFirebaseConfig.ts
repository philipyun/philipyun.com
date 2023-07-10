import { getFirebaseConfigValue } from '@/util/firebase';
import { useState, useEffect } from 'react';

type ConfigType = 'json' | 'number' | 'boolean';

export const useFirebaseConfig = <T>(configKey: string, type?: ConfigType) => {
  const configType = type ?? 'json';
  const [configValue, setConfigValue] = useState<T | null>(null);

  useEffect(() => {
    const initializer = async () => {
      const config = await getFirebaseConfigValue(configKey, type);
      setConfigValue(config);
    };

    initializer();
  }, []);

  return configValue;
};
