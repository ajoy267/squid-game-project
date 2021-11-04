# Alchemy Squid Games 
* Andrew Joy, Indy Holdsworth, Phoenix Nicholson, Kevin Do
* Description: You are in debt because of your tuition to Alchemy Code Lab. You're desperate to pay it off so you sign up.. for the squid game.. 
* Problem Domain: This project will serve as an immersion for the user to feel like they are in the squid games (without the dying part)
* We will be using HTML, CSS, and JavaScript for this project
* Miro Board: https://miro.com/app/board/o9J_lm95oS4=/
* Conflicts and Communications Plan: 
    ## Conflict Plan
    * What will your group do when it encounters conflict?
        * Group discussion, hear out both sides of conflict. You are not your code, don’t take things personally. Group decides on best approach.

    * How will you raise concerns to members who are not adequately contributing?
        * A group discussion. Noticed a lack of work. Ask them why, if they need help, if they’re struggling with something. 

    * What is your process to resolve conflicts?
	    * Group discussion.

    * How and when will you escalate the conflict if your attempts are unsuccessful?
        * Third time bringing up the same issue, call in JULIE.

    ## Communication Plan
    * How will you communicate after hours and on the weekend?
        * Use our slack group chat. Answer slack until 10:00pm.
    * What is your strategy for ensuring everyone's voices are heard?
        * Include people in the conversation, bring them in if silent or ask why. Don’t take offense if you quiet
    * How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?
        * Be inclusive and friendly, accept other people’s ideas

    ## Project Scope (MVP)
    * Home page, map page, 3 game pages, end page, debt counter, amount of tries per game

## Welcome Page
### HTML
* Header, Squid Games logo shapes and alchemy logo
* Input Name (input-name), Submit Button (submit-button), About Us (about-us)
### JS
* Form submit
    * Save user data to localStorage
    * Make a userObject (with amount of money -$24,000) with generateUser function
    * generate random number for player identification
    * redirect to black page
* About Us
    * Redirects to About Us Page
- [ ] DOM inputName, submitButton, and aboutUS
- [ ] Add event listener for when form is submitted

## About Us
### HTML 
* H1 header - About Us
* Main section which contains H3 with our name, image, and small biography
* Footer that has an a href back to the main page 
* STRETCH GOAL - Add epic transition to images
* STRETCH GOAL - Add lessgo game master image

## Opener
### HTML
* Squid Games logo shapes 
* Paragraph with span (number-span) that tells the player they are now known as the number generated from generateUser
* Paragraph with good luck paying 
# JS
* Interval timer that will redirect to the map page after a few seconds

## Map
### HTML
* User state that displays player number, stats of how many games you've survived, and your total debt
* Start button (start-button)
### JS
* Upon page load, update our state with results from each game
-Button click
* If button clicked 'x' amount of times, redirects to corresponding link
    * If that's too hard, hide previous link and display next one on click
- [ ] DOM startButton 
- [ ] Display getUser

## Game-1
### HTML
* Header, image of user position, go button (go-button)
### JS
* Event listener of click moves the player position across the screen
* intervalTimer to change the light from red to green and vice versa

## Game-2
### HTML
* Header, drop down menu (odd or even), guess button (guess-button), tries remaining span (tries-left)
### JS
* Event listener that will display the span 1) if you are correct or incorrect and 2) reduce the amount of tries left if incorrect

## Game-3
### HTML
* Image of character on one side of the website 
* Div columns of radio buttons 
### JS
* Radio inputs check if the glass is real or fake
* If it is fake, displays broken glass image if it matches the ID
* Makes next two radio buttons available to select

## Game Over
### HTML
* Header saying current balance is x
* "Add money to resolve balance" if it is negative
* Span that displays sorry (lose-span) or congratulations (win-span)
* Two buttons to replay: Sign another ISA (isa-button) will send you back to the map and subtract $24,000. Start over (reset-button) sends resets the game and player starts over at the first page
* Stats span that tells you how many times you've 1) won, 2) lost, 3) times won game 1: x, game 2: x, game 3: x and 4) times failed game 1: x, game 2: x, game 3: x
### JS
* Money balance will be determined from getUser
* Span will display lose or win message
* Money pig background will be displayed if you won
- [ ] Sign another ISA (isaButton) event listener 
- [ ] Start over (resetButton) event listener

## Utils
* TDD all tests
* setUser, userProfile, getUser, generateUser, randomNumber, isEven, gameScore, toUSD