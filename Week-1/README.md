When the user enters the URL in the browser :
1) The browser looks up the IP Address for the domain via DNS
![image](https://user-images.githubusercontent.com/44059440/213633374-4d50f330-eb87-417c-a7e0-ee11c7dba3c2.png)

2) The browser sends a HTTP request to the server and establish the TCP connection
3) The server sends back a HTTP response

![image](https://user-images.githubusercontent.com/44059440/213633444-8c8ffbad-2d00-478a-b967-87ef2231e99d.png)

4) The browser construct and render the page.

![image](https://user-images.githubusercontent.com/44059440/213633515-4e10fdf8-ebf0-4620-b0c3-786a23ca5d86.png)

**High Level Components of Browser**
![image](https://user-images.githubusercontent.com/44059440/213633687-07ed6e91-e1a7-466f-8e1b-85edbc35298b.png)
**1. User Interface**:
The user interface is the space where User interacts with the browser. It includes the address bar, back and next buttons, home button, refresh and stop, bookmark option, etc. Every other part, except the window where requested web page is displayed, comes under it.

**2. Browser Engine**:
The browser engine works as a bridge between the User interface and the rendering engine. According to the inputs from various user interfaces, it queries and manipulates the rendering engine.

**3.Rendering Engine**:
The rendering engine is responsible for rendering the requested web page on the browser screen. The rendering engine interprets the HTML, XML documents and images that are formatted using CSS and generates the layout that is displayed in the User Interface. 

**4.Networking**:
Component of the browser which retrieves the URLs using the common internet protocols of HTTP or FTP. The networking component handles all aspects of Internet communication and security.

**5.Javascript Interpreter**:
It used to parse and execute the javascript code.The parsed results are sent to the rendering engine for display.

**6.UI Backend**:
Back-end helps to draw widgets like select box, input box and check box etc.

**7.Data Persistence**:
It is a small database created on the local drive of the computer where the browser is installed. It manages user data such as cache, cookies, bookmarks and preferences. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.


**Rendering Engine & its use**
![image](https://user-images.githubusercontent.com/44059440/213633759-e3dab07f-c20f-4006-8dd1-4f4404a2d360.png)
