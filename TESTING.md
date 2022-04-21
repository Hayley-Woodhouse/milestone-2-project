
# Testing 

# Contents

* [1 W3C Validation](#1-w3c-validation)
    * [1.1 index.html](#11-indexhtml)
     * [1.2 style.css](#12-stylecss)
     * [1.3 script.js](#14-scriptjs)
* [2 Responsiveness](#2-responsiveness)
* [3 Browsers](#3-browsers)
* [4 Lighthouse](#4-lighthouse)
* [5 Testing user stories](#5-testing-user-stories)
    * [5.1 Gamer’s user stories](#51-gamer’s-user-stories)
    * [5.2 Business’ user stories](#52-business’-user-stories)
    * [5.3 Developers’ user stories](#53-Developers’-user-stories)
* [6 Bugs](#5-bugs)
* [7 Updates](#7-Updates)




# 1 W3C Validation

The html and css pages were validated using [W3S](https://validator.w3.org/)

## 1.1 index.html

The validator highlighted minor spaceing errors and an unnecessary
 value entry. These were easily rectified.


![index html error validation](/assets/images-readme/html-error.png)


![index html validation](/assets/images-readme/html-pass.png)

[Back to top](#contents)

## 1.2 style.css

No errors found 

![css validation](/assets/images-readme/css-pass.png)

[Back to top](#contents)

## 1.3 script.js

[JSHint](https://jshint.com/) was used for testing the jarvaScript code.

The JSHint validator had minor errors. Missing semi-colons where added. It reports warnings on the let and const for hosting avalibility. script.jc passed JSHint with no major flaws.

[Back to top](#contents)

# 2 Responsiveness

The sites responsive design was tested using Google Crome and firefox devTools

|| Small Mobile | Med Mobile | Tablet | Laptop | Large Laptop | Desktop |
| --- | --- | --- | --- | --- | --- | --- | 
| site | Pass |Pass | Pass | Pass | Pass | Pass |
| images | Pass |Pass |Pass |Pass |Pass |Pass |
| audio | Pass | Pass | Pass | Pass | Pass | Pass |

[Back to top](#contents)

# 3 Browsers

The website was tested on the following browsers.

- Google Chrome
- Microsoft Edge
- Safari  
- Mozilla Firefox 

No issues were detected when rendering in these browsers.

# 4 Lighthouse

The results from the Google Lighthouse performance tests are as follows.

![lighthouse testing](/assets/images-readme/lighthouse.png)

Further investingation is required to improve the performance and accessability.

[Back to top](#contents)

# 5 Testing user stories

The user stories helped to identify the key information and nav, layout and colour scheme aspects of the website during the design process. The following review of these stories helps to highlight the value of the features.

## 5.1 Gamer’s user stories

As a user I want to …

1. Have easy access and a clear understanding of the game.
    - The game has a simple layout and an instuction button for how to play

2. Be able to record and review my scores and compare them against other users.
    - The score for the game add to the end message and to a scoreboard but does not keep score to compare with other games.

3. Have a difficultly level to better my gaming performance.
    - The are difficultly levels and you can move through these easily.
4. The game to be available on all devices so that the game can be played on the bus/train/waiting room etc.
    - The game renders well on mobile device so I can play when I am on the move.

5. Simple design that is easily readable and not overwhelming.
    - The game is simple and not overwhelming.

6. Clear and concise rules of the game.
    - The instructions are simple and concise. The instuction does remove the game when clicked and resets.

7. I don’t want a scrolling screen as this makes usability difficult and directly impacts the gaming performance.
    - The game does not scroll.

[Back to top](#contents)


### 5.2 Business’ user stories

As a business we want to…

1.	Have the brand logo clearly visible across the site.
    - The brand is repeated on the back side of all cards. They are clear and readable for the player.
2. 	Have access available for users to access social media platforms
    - Media access is avalible at the bottom of the page. Would have liked to see a line indicating the companies name above.
3.	Have a fun and interactive layout that encourages repeat users.
    - The site is bright and vibrant and easy to use and understand.
4.	Have access available on all devices.
    - the site meets this criteria.

[Back to top](#contents)

### 5.3 Developers’ user stories

As a web developer I want to…

1.	Provide a great interactive experience for the users.
    - The user stories suggest a well designed and simple site.
2.	Have a simple readable HTML, CSS and JavaScript files that are easily readable for  updates and fixes.
    - I think the code is readable. there are areas to tidy and prevent code in jarvaScript that is being repeated. This will be highlighted for updates.
3.	Provide a well written format for the descriptive functions of the game.
    - The insructions are clear and understandable. These have had a possitive review in user stories.
4.	Have good database indexes that enable the game to run as fast as possible.
    - The lighthouse test has indicated that further investigation
5.	Have a great site that complies with the W3C guidelines.
    - W3C and JShint has passed testing.
6.	Provide a great responsive site that is available across multiple devices and sizes.
    - This criteria has been test and completed

[Back to top](#contents)


# 6 Bugs

| Test number | Description | Expectation | Outcome | Pass/Fail | Comments |
| --- | --- | --- | --- | --- | --- |
| 1 | Favicon image | The image to replicate the cards in the game | The image is to small to read the text | Fail | need to simplify the image
| 2 | Favicon image | Simplified clear image | as expected | Pass | Test 1 
| 3 | Dropdown difficulty button | dropdown menu to list beneith the button | dropdown menu overlays button, is inline and looks untidy| Fail 
| 4 | Dropdown difficulty button | dropdown menu was adjusted to a grid menu and tidied using further css styling | as expected | Pass | Test 3
| 5 | dropdown difficulty button not removing show | difficulty dropdown to remove on click | block display onscreen | Fail 
| 6 | dropdown diffculty not removing show | add local variable to reference the div | as expected | pass | Test 5
| 7 | scoreboard | scoreboard to remove from screen when new game is selected | scoreboard remains and pushed down screen | fail |
| 8 | scoreboard | scoreboard remains and pushed down screen | toggled the display using an if statement | pass | Test 7

[Back to top](#contents)

# 7 Updates

- Score 
        - creating a database to keep score so players can compare scores
- Tidy js code 
        - prevent duplicated code and repeats.
- lighthouse
        - review accessabilty and preformance to improve the runtime of the game.

[Back to top](#contents)