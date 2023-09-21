(function () {
  "use strict";

  function MakeMultiFilter(originalArray) {
    var currentArray = originalArray.slice();
    var callbacks = [];

    function arrayFilterer(filterCriteria, callback) {
      if (typeof filterCriteria === "function") {
        currentArray = currentArray.filter(filterCriteria);
        if (typeof callback === "function") {
          callbacks.push(callback);
        }
        return arrayFilterer;
      } else if (!filterCriteria && !callback) {
        return currentArray;
      } else {
        return arrayFilterer;
      }
    }

    arrayFilterer.applyCallbacks = function () {
      callbacks.forEach(function (callback) {
        callback.call(originalArray, currentArray);
      });
    };

    return arrayFilterer;
  }

  if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = MakeMultiFilter;
  } else if (typeof window !== "undefined") {
    window.MakeMultiFilter = MakeMultiFilter;
  }
})();
