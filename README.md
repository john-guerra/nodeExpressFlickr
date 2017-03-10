# Exam 1 - WebDev Class @ Uniandes

This is my exam 1 for the webdev class. It consists of a search engine that display
flickr images from a query but divides them into the 7 colors of the rainbow by columns.

The creative addition is that the order of the colors is random and the website
background color changes as the images appear by column. You can also click on each image
and it will take you to a larger size of it.

The technologies used are: node + express + react.

To use this:

```
git clone https://github.com/mariacamilaremolinagutierrez/nodeExpressFlickr.git flickr_rainbow
cd flickr_rainbow
echo "my_flickr_api_key" > server/api_key.txt
echo "my_flickr_api_secret" > server/api_secret.txt
npm install
```
You can [get your Flickr api key and secrets here](https://www.flickr.com/services/apps/create/)

Then compile the front-end into the build folder using

```
npm run build
```

And finally run the server

```
node server
```
And open [http://localhost:9000](http://localhost:9000)

[http://localhost:9000/flickr/query](http://localhost:9000/flickr/query) points to an endpoint that will return a JSON object with the Flickr results. For more information on the Flickr API check:
* The [Flickr API documentation](https://www.flickr.com/services/api/)
* The [flickrapi node module documentation](https://www.npmjs.com/package/flickrapi)
* And this [page that explains how to build the urls for the images](https://www.flickr.com/services/api/misc.urls.html)
