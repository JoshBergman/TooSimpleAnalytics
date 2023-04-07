# TooSimpleAnalytics

#### By: Joshua Bergman

_Quickly check your new views and total views with TooSimpleAnalytics Checker_

> [Checker Repo](https://github.com/JoshBergman/TooSimpleAnalyticsCheck)

## What is it?

TooSimpleAnalytics is meant to be paired to a mongoDB database. The function of this application is to keep a simple counter or any basic analytics for your websites.

## Use:

Feel free to use. Do not claim my work as your own. To get working, simply create src/Controllers/MONGO_URI.js and initialize an exported variable as such:

> module.exports = uri = "your database connection link";

1. Register each site you wish to track with a POST request to X/std/new/site/{site collection label}
2. Add an API call for each new visitor on your site as a GET request to X/std/view/{site collection label} (Your site collection label must already exist)
