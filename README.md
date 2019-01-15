# Project Starter

In this activity we will add the provided boilerplate to group project repos.

## Instructions

* Only one member of each group should complete this activity while the others watch.

* Copy the entire [Unsolved](Unsolved) folder to another location on your computers &mdash; wherever you would like your local copy of the group project to be.

* Rename the copied "Unsolved" folder to the name of your project.

* Open the copied project folder's `package.json` file and change its `name` property to the name of your project.

* CD to the root of the copied project folder with your terminal and run the following commands:

  ```
  git init
  git add .
  git commit -m "Initial commit"
  ```

* Then copy the GitHub repo's remote SSH URL (the same URL you'd use to clone the repo).

* Run the following commands in your terminal, replacing <remote-url> with your GitHub repo's remote SSH URL.

  ```
  git remote add origin <remote-url>
  git push origin master
  ```

* If completed successfully you should see all of the files uploaded to GitHub.

* All other group members should now clone the repo.

* Discuss as a group:

  * How would you now add changes to this project?

~~~API-notes~~~

The Basic Request
The Climate Data API uses REST-based requests, in which the general form looks like this:

http://climatedataapi.worldbank.org/climateweb/rest/v1/country/type/var/start/end/ISO3[.ext]

All boldface variables except for ext in this instance are required. Note that all climate data API requests begin with http://climatedataapi.worldbank.org/climateweb/rest/, so for the sake of legibility, this portion of the URL will be assumed and omitted in the remaining code samples in this documentation.

   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">
        $("#find-media").on("click", function (event) {
            event.preventDefault();
            var media = $("#media-input").val();
            var queryURL = "https://tools.cdc.gov/api/v2/resources/media?q=" + media;
            $.ajax({
                url: queryURL,
                method: "GET",
            }).then(function (response) {
                $("#search-list").empty();
                console.log(response);
...
     </script>