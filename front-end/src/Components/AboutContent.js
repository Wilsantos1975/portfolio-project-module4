import React from 'react'

function AboutContent() {
  return (
    <div>
        <div>
      <h1>Marketplace for Vinyl</h1>
      <p>Welcome to our marketplace for vinyl! This app provides a platform for vinyl enthusiasts to buy and sell their favorite records. Whether you're a collector searching for rare finds or a seller looking to connect with vinyl lovers, our marketplace has you covered.</p>

      <h2>About the Developer</h2>
      <p>I am a fellow software developer from a program called Pursuit, based in New York City. Pursuit is a rigorous software engineering program that trains individuals from diverse backgrounds to become skilled software developers. I've leveraged my skills and knowledge gained through Pursuit to build this app.</p>

      <h2>Technologies Used</h2>
      <ul>
        <li>React.js: A popular JavaScript library for building user interfaces.</li>
        <li>Express.js: A web application framework for Node.js that simplifies the process of building APIs.</li>
        <li>Bulma.io: A lightweight CSS framework that provides responsive and customizable styling.</li>
        <li>React-Bootstrap: A set of UI components for React that are built on top of Bootstrap, making it easier to design responsive web pages.</li>
        <li>Node.js: A JavaScript runtime environment that allows for server-side scripting and backend development.</li>
      </ul>

      <h2>Running the App</h2>
      <ol>
        <li>Make sure you have Node.js installed on your machine.</li>
        <li>Clone the repository from [repository URL].</li>
        <li>Open a terminal and navigate to the project directory.</li>
        <li>Run <code>npm install</code> to install the necessary dependencies.</li>
        <li>Run <code>npm start</code> to start the development server.</li>
        <li>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a> to view the app.</li>
      </ol>

      <h2>App Functionality</h2>
      <ol>
        <li>Users can sign up or log in to access the marketplace.</li>
        <li>Sellers can create listings for vinyl records they want to sell. They provide details such as the title, artist, condition, and price.</li>
        <li>Buyers can browse through the listings and search for specific records using filters or keywords.</li>
        <li>Buyers can view the details of a listing and contact the seller if interested.</li>
        <li>Sellers can manage their listings, mark items as sold, and communicate with potential buyers.</li>
        <li>The app provides a secure payment system for buyers to complete transactions with sellers.</li>
      </ol>
    </div>
      
    </div>
  )
}



export default AboutContent
