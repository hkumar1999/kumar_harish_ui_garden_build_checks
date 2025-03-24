**React UI Component Library with Storybook**

**Author: Harish Kumar**

**Assignment 13: UC Component Library**

## **Overview**

This project is a **React-based UI Component Library** built with **Storybook** and **Dockerized for production**.  
It includes **code quality checks** using **Husky, ESLint, Prettier, and Jest** to ensure that all code meets best practices.

This assignment enhances the **previous Storybook UI Component Library** by adding:
**Pre-commit hooks using Husky**  
**Linting & Formatting with ESLint & Prettier**  
**Automated Testing with Jest**  
**Dockerized Production Build**  
**CI/CD Pipeline with GitHub Actions**

The project can be accessed at:  
**http://localhost:8018** (after running the Docker container)

## **Installation & Setup**

### **Prerequisites**

Ensure you have the following installed:  
**Node.js (v16 or later)**  
**npm (v8 or later)**  
**Docker (latest version)**  
**Git**

## **Clone the Repository**

```sh
git clone https://github.com/hkumar1999/kumar_harish_ui_garden_build_checks.git
```

Navigate into the project folder:

```sh
cd kumar_harish_ui_garden_build_checks
```

## **Install Dependencies**

```sh
npm install
```

## Run Storybook Locally\*\*

```sh
npm run storybook
```

Storybook will start at:  
**http://localhost:6006**

## **Husky Pre-commit Checks**

Husky prevents code from being committed unless it passes **Lint, Formatting, and Tests**.  
To test the pre-commit hook:

```sh
git commit -m "Testing Husky Pre-commit"
```

## **Build and Run the Docker Container**

### **1️Build the Docker Image**

```sh
docker build -t kumar_harish_coding_assignment13 .
```

### **Run the Docker Container**

```sh
docker run -p 8018:6006 --name kumar_harish_coding_assignment13 kumar_harish_coding_assignment13
```

The application will be available at:  
**http://localhost:8018**

## **GitHub Actions Integration**

This project includes **CI/CD automation** using **GitHub Actions**.  
Every push to **GitHub** triggers:  
**Linting** (`npm run lint`)  
 **Formatting** (`npm run format`)  
 **Tests** (`npm test`)

To check workflow status:  
 Go to **GitHub Repository**  
 Click **Actions Tab**  
 Verify if CI/CD passes
