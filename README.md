# Spring Boot + React (Single Maven Build)

در این ساختار، فرانت‌اند React و بک‌اند Spring Boot داخل یک پروژه Maven نگه داشته شده‌اند و خروجی فرانت‌اند در زمان بیلد Maven ساخته و داخل `static/` بک‌اند قرار می‌گیرد.

## اجرا با Maven

```bash
mvn spring-boot:run
```

با اجرای دستور بالا:
- Maven وابستگی‌های فرانت‌اند را نصب می‌کند.
- فرانت‌اند را بیلد می‌کند.
- خروجی را به منابع استاتیک Spring Boot کپی می‌کند.
- برنامه را روی `http://localhost:8080` اجرا می‌کند.

API همچنان از مسیر `http://localhost:8080/api/greeting` در دسترس است.

## بیلد نهایی

```bash
mvn clean package
```

## تست بک‌اند

```bash
mvn test
```

## توسعه فرانت‌اند (اختیاری)

اگر خواستید فقط روی UI سریع‌تر کار کنید، می‌توانید همچنان به شکل جداگانه Vite را اجرا کنید:

```bash
cd frontend
npm install
npm run dev
```
