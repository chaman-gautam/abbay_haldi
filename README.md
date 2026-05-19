# About Abby Haliti Color Studio

</br>


Abby Haliti Color Studio is a professional salon specializing in custom hair color, balayage, blonding, precision cuts, and personalized styling services.

The studio is known for delivering high-end, detail-oriented transformations tailored to each client's hair goals, lifestyle, and maintenance preferences.

---

### ✨ Services Offered

- 🎨 Custom Hair Color
- 🌟 Balayage & Highlights
- 💎 Blonding & Color Correction
- ✂️ Precision Haircuts
- 💨 Professional Blowouts
- 🧴 Hair Treatments
- 👰 Bridal & Special Event Styling

---

### 🎯 Purpose of This Platform

This application was developed to digitize and streamline the complete booking process for Abby Haliti Color Studio.

Instead of relying on manual appointment scheduling, the platform provides:

- 🤖 A guided booking assistant that helps clients choose the right service
- 📅 Real-time appointment availability
- 📧 Automatic confirmation emails
- 📊 A centralized admin dashboard for managing bookings
- 🔍 Smart recommendation logic based on client goals

---

### 💼 Business Benefits

- Reduces time spent on manual scheduling
- Improves customer experience
- Prevents double bookings
- Organizes appointments in one dashboard
- Provides a more professional online presence

---

### 🌐 Website Modules Included

#### Public Website
- Home Page
- About Page
- Services Page
- Portfolio / Gallery
- Testimonials
- Blog
- Contact Page
- Intelligent Booking Assistant

#### Administration Panel
- Dashboard Overview
- Booking Management
- Status Updates
- Service Type Management
- Result Type Management
- Recommendation Rules
- Contact Settings

---
## Main Features

### Guided Booking Flow

The booking assistant walks the customer through the following steps:

1. Select the type of service
2. Choose the desired result
3. Receive a recommended service
4. Select an appointment date
5. View available time slots
6. Enter personal details
7. Confirm the booking

### Dynamic Time Slot Availability

Available slots are generated automatically based on:

* Predefined business hours
* Maximum bookings allowed per slot
* Existing confirmed and pending bookings

### Service Recommendation Engine

The system matches:

* Service Type
* Desired Result

to a recommended salon service, along with:

* Estimated duration
* Approximate price

### Email Notifications

After a booking is submitted:

* The salon owner receives a notification email
* The customer receives a confirmation email

If email delivery fails, the booking is still saved successfully.

### Booking Status Management

Each appointment can be marked as:

* Pending
* Confirmed
* Completed
* Cancelled

### Admin Search and Filters

Bookings can be filtered by:

* Search term
* Status
* Service type
* Sort order

---

## Technology Stack

### Frontend

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes

### Database

* Supabase (PostgreSQL)

### Email

* Nodemailer
* Gmail SMTP

### Deployment

* Vercel

---

## Project Structure

```text
src/
├── app/
│   ├── api/
│   │   ├── booking/
│   │   ├── available-slots/
│   │   ├── recommendation/
│   │   └── admin/
│   ├── admin/
│   └── page.tsx
│
├── components/
│   ├── BookingWidget.tsx
│   ├── AdminSidebar.tsx
│   ├── AdminHeader.tsx
│   └── tabs/
│
├── lib/
│   └── supabase.ts
│
└── types/
```

---

## Running the Project Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Deployment

The project is deployed on Vercel and connected to GitHub for automatic deployments.

Whenever changes are pushed to the `main` branch, Vercel builds and publishes the latest version.

---

## Admin Dashboard Modules

* Dashboard Overview
* Bookings Management
* Service Types
* Result Types
* Recommendation Rules
* Contact Settings

---

## Booking Workflow

1. Customer opens the booking assistant.
2. The assistant asks about the desired service.
3. A recommendation is generated.
4. Available dates and time slots are displayed.
5. Customer submits contact details.
6. Booking is stored in Supabase.
7. Notification emails are sent.
8. Admin reviews and updates the booking status.

---

## Production Notes

* Bookings are always saved before attempting to send email.
* Email failures do not prevent successful booking submissions.
* Time slots automatically respect capacity limits.
* The admin dashboard is optimized for day-to-day salon operations.

---



### 🚀 Project Vision

The goal of this platform is to provide a seamless digital experience that reflects the premium quality of Abby Haliti Color Studio.

From the first interaction to final appointment confirmation, every step is designed to be elegant, efficient, and user-friendly.

---

<div align="center">

### ✨ Premium Hair Color Meets Smart Technology ✨

**Designed exclusively for Abby Haliti Color Studio to deliver a modern, professional, and intelligent salon booking experience.**

</div>

---
