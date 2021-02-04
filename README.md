# strapi-provider-email-mailgunjs

## Resources

- [License](LICENSE)

## Links

- [Strapi website](http://strapi.io/)
- [Strapi community on Slack](http://slack.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)

## Prerequisites

You need to have the plugin `strapi-plugin-email` installed in you Strapi project.

## Installation

```bash
# using yarn
yarn add strapi-provider-email-mailgunjs@npm:@sancsoft/strapi-provider-email-mailgunjs

# using npm
npm install strapi-provider-email-mailgunjs@npm:@sancsoft/strapi-provider-email-mailgunjs --save
```

## Configuration

| Variable                | Type                    | Description                                                                                                                        | Required | Default   |
| ----------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| provider                | string                  | The name of the provider you use                                                                                                   | yes      |           |
| providerOptions         | object                  | Will be directly given to the `require('mailgun.js')`. Please refer to [mailgun.js](https://github.com/mailgun/mailgun-js) doc.    | yes      |           |
| settings                | object                  | Settings                                                                                                                           | yes      | {}        |
| settings.domain         | string                  | Mailgin sending      domain                                                                                                        | yes      |           |
| settings.defaultFrom    | string                  | Default sender mail address                                                                                                        | no       | undefined |
| settings.defaultReplyTo | string \| array<string> | Default address or addresses the receiver is asked to reply to                                                                     | no       | undefined |

### Example

**Path -** `config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'mailgunjs',
    providerOptions: {
      key: env('MAILGUN_API_KEY')
    },
    settings: {
      domain: env('MAILGUN_DOMAIN'), // Required
      defaultFrom: 'myemail@protonmail.com',
      defaultReplyTo: 'myemail@protonmail.com',
    },
  },
  // ...
});
```
