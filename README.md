# Zeraki

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

## 📗 Table of Contents

- [📖 Awesome Books Project ](#-awesome-books-project-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Deployment](#deployment)
  - [👥 Authors ](#-authors-)

<!-- PROJECT DESCRIPTION -->

# 📖 Sales Agent Dashboard <a name="about-project"></a>

This project is a responsive sales agent dashboard aimed at facilitating the management of school accounts, invoicing, and collections. It includes dynamic counters, data visualizations, and comprehensive management interfaces for schools, invoices, and collections.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

#### Client

- React
- TailwindCSS
- Recharts
- NextUI

#### Server

- JSON Server
<!-- Features -->

### Key Features <a name="key-features"></a>

#### Side Navigation

Implemented a side navigation bar to enhance navigation and organization within the application, divided into two primary modules:

- **Dashboard Module**: Displays dynamic counters for Collections, Sign-ups, Total Revenue, and Bounced Cheques.
- **Schools Module**: Provides a list of schools with options to view detailed information (Invoices and Collection).

#### Dashboard Overview

- **Top Card Metrics**: Displays key performance indicators including Collections, Sign-ups, Total Revenue, and Bounced Cheques.
- **Targets Visualization**: Implements pie charts to visualize progress towards signup targets for Zeraki's products.
- **Signups Overview**: Uses bar graphs to represent the distribution of sign-ups across different types of schools for each product.

#### School Management

- **Schools**: Implements an interface to manage and view detailed information on each school.
- **Invoices**: Provides comprehensive management of invoices per school with enhanced filtering and CRUD capabilities.
- **Collections**: Manages collections per school effectively with capabilities to update invoice statuses based on collection outcomes.

<!-- ![Screenshot](./images/Screenshot%202.png) -->
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- You can find the website [here](https://transcendent-biscochitos-37c1a7.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- A Chrome browser
- npm

### Setup

Clone this repository to your desired folder:

```sh
  $ cd my-folder
  $ git clone https://github.com/Ochiengsteven/zeraki-sales-agent-dashboard.git
```

### Install

Install the prerequisites this project using:

```sh
  cd zeraki-sales-agent-dashboard
  npm install
```

### Usage

To run the project:

### 1. Start the server

- To start the JSON Server after installing dependencies, run the following command:

```sh
  json-server --watch db.json -p 5000
```

### 2. Start client

- To start app, run the following command:

```sh
  npm run dev
```

<!--
Example command:

sh
  bin/rails test test/models/article_test.rb
--->

### Deployment

I deployed this project using: **Netlify**

<!--
Example:

sh

 -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Author <a name="authors"></a>

👤 **Ochieng Steven Otieno**

- GitHub: [@Ochiengsteven](https://github.com/Ochiengsteven)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/steven-ochieng-a43125179/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
