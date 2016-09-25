# Postlog
A library for sending console logs over XHR for server-side processing.

Postlog sends all your browsers logging activities to your server side for storage and analytics.

## Install
```
npm install postlog
```

## Usage

### Basic

```
var post = new Postlog('http://example.com/endpoint');

post.log('message to be logged to the console and server!');
```

The data is posted with a JSON body containing your logged data.

### Logging objects

The following example would post the JSON encoded the entire object and send it as the body. This can be very useful when needing to identify a user or verifying the request with a token. 

```
var post = new Postlog('http://example.com/endpoint');

var object = {
  message: 'message',
  tag: 'errors',
  timestamp: Math.floor(Date.now() / 1000)
}

post.log(object);
```

**NOTE:** `send()` will not log anything to the clients consoles.

### Callbacks

Both `log()` and `send` supports optional callback arguments:

```
var post = new Postlog('http://example.com/endpoint');

post.log('message', function() {
  // whatever you feel like doing
});
```
