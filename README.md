#README
This repository contains code for rendering menus, filtering menus, creating new menus, and deleting menus in a web application. The code is written in JavaScript and uses the Fetch API to retrieve data from a JSON file and interact with a local server running on http://localhost:3000.

##Getting started:
To run the application, you will need to have a local server running on http://localhost:3000 that serves JSON data for menus. You can use a tool like json-server to create a mock server for testing purposes.

Once you have the server set up, you can simply open the index.html file in your web browser to view the application.

###How to use:
When you first load the application, it will retrieve all the menus from the server and display them in a list. You can click on any menu item to view its details, including an image, title, price, and the number of orders left.

You can also use the search bar to filter the list of menus by title. Simply type in a search query and hit the search button to see a filtered list of menus.

If you want to add a new menu item,as an admin you can click on the "Create New Menu" button and fill out the form with the title, image URL, price, and order capacity. When you submit the form, the new menu item will be added to the server and the list of menus will be updated.

If you want to delete a menu item, click on the "Delete Menu" button and confirm the deletion. The menu item will be removed from the server and the list of menus will be updated.

Finally, you can click on the "Like" button to show your appreciation for a menu item. The number of likes will be displayed next to the button.

####Code structure:
The main logic of the application is contained in the renderMenus() function, which retrieves the list of menus from the server using the Fetch API and renders them in the HTML document. This function also sets up event listeners for filtering the list of menus, creating new menus, and deleting menus.

The renederSingleMenu() function is called when a user clicks on a menu item in the list and displays the details of the selected menu item.

The code for filtering the list of menus, creating new menus, and deleting menus is contained in event listeners that are set up in the renderMenus() function.

#####OVERVIEW
This is a simple web application that demonstrates how to use the Fetch API to retrieve data from a server and interact with it using JavaScript. It provides a basic framework for displaying, filtering, creating, and deleting items in a list, and can be easily adapted to fit a wide range of use cases.
