## Line 119

In the first breakpoint, the html in the storyNode node is cleared. This happens every time the page is rendered, however on first load of the page it is redundant as the page is empty. This line of code is useful once the user begins navigating through the site as it will clear the data from prior pages. 

The screenshots within the directory `choicesNode/` show the html before and after this line of code is executed. The program behaves properly at this state, as the content is cleared as expected.

## Line 83

The second breakpoint occurs whenever the updateState method is called. This method updates the page's currentState variable with a given attribute id. This function is only called when a button on page is clicked, triggering a change of state. It's behaviour updates the currentState variable as expected. 

This state is a critical state, the program depends on this function to work properly, or else no content will be loaded to the page. The program does behave properly at this state. This function triggers a new render of the page, which updates all of the content on the page based upon user input.

The screenshots within the directory `updateState/` show the currentState variable before and after this line of code is executed.

## Line 122

The third breakpoint occurs when the story is appended to the storyNode element. This causes the content on the user's page to change, meaning it is a change in state. This function is called every time the user clicks a button to navigate through the site. The content is appended as expected, and the program behaves properly at this state.

The screenshots within the directory `appendChild/` show the html before and after this line of code is executed.