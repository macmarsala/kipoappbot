import { useEffect } from 'react';
import { useTelegram } from '@telegram-apps/sdk-react';

function App() {
  const { initData, initDataUnsafe, ready, expand } = useTelegram();

  useEffect(() => {
    ready();
    expand();
  }, [ready, expand]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">KIPO App - Тестовая страница</h1>
      <p className="mb-2">initData: {initData}</p>
      <p className="mb-2">Пользователь: {initDataUnsafe?.user?.first_name}</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => alert('Тестовая кнопка работает!')}
      >
        Нажми меня
      </button>
    </div>
  );
}

export default App;
