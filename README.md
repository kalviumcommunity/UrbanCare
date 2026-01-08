
# 🏙️ Urban Care

### A MERN Stack Web Application for Urban Grievance Redressal

## 📌 Overview

**Urban Care** is a responsive, mobile-first web application built using the **MERN stack** to streamline grievance redressal in **Urban Local Bodies (ULBs)**.

The platform enables **citizens to report civic issues digitally** and **officials to manage & resolve them efficiently**, ensuring:

✔ Transparency
✔ Traceability
✔ Accountability

—all **without relying on a traditional admin-controlled system.**

---

## 🎯 Problem Statement

Urban Local Bodies often face challenges such as:

* ❌ Lack of accessible grievance redressal channels
* ❌ Poor visibility into complaint status
* ❌ Delays due to manual handling
* ❌ Low accountability of officials

As a result, **citizens are often left unaware of when or how their issues are resolved.**

---

## 💡 Solution

**Urban Care** provides a single, web-based grievance management platform where:

* 👤 **Citizens** can register complaints and track progress
* 🏢 **Officials** can manage and resolve assigned issues
* 🔍 **Every complaint stage is fully visible and traceable**

The system **minimizes dependency on centralized admin intervention** and encourages **direct citizen–official interaction.**

---

## 👥 User Roles

### 👤 Citizen

* Secure registration & login
* Submit civic complaints
* Upload images as evidence
* Track complaint status in real time
* View complaint history
* Provide feedback after resolution

### 🏢 Official

* Login to official dashboard
* View assigned complaints
* Update complaint status
* Upload resolution proof
* Handle escalated complaints
* Monitor SLA deadlines

### ❌ No Traditional Admin Role

Urban Care is designed as a **self-managed system**, where officials handle complaints directly instead of relying on a central admin panel.

---

## 🔄 Complaint Lifecycle

**Submitted → Assigned → In Progress → Resolved → Citizen Feedback**

Each stage is timestamped and recorded to maintain a **complete audit trail.**

---

## ✨ Key Features

### 📝 Complaint Registration

* Category-based issue selection
* Description & image upload
* Auto-generated unique complaint ID

### 🔍 Transparency

* Real-time complaint tracking
* Clearly visible workflow stages
* Officer assignment visibility

### ⏱️ Accountability

* SLA-based resolution timelines
* Automatic escalation on deadline breach
* Officer-wise resolution tracking

### 📊 Dashboards

* **Citizen Dashboard** → personal complaint history
* **Official Dashboard** → assigned complaints & status metrics

### 📱 Responsive Web Design

* Mobile-first UI
* Smooth experience across devices
* App-like UX with standard CSS

---

## 🛠️ Technology Stack

### 🌐 Frontend

* React.js
* React Router DOM
* Axios
* Next.js
* Tailwind CSS

### 🖥️ Backend

* Node.js
* Express.js
* RESTful APIs

### 🗄️ Database

* MongoDB
* Mongoose ODM

### 🔐 Authentication & Security

* JWT-based authentication
* Password hashing with bcrypt
* Role-based protected routes
* Secure API access

---

## 🗂️ Project Structure

```
urban-care/
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── styles/
│   │   └── App.jsx
│
├── server/                     # Node + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   │   └── db.js
│   └── server.js
│
└── README.md
```

---

## 🧠 Why MERN Stack?

* One language across frontend & backend (JavaScript)
* Scalable & modular architecture
* Industry-relevant tech
* Ideal for full-stack & civic-tech learning

---

## 🚀 Future Enhancements

* Progressive Web App (PWA)
* Push notifications
* WhatsApp-based complaint submission
* AI-based issue categorization
* Multi-language support
* Public transparency dashboards

---

## 📌 Use Cases

* Urban local governance systems
* Smart city initiatives
* College full-stack projects
* Civic-tech hackathons
* Digital governance simulations

---

## 🏁 Conclusion

**Urban Care modernizes grievance redressal by replacing opaque, manual processes with a transparent, traceable, and accountable web platform.**
By enabling **direct interaction between citizens and officials**, the system improves service delivery and builds public trust.

