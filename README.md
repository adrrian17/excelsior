# Excelsior
This is a test using [React] and the [Marvel's API].

## Getting started
First, you have to create a developer account in [developer.marvel.com]

Once you have your **Public Key**, create a ```api-key.js``` file in ```js```
dir and add a line like this:

```js
window.key = 'apikey=<your-public-key>';
```

## Running the app
To start the app use the following commands:

```bash
$ npm install
$ npm run watch
```

And finally open the ```index.html``` file in your browser. Have fun :ghost:

## TODO
- [X] Add pagination
- [ ] Fix the mobile layout
- [ ] Implement the order endpoints of the API
- [X] Add server side rendering
- [ ] Upload the app to Heroku
- [ ] Add colors and a better design
- [ ] Implement ```gulp``` tasks
- [ ] Add loading animations

## License

MIT © [Adrian Ayala]

[React]: http://facebook.github.io/react/
[Marvel's API]: http://developer.marvel.com
[developer.marvel.com]: http://developer.marvel.com
[Adrian Ayala]: http://adrianayala.mx
