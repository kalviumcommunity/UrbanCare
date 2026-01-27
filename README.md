## Input Sanitization & OWASP Compliance

To prevent XSS attacks, all user inputs are sanitized using the `sanitize-html` library before storing in the database.

A utility function `sanitizeInput()` removes all HTML tags and attributes. This ensures injected scripts such as `<script>alert("Hacked")</script>` are stripped before saving.

React automatically escapes rendered content, preventing script execution in the UI. Database queries are executed using Prisma ORM, which protects against SQL Injection by using parameterized queries.

This implementation ensures compliance with OWASP recommendations for secure input handling and output encoding.
