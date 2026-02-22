import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('در حال دریافت پیام...');

  useEffect(() => {
    fetch('/api/greeting')
      .then((response) => {
        if (!response.ok) {
          throw new Error('خطا در دریافت پاسخ از سرور');
        }
        return response.json();
      })
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('اتصال به بک‌اند برقرار نشد.'));
  }, []);

  return (
    <main className="container">
      <h1>فرانت‌اند React آماده است ✅</h1>
      <p>{message}</p>
    </main>
  );
}
