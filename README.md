<h1>Summer Memories</h1>

[The live project can be viewed here.](https://chardma3.github.io/SummerMemories/)

Summer Memories is a summer themed memory card game with a timer and a flips monitoring function to count how many flips were used.
The website is responsive and available on desktop, laptops, tablets and mobile devices.

<h2 align="center"><img src="https://github.com/chardma3/SummerMemories/blob/master/assets/images/Mockup.jpg"></h2>


## User Experience (UX)
The game is for those who wish to relax, enjoy themselves and test their memory. The game has functional buttons at the top to explain how the game is played and to restart the game.

-   ### User stories
1. As a user I want the ability to understand how to play the game.
2. As a user I want audio and visual feedback. As well as positive feedback when I have succeeded.
3. As a user I want a unique, enjoyable and challenging experience.

      
-   ### Design
    -   #### Colour Scheme
        -   The main colors are blue and white which is typically associated with boating and the changing colours in the background are to mimic the the sunset and color of the ocean.
    -   #### Typography
        -   The font I used for the header is Pacifico Cursive from Google Fonts as I felt it fit in with the free and easy beach feeling associated with summer. For the other text I used Trebuchet with a back up of Helvetica.
    -   #### Imagery
        -   The images are elegant yet simple illustrations of things usually associated with summer and specifically beach life.
        
*   ### Wireframe
    -Wireframes were done in photoshop. The size of the cards aren't exactly the same showing that it wasn't a screenshot. I got the idea of doing wireframes in photoshop from the the example project for Milestone 1 
    which my mentor showed me. The link to which is here [View](https://github.com/D1ang/EL1TE)  
    The link to the pdf file with wireframes for desktop, tablet and mobile devices can be viewed here - [View](https://github.com/chardma3/SummerMemories/tree/master/assets/wireframes)

## Features

-   Responsive on different device sizes
-   Interactive buttons
-   Game info section
-   Audio and visual feedback

**Buttons**  
*The buttons allow the user to learn how to play the game, restart the game and toggle the sound on and off.

**Game Info**  
*The game info section shows the user information reagrding the game. I.e. how many seconds thay have left and how many times they have flipped a card.

**Features Left to Implement**  
*In the future I would like to implement a sound button so that the user can toggle the sound on and off. I would also like to implement a high score tally so that the user can attempt to better their score which would make the user more likely to return to the game.
*I have decided not to implement an introduction before the game commences as there is an instructions button as well as a restart button so that if the user wishes to see the instructions they can and then restart the game. I felt it would be redundant and a bad user experience.

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.5:](https://getbootstrap.com/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the heading font of Pacifico cursive and Trebuchet.
1. [jQuery:](https://jquery.com/)
    - To make Bootstrap work and to write Javascript more quickly.
1. [Git](https://git-scm.com/)
    - Git was used for version control by using the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used for manipulating images, creating favicon and creating the wireframes during the design process.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://validator.w3.org/) - To test for errors in html
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - To test for errors in css
-   [GTmetrix](https://gtmetrix.com/) - To test website loading times
-   [JSHint](https://jshint.com/) - To test website for JS errors

### Bugs Found
-   The alt tags were not filled in. I ran the validator and then forgot to do it. Alt tags for screen readers are now available.
-   Hyphens in HTML comments have been fixed. My mentor said that I should extend the size of my comments to make them easier to read. However this was wrong. This has been rectified.
-   JS scripts were loaded outside the head and body - they were just before the closing 'html' tag; they should have been just before the closing 'body' tag. Initially the JS script was in the header tag but my mentor said that they should be after the closing body tag. This has been rectified and are now in the header tag.
    
### Automated testing
-   Automated testing has been done and it conforms to screen readers and is error free

### Testing User Stories from User Experience (UX) Section

The site was tested manually and fulfills its goals by providing an easy and straightforward way for users to achieve their goals.

1 Buttons 
-  The buttons provided allow the user to tailor the game to suit their needs. These are: a sound button to toggle the sound on and off, an instructions button which acts as an accordian and shows the instructions for the game, and a restart button so that the user can retsart if they got off to a bad start and would like to start again rather than waiting for the timer to run out.

2 Game Info Section 
-  The game info section provides the time ticking down from 80 seconds and a flips tally which shows how many times you have flipped a card.

The website is responsive and diplays the four by four grid on desktop screen and tablet sized devices and displays two cards wide in mobile view.

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX via Google Chrome developer Tools.
-   All buttons, cards and other functions were tested to ensure they work.
-   Friends and family were asked to look at the site and give feedback on their user experience with the site in regard to color, sizes, and font styles.

## Deployment

### GitHub Pages

The site is hosted on Github pages.

This project has been deployed to Github by doing the following:
1. Login to GitHub and locate the required [GitHub Repository](https://github.com/chardma3/SummerMemories)
2. At the top of the Repository locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://chardma3.github.io/SummerMemories/) in the "GitHub Pages" section.

There are no differences between the deployed version and the developement version.

In order to run the code for the project locally use the link provided to navigate to the project repository and the clone the project. 


## Credits

### Media

Images used in the game have been sourced from Freepik which are available for personal use.

### Content

-   Concept, design and coding has been created by myself

### Acknowledgements

- I received found inspiration and coding ideas from a number of youtube tutorials. And built this (mostly) in pure javascript without the use of a library. These were: JavaScript Snake Game Tutorial Using Functional Programming found at https://www.youtube.com/watch?v=bRlvGoWz6Ig&t=3141s, Memory Game in JavaScript found at https://www.youtube.com/watch?v=tjyDOHzKN0w and Memory Card Game found at https://www.youtube.com/watch?v=ZniVgo8U7ek. I also used the Fisher Yates  shuffle code snippet found on Wikipedia. Address:https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

-  Thanks to my mentor for advising me and helping me make the project better
