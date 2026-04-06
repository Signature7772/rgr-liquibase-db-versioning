import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 5 },  // Тест 1: Smoke test (мале навантаження)
    { duration: '1m', target: 20 },  // Тест 2: Load test (середнє навантаження)
    { duration: '30s', target: 0 },  // Ramp-down (завершення)
  ],
  thresholds: {
    http_req_duration: ['p(95)<200'], // Тест 3: Тестування продуктивності (95% запитів < 200мс)
    http_req_failed: ['rate<0.01'],   // Тест на стабільність (менше 1% помилок)
  },
};

export default function () {
  // Тестуємо головну сторінку
  const res = http.get('http://localhost:8081'); 
  
  // Перевірка (Check) - аналог Assert у модульних тестах
  check(res, {
    'status is 200': (r) => r.status === 200,
    'body contains Resume': (r) => r.body.includes('Resume'),
  });

  sleep(1);
}