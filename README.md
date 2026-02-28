# מודל יבוא אישי – האם העלאת פטור המע״מ ל‑150$ טובה לציבור?

Interactive data project that explores a simple but important policy question in Israel:

> What happens if the VAT‑exemption threshold on **personal import parcels** is raised  
> from **75 $ to 150 $**?  
> Who benefits and who loses – consumers, the Israeli government, or local businesses?

The site is in **Hebrew** and built as a BI‑style dashboard that presents a **transparent scenario model** based on open data and explicit assumptions.

---

## 🎯 Project goals

- Present a **clear, visual comparison** between two policy scenarios:
  - Current situation – VAT exemption up to **75 $**
  - Proposed scenario – VAT exemption up to **150 $**
- Quantify, in a simple way:
  - Estimated **VAT revenue** for the state  
  - Estimated **annual savings** for consumers  
  - Approximate **shift of spending** from Israeli businesses to foreign sellers
- Demonstrate **BI & data‑product skills**:
  - Working with public datasets
  - Building a transparent model with documented assumptions
  - Designing a clean, user‑friendly dashboard in Hebrew

---

## 🧠 Concept & data model

Because full, granular official data about personal import parcels is not public, this project uses a **scenario model**:

- Assume an annual number of personal‑import parcels and split them into three value bands:
  - `< 75 $`
  - `75–150 $`
  - `> 150 $`
- For each band, assume an average parcel value and apply simplified VAT rules:
  - Scenario A: exemption up to **75 $**
  - Scenario B: exemption up to **150 $**
- Compute for each scenario:
  - Total VAT collected
  - Difference in VAT (lost revenue for the state)
  - Consumer savings (assuming all VAT savings flow to consumers)
  - Rough estimate of spending shifted away from local businesses
- All assumptions are stored in a JSON file and documented on the **Methodology** page so they can be easily reviewed and changed.

This is **not** a forecast or an official model – it’s a transparent tool for discussion.

---

## 📊 Main features

- **Interactive scenario toggle**  
  Switch between “פטור עד 75 $” and “פטור עד 150 $” and see all KPIs and charts update.

- **Key metrics (KPIs)**  
  - Annual VAT collected from personal import parcels  
  - Estimated annual savings for consumers  
  - Estimated annual volume of spending shifted abroad  
  - Context about Israel’s high cost of living compared to OECD countries

- **Charts**  
  - Bar chart: VAT collected by value band in each scenario  
  - Donut/pie chart: “who gains and who loses” – consumers vs state vs local businesses  

- **Methodology & data sources page**  
  A dedicated page (in Hebrew) explaining:
  - Data sources  
  - Model structure  
  - Core assumptions (with a table)  
  - Limitations and caveats  
  - Why this kind of BI visualization helps public debate

---

## 🧩 Tech stack

- **Framework:** Next.js (App Router) + TypeScript  
- **Styling:** Tailwind CSS  
- **Charts:** React‑based chart library (Recharts / Chart.js)  
- **Data:**  
  - Simplified scenario assumptions in local JSON  
  - Reference to Israeli open‑data & official information sources (data.gov.il, Ministry of Economy, Kol Zchut, etc.)

The architecture is intentionally simple: no database, no auth – just a small, focused data product that’s easy to deploy and maintain.

---

## 🚀 Getting started

```bash
# install dependencies
npm install

# run dev server
npm run dev

# open in browser
http://localhost:3000
