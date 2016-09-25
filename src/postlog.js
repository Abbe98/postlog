;(function(window) {
  'use strict';

  /**
   * @constructor
   *
   * @param {string} url
  */
  function Postlog(url) {

    if (typeof url !== 'string') {
      throw new Error('An URL is required.');
    }

    this.url = url;
  }

  Postlog.prototype = {
    /**
     * Public Method
     *
     * @param {object} log
     * @param {function} callback
    */
    send: function(log, callback) {
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          typeof callback === 'function' && callback();
        }
      };
      console.log(this)
      xhr.open('POST', this.url, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xhr.send(JSON.stringify(log));
    },

    /**
     * Public Method
     *
     * @param {string} message
     * @param {function} callback
    */
    log: function(message, callback) {
      console.log(message);

      var logData = {
        message: message
      };

      this.send(logData, callback);
    }
  }

  // export
  window.Postlog = Postlog;

})(window);