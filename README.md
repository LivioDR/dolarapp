# DolarApp

A Progressive Web App that displays the current exchange rate of all different US dollar types that can be found in Argentina.

## Motivation

This project was requested by a client who needed to have access to all different exchange rates of the US Dollar in Argentina on a regular basis.

During over a decade, different exchange rates have existed in Argentina depending on how do you get a foreign currency. More info about this topic can be found on this [not affiliated link](https://www.batimes.com.ar/news/economy/a-guide-to-argentinas-many-exchange-rates.phtml).

## The solution

A Progressive Web Application was developed in Next.js as a Single Page Application (SPA) that displays all the different FX quotes for USD, CAD and AUS to ARS conversion based on client requirements.
To cycle between the different available currencies you can tap on the header.
All data is retrieved from the [CriptoYa Dollar API](https://criptoya.com/) and refresehd periodically with the use of a setInterval that clears after unmounting the component.

## Deployment status

The app was deployed on Netlify with an automated CI/CD pipeline and can be found in [this site](https://dolarapp.netlify.app/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/a34b3f2d-ce83-4414-9cde-fdbedd3a6d68/deploy-status)](https://app.netlify.com/sites/dolarapp/deploys)
