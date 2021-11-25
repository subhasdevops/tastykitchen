In this project i build a **currency converter App** by applying the concepts i have learned till now. This project allows to convert foreign source and target country currencies

This app will demonstrate my skills by creating an currency converter app that will fetch data from an Local Storage for Login, Sign Up and forget password pages and for home page it contains the currency converter that will contain source and target currencies that source and target currencies have multiple currency values that can be changed to get latest currency exchange values by using an open api i got from https://www.exchangerate-api.com and internal server using a class component, displaying that data, using **component lifecycle** methods, **routing** concepts, **authentication**, and **authorization**, and adding responsiveness to the website.

<summary>Click to view the Set Up Instructions</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

<details>
<summary>Click to view the Functionality i added</summary>

#### Functionality

This app has the following functionalities

- Login Route
  - Users can be able to login to their account by entering a valid username and password.
- Users should be able to navigate to Home.

- Users can be able to view the website responsively in mobile view, tablet view as well
- Home Route

  - Navbar contains Logout button

  - Login Users can be able to see the various currency select options on home page.
  - Login Users can be able to select the source and target currency values and able to see the exchange rate.
  - Users can be able to logout from accounts page.
  - Users can be able to view the website responsively in mobile view, tablet view as well.

- When the users enter invalid route in the URL then the Page not found Route will be displayed.

</details>

### Data Fetch URLs

<details>
<summary>Data fetch URLs</summary>

- GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD

response:

{ "result": "success", "documentation": "https://www.exchangerate-api.com/docs", "terms_of_use": "https://www.exchangerate-api.com/terms", "time_last_update_unix": 1585267200, "time_last_update_utc": "Fri, 27 Mar 2020 00:00:00 +0000", "time_next_update_unix": 1585353700, "time_next_update_utc": "Sat, 28 Mar 2020 00:00:00 +0000", "base_code": "USD", "conversion_rates": { "USD": 1, "AUD": 1.4817, "BGN": 1.7741, "CAD": 1.3168, "CHF": 0.9774, "CNY": 6.9454, "EGP": 15.7361, "EUR": 0.9013, "GBP": 0.7679, "...": 7.8536, "...": 1.3127, "...": 7.4722, etc. etc. } }
