"use strict";

var obj = {
  'name': 'Don inn',
  'activity': 'Party dude',

  getActivity: function() {
    return this.name + ' is a ' + this.activity;
  }
} // lint error

console.log(obj.getActivity());
