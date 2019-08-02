---
title: Architecure
root: '/docs'
parents: ['Get Started']
---

# Java Spring Boot API with a React Front End 🚀

Why would we pick these tools to build a web application you might ask yourself? What makes these technologies so special that I would spend the time to make this set up guide for them? Those questions will be answered in this guide but first we are going to talk about the difference between what Cheese MVC is and what you are going to be building is.

## Refresher on MVC 🤮

Model View Controller (MVC) divides an application into the three parts, Model, View and Controller.

Model - objects used to interact with the database

View - the pieces that make up the UI

Controllers - manages the flow of data and business logic

The 3 pieces usually kept in the same project create a triangle flow of data. This is not a bad way to write an application it is just a little bit more challenging to scale applications like this.

This is a newer way and frankly `better/cleaner/crispier` way to build applications than MVC, the way I am talking about is by building a REST API that communicates with and takes requests from a Single Page Application.

## Brief Overview of REST 🤗

Now you might ask yourself what is an API and what is REST? I am not going to go into much detail in this guide about them because other people have spent the time to make articles already that explain these concepts.

https://www.codecademy.com/articles/what-is-rest

https://www.youtube.com/watch?v=s7wmiS2mSXY

What I will tell you is a REST API is a `service/app/backend/whateverYouWantToCallIt` that exposes endpoints (urls) that you can call/hit. These will either return some kind of data or perform an operation. Usually these endpoints will take/give data in the format of JSON `Javascript Object Notation`.

## Single Page Applications && Javascript Frameworks 👽

A single page application is an application that gets loaded on the client side (your computer or phone). It is dynamic meaning it can hold state or logic to know what is being interacted with on the DOM by using a virtual dom. The easiest way to make a SPA is to use a Javascript framework. Angular was the first one of these to come into the scene. Followed by React and then Vue. There are others but these are by far the most popular.

Here is an article on how they work

https://blog.pshrmn.com/how-single-page-applications-work/

Here is an article on what a JS framework is

https://skillcrush.com/2018/07/23/what-is-a-javascript-framework/
