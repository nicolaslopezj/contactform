Package.describe({
  name: 'nicolaslopezj:contactform',
  summary: 'Simple drop-in contact form with validation',
  version: '1.0.1',
  git: 'https://github.com/nicolaslopezj/contactform'
});

Package.onUse(function(api) {
    api.versionsFrom("METEOR@0.9.0");

    api.use([
      'templating',
      'jquery',
      'coffeescript',
      'underscore',
      'less',
      'session',
      'rgoomar:bootstrap-validator@0.5.2'
    ], 'client');

    api.use(['email'], 'server');

    api.addFiles([
      'server/contactConfig.js',
      'server/contactForm.js'
    ], 'server');

    api.addFiles([
      'client/contact.less',
      'client/contact.html',
      'client/contact.coffee'
    ], 'client');

    api.export([
      'contactFormConfig'
    ], 'server');

});
