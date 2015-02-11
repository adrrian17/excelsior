# Excelsior
This is a test using [React] and the [Marvel's API].

## Getting started
First, you have to create a developer account in [developer.marvel.com]

Once you have your **Public Key**, set a enviroment variable named ```API_KEY```

```bash
$ export API_KEY='your-public-key'
```

## Running the app
To start the app use the following commands:

```bash
# Install the dependencies
$ npm install

# Create the bundle.js file 
$ npm run build

# Start the server
$ npm start
```

And finally go to [localhost:3000] in your browser. Have fun :ghost:

## TODO
- [X] Add pagination
- [X] Add server side rendering
- [X] Upload the app to Heroku
- [ ] Fix the mobile layout
- [ ] Implement the order endpoints of the API
- [ ] Add colors and a better design
- [ ] Implement ```gulp``` tasks
- [ ] Add loading animations
- [ ] Add routes for the pages
- [ ] Implement search form

## License

MIT © [Adrian Ayala]

[React]: http://facebook.github.io/react/
[Marvel's API]: http://developer.marvel.com
[developer.marvel.com]: http://developer.marvel.com
[Adrian Ayala]: http://adrianayala.mx
[localhost:3000]: http://localhost:3000
