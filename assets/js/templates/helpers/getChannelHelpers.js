define([
  'handlebars'
], function(Handlebars){
  'use strict';

  var getChannelHelpers = function(channels, opts){
    var active  = _.findWhere(channels, { active : true });
    var ret     = '';

    if(active && active['template-helpers']){
      for(var i=0; i<active['template-helpers'].length; i++) {
        ret = ret + opts.fn(active['template-helpers'][i]);
      }
    }

    return ret
  }

  Handlebars.registerHelper('getChannelHelpers', getChannelHelpers);
  return new Handlebars.SafeString(getChannelHelpers);
});