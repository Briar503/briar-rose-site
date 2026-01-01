# Deployment Instructions: GitHub Pages

These instructions will guide you through deploying your portfolio and GRC Tool to the web using GitHub Pages.

## Prerequisites
- A [GitHub account](https://github.com/).
- `git` installed on your local machine.

## Step 1: Initialize Git (If not already done)
Open your terminal in the project directory (`/Users/briar/Documents/GRC-Tool`) and run:

```bash
git init
git add .
git commit -m "Initial commit for portfolio deployment"
```

## Developing & Updating Design
If you want to change colors, fonts, or layout, you are likely using Tailwind CSS classes. To make sure these changes are reflected in the final site, you must rebuild the CSS file.

1.  **Run the Tailwind Watcher**:
    Open a terminal and run:
    ```bash
    npm run build:css
    ```
    This command will watch `input.css` and your HTML files for changes and automatically update `styles.css`.

2.  **Make Your Changes**:
    Edit `index.html`, `tool.html`, or `input.css`. The terminal will show that it is rebuilding.

3.  **Commit Changes**:
    When you are done, press `Ctrl+C` to stop the watcher.
    Then commit your changes (including the updated `styles.css`):
    ```bash
    git add .
    git commit -m "Updated design"
    ```

## Step 2: Create a Repository on GitHub
1. Log in to GitHub.
2. Click the **+** icon in the top right and select **New repository**.
3. Name your repository (e.g., `my-portfolio` or `grc-tool`).
4. Set it to **Public** (required for free GitHub Pages).
5. Click **Create repository**.

## Step 3: Push Your Code
Copy the commands provided by GitHub under "…or push an existing repository from the command line". They will look something like this:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git branch -M main
git push -u origin main
```

## Step 4: Configure GitHub Pages
1. Go to your repository **Settings** tab.
2. Click on **Pages** in the left sidebar (under "Code and automation").
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and `/ (root)`.
5. Click **Save**.

## Step 5: Live Site
GitHub will take a minute or two to build your site. 
Once complete, a banner will appear at the top of the Pages settings with your URL:

`https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

You can now share this link!

## Notes
- **Local Development**: Since this is a static site (HTML/JS/CSS), you don't need a build step.
- **Custom Domain**: If you have a domain name, you can configure it in the "Custom domain" section of the Pages settings.
