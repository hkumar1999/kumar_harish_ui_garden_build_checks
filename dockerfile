# Use an official Node.js image as the base
FROM node:18-alpine

# Install Git inside the container
RUN apk add --no-cache git

# Set the working directory inside the container
WORKDIR /kumar_harish_ui_garden_build_checks

# Copy package.json and package-lock.json first for caching
COPY package.json package-lock.json ./

# Install dependencies (fix legacy peer dependencies issues)
RUN npm install --legacy-peer-deps

# Ensure public and Storybook config directories exist before copying
RUN mkdir -p /kumar_harish_ui_garden_build_checks/public \
             /kumar_harish_ui_garden_build_checks/.storybook

# Copy public folder separately
COPY public /kumar_harish_ui_garden_build_checks/public

# Copy Storybook configuration separately
COPY .storybook /kumar_harish_ui_garden_build_checks/.storybook

# Copy all remaining files (excluding those in .dockerignore)
COPY . /kumar_harish_ui_garden_build_checks/

# Verify Storybook config exists inside the container
RUN ls -la /kumar_harish_ui_garden_build_checks/.storybook || echo "Storybook config directory not found"

# Ensure Husky, ESLint, Prettier, and Tests run before the build
RUN npx husky install
RUN npm run lint
RUN npm run format

# Build Storybook for production
RUN npm run build-storybook

# Expose the correct Storybook port inside the container 
EXPOSE 6006

# Start Storybook and bind it to 0.0.0.0
CMD ["npm", "run", "storybook", "--", "--no-open", "--port", "6006"]
