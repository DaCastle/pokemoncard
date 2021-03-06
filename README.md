# pokemoncard
angular5 with Bootstrap4 frontend, .net core 2 backend

# prerequisites
Node.js installed (https://nodejs.org/en/)(for npm addition)

.Net Core installed (https://www.microsoft.com/net/learn/get-started/windows#windowscmd)

# Clone
Clone or zip/extract the the repo to your preferred location

# npm
through the command prompt(as admministrator), navigate into the 'pokeAPIdotnetcoreAngular5' folder

run 'npm install'

# run the application
run 'dotnet run'

open a second command prompt(as administrator), navigate into 'pokeAPIdotnetcoreAngular5' folder

run 'ng serve --proxy-config proxy.config.json'

(the proxy file allows the angular app to communicate nicely with your backend api)

the output of the command will list the port the Angular app is running on, such as 'open your browser on http://localhost:4200/'

# View the live app
the Angular app is accessible in a browser via the link from the output stated directly above (should be http://localhost:4200)

# Notes
active app reload should occur on any frontend file *save* that takes place

Great resource for setting this up: https://medium.com/@levifuller/building-an-angular-application-with-asp-net-core-in-visual-studio-2017-visualized-f4b163830eaa


# adding Continuous Integration and Continuous Delivery

The followup from the above article helped me get CI and CD in place: 

https://medium.com/@levifuller/how-to-deploy-an-angular-cli-application-built-on-asp-net-1fa03c0ca365
