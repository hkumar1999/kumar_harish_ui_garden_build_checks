# React UI Component Library with Storybook

# Author: Harish Kumar

# Assignment 12: Web Component Library

# Overview

This project is a React-based UI Component Library built with Storybook.It is Dockerized for production and can be accessed at http://localhost:8083.

# Features

Modular UI Components (Button, Label, Table, Dropdown, Radio Button, etc.)Storybook for Component TestingStyled-Components for Custom StylingResponsive & Fully InteractiveDockerized for Easy Deployment

# Installation & Setup

## Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later)
- npm (v8 or later)
- Docker (latest version)

# Clone the repository

git clone https://github.com/your-username/component-library.git

# Github link

https://github.com/hkumar1999/kumar_harish_ui_garden

# Go into the project directory

cd component-library

# Install dependencies

npm install

# Start Storybook

npm run storybook

# Build the Docker image

docker build -t Kumar_Harish_coding_assignment12 .

# Run the Docker container

docker run -d -p 8083:6006 --name Kumar_Harish_coding_assignment12

# Open the application in the browser

http://localhost:8083
