📌 Handling Loading States and Error Boundaries
📖 Overview

In this module, I implemented loading skeletons and error boundaries in my Next.js App Router application to handle asynchronous data fetching gracefully. Instead of showing blank screens or crashing when errors occur, the app now provides user-friendly fallback UIs. This improves user experience, builds trust, and makes the application more resilient.

⚙️ Implementation Summary
1. Loading Skeleton

To indicate data fetching progress, I created a loading.tsx file inside the route folder:

app/users/loading.tsx


This file displays a skeleton UI using simple CSS animations. When the page fetches data slowly, the skeleton layout appears first, giving users a visual structure of the content before it fully loads.

Skeleton styles were added in globals.css using a pulse animation to simulate loading placeholders.

2. Error Boundary

To handle unexpected failures, I created an error.tsx file in the same route:

app/users/error.tsx


If data fetching fails or an error is thrown in the page component, this file displays a friendly error message along with a Try Again button. The reset() function allows users to retry rendering the page without refreshing the browser.

3. Data Fetch Simulation

Inside app/users/page.tsx, I simulated a slow network using a timeout delay. I also tested failure scenarios by manually throwing an error to confirm that the error boundary works correctly.

🧪 Testing and Evidence
✅ Loading State

Introduced a 2-second delay in data fetching.

Observed skeleton UI before content loads.

Screenshot captured showing skeleton placeholders.

❌ Error State

Forced an error inside the page component.

Error boundary displayed fallback UI with retry button.

Screenshot captured showing error message.

✔️ Success State

Removed forced error.

Data loaded normally after skeleton.

Screenshot captured showing final content.

💡 Reflection

Implementing loading and error states significantly improves user experience. Skeleton loaders prevent confusion during slow network responses, while error boundaries ensure the application does not crash when something goes wrong. This approach keeps users informed, maintains trust, and makes the application feel professional and reliable.

🚀 Conclusion

By using loading.tsx and error.tsx in the Next.js App Router, the application now gracefully handles asynchronous operations. This makes the UI more resilient and enhances overall usability.