---
id: 16
uuid: '9503288c-db1b-43fd-a7cb-8e59d0b65ffe'
title: 'Cordova File Plugin Examples'
slug: 'cordova-file-plugin-examples'
image: null
featured: 0
page: 0
status: 'published'
language: 'en_US'
meta_title: null
meta_description: null
author_id: 4
created_at: '2015-08-10 14:37:44'
created_by: 4
updated_at: '2016-01-20 09:42:39'
updated_by: 1
published_at: '2015-08-11 10:37:40'
published_by: 4
visibility: 'public'
mobiledoc: null
amp: null
---

I found myself in need of writing potentially large amounts of data to the file system in a Cordova app I'm working on. Naturally, I reached for the [Cordova File Plugin](https://github.com/apache/cordova-plugin-file), as a handful of cursory Google searches revealed it to be the _de facto_ plugin for this task. However: its documentation, while talking about the plugin's quirks, is lacking in examples, the main [blog post it points to for usage](http://www.html5rocks.com/en/tutorials/file/filesystem/) is old, and not all of it is relevant to the plugin. In this post, I aim to detail what I have learned, to make it easier for other people to get started with this useful plugin.

## The API Has It

A great API is simple, and a joy to work with. Here is an example:

```javascript
localStorage.setItem('myKey', JSON.stringify({ my: 'data' }, null, '\t'))

var data = localStorage.getItem('myKey')
if (data) {
  data = JSON.parse(data)
}
```

Now, admittedly, it's a bit of a shame that the object to JSON conversion isn't done automatically, but all in all, the localStorage API is succint and developer friendly. With the Cordova File Plugin, things get more complicated.

## HTML5 File API Et Al

The File Plugin implements the [HTML5 File API](http://www.w3.org/TR/FileAPI/), plus several others, many of which are since defunct. The result is a very versatile plugin, with low-level access to much functionality. The flip-side is that basic read/write operations (arguably the lion's share of all use cases), are not obvious, nor their usage consistent.

As I mentioned above, the [HTML5 Rocks FileSystem](http://www.html5rocks.com/en/tutorials/file/filesystem/) article is linked to for usage examples. That article concerns itself with how one would use the API in a browser. What it doesn't say in that article, or in the plugin documentation, is that the plugin takes care of some of the boilerplate you have to contend with when trying to use the File API in a browser.

## Case In Point

In a browser, the File API requires you to:

1. request a filesystem,
2. specify whether it is to be temporary, or persistent,
3. specify its size,
4. specify success and error handlers for this request.

```javascript
function onInitFs(fs) {
  console.log('Opened file system: ' + fs.name)
}

window.requestFileSystem =
  window.requestFileSystem || window.webkitRequestFileSystem
window.requestFileSystem(
  window.PERSISTENT,
  50 * 1024 * 1024 /*50MB*/,
  onInitFs,
  errorHandler
)
```

Furthermore, if you requested a persistent filesystem, you also need to request storage quota from the user:

```javascript
window.webkitStorageInfo.requestQuota(
  PERSISTENT,
  1024 * 1024,
  function(grantedBytes) {
    window.requestFileSystem(
      window.PERSISTENT,
      grantedBytes,
      onInitFs,
      errorHandler
    )
  },
  function(e) {
    console.log('Error', e)
  }
)
```

## The Important Part

Here is what neither the HTML5 Rocks article (sensibly, since its concern is the browser API), nor the [plugin documentation](https://github.com/apache/cordova-plugin-file#cordova-plugin-file), nor some of the [very few example usage articles](http://stackoverflow.com/questions/22336352/how-do-you-store-a-file-locally-using-apache-cordova-3-4-0), say:

**You don't need either of those two steps when using the Cordova File Plugin.**

Only this [collection](http://www.raymondcamden.com/2014/07/15/Cordova-Sample-Reading-a-text-file) of [example use cases](http://www.raymondcamden.com/2014/11/05/Cordova-Example-Writing-to-a-file) hints at their superfluity.

With the Cordova File Plugin, there are two essential pieces of information to remember:

1. Like all Cordova plugins, you have to wait for the `deviceready` event before you try anything,
2. Then, `window.resolveLocalFileSystemURL(<path>, <successHandler>, <errorHandler>)` is your friend.

`window.resolveLocalFileSystemURL()` returns a `FileEntry` or `DirectoryEntry` instance (depending on whether you gave a file or a directory as path as its first parameter), which you can then work with.

## Reading the Contents of a File

This the first of the two main use cases, the other one being writing a file. For this example, we assume a plain text file with some JSON in it. It's pretty much the same for any other plain text file, whereas it gets a little more complicated should you wish to read binary data.

```javascript
document.addEventListener('deviceready', onDeviceReady, false)
function onDeviceReady() {
  function readFromFile(fileName, cb) {
    var pathToFile = cordova.file.dataDirectory + fileName
    window.resolveLocalFileSystemURL(
      pathToFile,
      function(fileEntry) {
        fileEntry.file(function(file) {
          var reader = new FileReader()

          reader.onloadend = function(e) {
            cb(JSON.parse(this.result))
          }

          reader.readAsText(file)
        }, errorHandler.bind(null, fileName))
      },
      errorHandler.bind(null, fileName)
    )
  }

  var fileData
  readFromFile('data.json', function(data) {
    fileData = data
  })
}
```

Let's have a look at a few of the things going on in this snippet.

Firstly, we wait for the `deviceready` event. In your app, you have likely done this already way before you start any reading or writing of files, but it's important to remember.

Secondly, we construct a path for `window.resolveLocalFileSystemURL()` with the magic `cordova.file.dataDirectory` value that the File Plugin exposes for us. This is one of several values for the various paths your app can access. They are [well documented](https://github.com/apache/cordova-plugin-file#where-to-store-files) on the Plugin page. In this case, it's a private data directory within your app's filesystem that won't sync with iCloud. (If you want this iOS only functionality, use `cordova.file.syncedDataDirectory`.)

Then come a bunch of complicated, confusingly labelled, functions, instances, and event handlers. Essentially though, we're calling `readAsText()` on our file pointer, after having set up an event handler for the `loadend` event, which will be triggered when `readAsText()` reaches the end of the file. Its parameter is the event object, and the `this` context contains our data in its `result` property. You can also find it at `e.target.result`.

Makes you a little jealous of localStorage's `getItem()` method, doesn't it? :)

### What's With That Error Handler?

You might have noticed that `errorHandler.bind(null, fileName)` parameter on two of the function calls. Here is the function, much the same as in the HTML5 Rocks article, with one improvement.

```javascript
var errorHandler = function(fileName, e) {
  var msg = ''

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'Storage quota exceeded'
      break
    case FileError.NOT_FOUND_ERR:
      msg = 'File not found'
      break
    case FileError.SECURITY_ERR:
      msg = 'Security error'
      break
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'Invalid modification'
      break
    case FileError.INVALID_STATE_ERR:
      msg = 'Invalid state'
      break
    default:
      msg = 'Unknown error'
      break
  }

  console.log('Error (' + fileName + '): ' + msg)
}
```

By itself, any error handler you specify is passed an error object as parameter, which holds little more than an error code. We're calling `.bind(null, fileName)` on the function when we specify it as the error handler, so that its first parameter becomes the filename instead. (The first argument to [`.bind`
](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) is used for the context, passing `null` means it will default to the last bound `this` keyword, in this case `window`.)

## Writing to a File

Here then is the other obvious use case: writing some data to a file. In this example, we'll write some JSON. Here is the code:

```javascript
document.addEventListener('deviceready', onDeviceReady, false)
function onDeviceReady() {
  function writeToFile(fileName, data) {
    data = JSON.stringify(data, null, '\t')
    window.resolveLocalFileSystemURL(
      cordova.file.dataDirectory,
      function(directoryEntry) {
        directoryEntry.getFile(
          fileName,
          { create: true },
          function(fileEntry) {
            fileEntry.createWriter(function(fileWriter) {
              fileWriter.onwriteend = function(e) {
                // for real-world usage, you might consider passing a success callback
                console.log('Write of file "' + fileName + '"" completed.')
              }

              fileWriter.onerror = function(e) {
                // you could hook this up with our global error handler, or pass in an error callback
                console.log('Write failed: ' + e.toString())
              }

              var blob = new Blob([data], { type: 'text/plain' })
              fileWriter.write(blob)
            }, errorHandler.bind(null, fileName))
          },
          errorHandler.bind(null, fileName)
        )
      },
      errorHandler.bind(null, fileName)
    )
  }

  writeToFile('example.json', { foo: 'bar' })
}
```

A lot going on there, let's break it down.

For convenience, we're defining `writeToFile()` as a re-usable function. We're opening a connection to the dataDirectory, which returns a `directoryEntry` instance, with - amongst others - a `getFile()` method. We're calling this method with a filename, and a configuration object that tells the method to create the file if it doesn't exist.

We then call the `createWriter()` method on the `fileEntry` instance, which in turn gives us a `fileWriter` instance (phew). For illustration, I've set up 2 listeners on this instance, but as you can see they're not actually needed in this instance. What we're required to do is to create a new blob and write that to the file.

The first parameter for the Blob constructor is an array with our data as its sole item. This may seem odd in our case, but it is correct. I'll be honest - I've not gone through enough of the Blob spec to figure out why that is. The second argument is a configuration object, with a format type. Here, we specify `text/plain` (not, say, `application/json`) because that's what our file will be. Yes, the content will be JSON, but JSON is just plain text, and we're not telling the filesystem to interpret it (like we would if we were to serve it to a browser).

And that's how you write your JSON to a file, and yes, it's rather different from reading a file.

## Wishful API

We have seen that the File plugin's API and usage is complex. It allows for maximum versatility, but it's also based on defunct specifications, which might have been streamlined had they been examined further. I don't have the know-how to implement this for all the currently supported platforms of this plugin, but here's my suggestion (or wish) for an API that could sit on top on the current one.

### Write or Append to a File

```javascript
cordova.file.write(
  fileName,
  data,
  { create: true },
  successHandler,
  errorHandler
)
cordova.file.append(fileName, data, {}, successHandler, errorHandler) // with { create: true }, it would behave as .write() if previously non-existent
```

### Read a File's Contents

```javascript
cordova.file.read(
  fileName,
  { type: 'text/plain' },
  successHandler,
  errorHandler
)
```

The fileName could either be an absolute path that the developer constructs using the various `cordova.file.*` locations that the plugin exposes, or, alternatively, be specified as part of the configuration object (the second parameter), e.g. `{ basePath: cordova.file.dataDirectory }`.

If one were to go down that route, I would additionally suggest being able to specify configuration options globally for an app:

```javascript
cordova.file.options({
  basePath: cordova.file.dataDirectory, // working directory
  create: true, // always create files
  type: 'text/plain', // read/write all files as plain text
})
```

## Conclusion

The code above is the result of several days' of reading documentation, trawling through blog posts, and experimentation. For all I know, I'm still doing some things wrong.

Development in the world of Javascript moves at a rapid pace, and documentation doesn't always keep up. Add to that the fact that many front-end developers are smart, good-looking, and smell nice, and are often deeply involved with the technologies they're using themselves, it can sometimes be hard to break into a particular technology when coming to it for the first time.

I remember a long time ago I was trying to write to a file in PHP. Sure enough, I had to open a pointer/handler to the file, seek around it, and then stream data to disk, before finally releasing the open handler again. Then, a while later, `file_put_contents()` and `file_get_contents()` came along and drastically simplified things for 99% of the use cases.

Sure it's nice to have all the power, but when designing APIs, ask yourselves what the main use cases are, and try and make those as easy and intuitive as possible. Then document them well.
