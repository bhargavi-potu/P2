"use strict";

function TemplateProcessor(template) {
  this.template = template;

  this.fillIn = function (dictionary) {
    return this.template.replace(/{{(.*?)}}/g, function (match, prop) {
      return dictionary[prop] || "";
    });
  };
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = TemplateProcessor;
}
