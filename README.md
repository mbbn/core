# Spring Boot + React Project

این پروژه شامل یک **بک‌اند Spring Boot** و یک **فرانت‌اند React (Vite)** است.

## اجرای بک‌اند

```bash
mvn spring-boot:run
```

بک‌اند روی آدرس `http://localhost:8080` اجرا می‌شود.

## اجرای فرانت‌اند React

ابتدا وابستگی‌های فرانت‌اند را نصب کنید:

```bash
cd frontend
npm install
```

سپس پروژه React را اجرا کنید:

```bash
npm run dev
```

فرانت‌اند روی `http://localhost:5173` اجرا می‌شود و درخواست‌های `/api` را به بک‌اند پراکسی می‌کند.

## تست بک‌اند

```bash
mvn test
```

## بیلد فرانت‌اند

```bash
cd frontend
npm run build
```
