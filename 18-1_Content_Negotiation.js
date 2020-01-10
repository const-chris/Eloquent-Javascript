const mediaTypes = ["text/plain",
                    "text/html",
                    "application/json",
                    "application/rainbows+unicorns"];

for (let mediaType of mediaTypes) {
  fetch("https://eloquentjavascript.net/author", {headers: {accept: mediaType}})
    .then(response => {
      console.log(response.status)
    });
}
