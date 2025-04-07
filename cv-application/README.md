Introduction
Congratulations, you have made it to the very first React project. In this project, you will be creating a small application where users can input their information and generate a CV/résumé. It’s a great project to get you started because it includes many of the basic concepts you’ve learned so far, without a huge overhead of complexity.

Assignment
Double rendering
While working on this project, you might notice that some parts of your code execute twice (e.g., console logs appearing doubled). This is due to React.StrictMode and is intended behavior. We will go through this more in the next lesson, so don’t worry about it for now.

Create a new React project.
Think about how to structure your application into components. Your application should include:
A section to add general information like name, email and phone number.
A section to add your educational experience (school name, title of study and date of study)
A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
Be sure to include an edit and submit button for each section or for the whole CV. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.
Create a components directory under your src directory and add your components.
Include a styles directory under your src directory for your CSS files. You’ll need to import these in the component files to use them.
Push the results and deploy them with any of the options mentioned below. At this point of the curriculum, it doesn’t matter which platform you choose as long as your project is live on the internet!
Deploying a React app
While we have been using GitHub Pages to deploy our static webpages till now, and we can definitely continue to do so with hacky ways, it’s far easier to let a PaaS (Platform as a Service) do the same for us! There are a lot of options to host such sites, and the Vite hosting docs go over the most popular ones among them.

Not only do some of these get rid of additional steps after pushing our code to GitHub as these services have tools that automatically deploy on push, but you also don’t have to worry about other issues further down the curriculum, like routers and build steps. We shall use a few selected options for now. Once you are done with the assignment, choose one of the following options, and deploy!

Netlify
While there are many ways to deploy to Netlify, like uploading your dist directly or using Netlify’s netlify-cli CLI, the most convenient way would be to directly import your GitHub repository to Netlify.

Push your React application to GitHub.
Import your project to Netlify by logging in, and selecting your repository.
Select the branch to deploy from (the default setting, from main, works) and hit “Deploy site”!
You can access more settings here if you need to!
Netlify Links
Netlify Homepage
Netlify Documentation Website
Vite deployment to Netlify with Git section has a similar brief guide
Vercel
Similar to Netlify, Vercel also offers a few ways to deploy, but we will be importing our GitHub repository to get benefits like deploy-on-push.

Again, push your React application to GitHub.
Import your project to Vercel.
Vercel will automatically detect that you are using Vite. Set your name as you like, and hit “Deploy”!
Vercel Links
Vercel Homepage
Vercel Documentation Website
Cloudflare pages
Yes, push your React application to GitHub.
Create a new Cloudflare account and log into it.
At the top of the page click the blue button “+” or “Add” and navigate to “Pages” in the dropdown.
On the “Pages” tab click “Connect to Git”.
Connect to GitHub and select your GitHub repository.
Under “Set up builds and deployments”, set npm run build as the build command, and dist as the build output directory.
Under “Environment variables (advanced)” > “Add variable”, add a variable named NODE_VERSION and set its value to be the version number of Node that you are using. You can find this by executing node -v in your terminal.
Hit “Save and Deploy” and watch it come to life!
Cloudflare Links
Cloudflare Pages Homepage
Cloudflare Pages documentation website
Vite deployment to Cloudflare Pages discusses these very steps