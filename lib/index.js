'use strict';

const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const { removeUndefined } = require('strapi-utils');

module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    const mg = mailgun.client({
      username: 'api',
      ...providerOptions
    });

    return {
      send: options => {
        return new Promise((resolve, reject) => {
          const { from, to, cc, bcc, replyTo, subject, text, html, ...rest } = options;

          let msg = {
            from: from || settings.defaultFrom,
            to,
            cc,
            bcc,
            'h:Reply-To': replyTo || settings.defaultReplyTo,
            subject,
            text,
            html,
            ...rest,
          };

          return mg.messages.create(settings.domain, removeUndefined(msg))
            .then(result => resolve())
            .catch(err => reject(err));
        });
      },
    };
  },
};
