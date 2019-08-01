---
title: Architecure
root: '/docs'
parents: ['Get Started']
---

# Java Spring Boot API with a React Front End

Why would we pick these tools to build a web application you might ask yourself? What makes these technologies so special that I would spend the time to make this set up guide for them? Those questions will be answered in this guide but first we are going to talk about the difference between what Cheese MVC is and what you are going to be building is.

## Refresher on MVC

Model View Controller (MVC) divides an application into the three parts, Model, View and Controller.

Model - objects used to interact with the database

View - the pieces that make up the UI

Controllers - manages the flow of data and business logic

First and foremost this is a newer way and frankly better way to build applications than MVC, the way I am talking about is a REST API communicating and taking request from a Single Page Application.

## Brief Overview of REST

Now you might ask yourself what is an API and what is REST? I am not going to go into much detail about them because other people have spent the time to make articles that explain these concepts.

https://www.codecademy.com/articles/what-is-rest

https://www.youtube.com/watch?v=s7wmiS2mSXY

What I will tell you is a REST API is a `service/app/backend/whateverYouWantToCallIt` that exposes endpoints (urls) that you can call or hit. These will either return some kind of data or perform an operation. Usually these endpoints will take/give data in the format of JSON `Javascript Object Notation` (not always XML still does get deployed to PROD some places).

## Single Page Applications && Javascript Frameworks

A single page application is an application that gets loaded on the client side. It is dynamic meaning it can hold state or logic to know what is being interacted with on the DOM by using a virtual dom. The easiest way to make a SPA is to use a Javascript framework. Angular was the first one of these to come into the scene. Followed by React and then Vue. There are others but these are by far the most popular.

Here is an article on how they work

https://blog.pshrmn.com/how-single-page-applications-work/

Here is an article on what a JS framework is

https://skillcrush.com/2018/07/23/what-is-a-javascript-framework/

# What we are building

We are going to be building an api that we are going to set up using Java Spring Boot (which you all are familiar with to some degree) in the chance you were snoozing in LC101 lets go over it again real quick.

Spring is a framework that makes writing Java applications easier and more maintainable. Spring has many packages that can be used to develop applications. The main one we are going to talk about at this moment is Spring Boot. Spring Boot is what makes this code right here get instantiated first and foremost at compile/ runtime. This code is both making a new class which we will need right away at runtime. There is a big difference between the two because it both cases I want this to be the first thing I call.

A

```
@Service
public class LabradoodleService {
  private LabradoodleRepository labradoodleRepository;

  public LabraoodleService(LabradoodleRepository labradoodleRepository) {
    this.labradoodleRepository = labradoodleRepository;
  }

  public Labradoodle getGavinsDog() {
    return labradoodleRepository.findByOwnersName("Gavin");
  }
}
```

B

```
public class LabradoodleService {
  private LabradoodleRepository labradoodleRepository;

  public LabraoodleService(LabradoodleRepository labradoodleRepository) {
    this.labradoodleRepository = labradoodleRepository;
  }

  public Labradoodle getGavinsDog() {
    return labradoodleRepository.findByOwnersName("Gavin");
  }
}
```

What is the difference between these two, well in figure B I would get an exception because no one has newed up an instance of LabradoodleRepository to call. In figure A we have though so that would be successful if that was the first thing we called. There is more to it than this but the main concept is that `@Service` which tells Spring Boot to auto wire the constructor of that class and it will new up the objects for us so they are available right away.

We are going to use that same annoation to set up `@RestController` that will work to expose some urls for us to hit. Its going to be fun.

Next I will talk about React.

## Why React is the best

I love React its super fun and there is a ton of people in the open source community working on super neat things with React. I am not going to go into much detail about React because there is SOOOO much stuff that it would take you forever to watch all the videos.

What I will say is I love REACT. Its so neat and fun to build UIs in. The main point of my piece on this is if Spring Boot is going to manage our data and have controllers, React is going to be the V in MVC. Its going to be the view and its going to be nice so lets get started.

Resources for React Learning

https://www.udemy.com/react-redux/

https://www.youtube.com/user/99baddawg/videos

https://www.youtube.com/user/TechGuyWeb/videos

https://www.youtube.com/user/wesbos

https://www.youtube.com/user/LevelUpTuts

# CHECK OUT THIS SWEET PODCAST

https://syntax.fm/
