# QueryQuack
- Query Quack is a fast and performance oriented tool that mimics the functionality of an online SQL editor. 


![Homepage](https://ucarecdn.com/45f6a48f-e481-4ae2-804c-bab9029d88e4/-/quality/smart/-/format/auto/)
![QueryEditor](https://ucarecdn.com/32c9f4dc-1c54-42af-92a7-1589c30270df/-/quality/smart/-/format/auto/)

# Guide
![Guide](https://ucarecdn.com/e521d525-0e20-439b-aac8-429ff9335f26/-/quality/smart/-/format/auto/)

# Used Packages:
-  ## [Material-React-Table](https://www.material-react-table.com/)
    - Used to render table for the page

-  ## [CodeMirror](https://codemirror.net/)
    - Used to render Code Editor on the page

-   ## [React-Loader-Spinner](https://www.npmjs.com/package/react-loader-spinner)
    - Used to add Spinner animation for suspense rendering of code editor and table viewer

-   ## Other Packages
    - [CSV-TO-JSON](https://www.npmjs.com/package/csvtojson)
    - [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)


# Performance & Page Load Time:
- [**PageSpeedInsights Report**](https://pagespeed.web.dev/analysis/https-query-quack-vercel-app/z280b802cc?form_factor=desktop)

- Web Vital Report
    
    <a href="https://imgbb.com/"><img src="https://i.ibb.co/1XRLLNn/image.png" alt="image" border="0"></a>

- DevTools Network Tab Bottom bar Report
    - Home Page
    <a href="https://ibb.co/svC5XSN"><img src="https://i.ibb.co/jvzVjKQ/image.png" alt="image" border="0"></a>
    - Editor Page
    <a href="https://ibb.co/Hg7n0bY"><img src="https://i.ibb.co/3h1BwjW/image.png" alt="image" border="0"></a>


# Optimization Used to Improve the performance
- Used lazy Loading and suspense rendering on editor route for `CodeMirror` code editor & `Material-React-Table` table viewer component.
- Used `UploadCare` CDN provider to upload image on a CDN service and used `webp` format of images.   
- Images are also optimized by their required scale for different purpose like webpage title icon and logo (only `50x50px` image used). Example: `user_icon_URL`, `user_icon_URL` in `src\helpers\Constants.js`
- Overall reduced the timing of `LCP & FCP`
- Improved the CLS metric by making some minor changes of explicitly adding width and height of images to avoid layout shift problems


# Extra's
- Website is already optimized to load large amount of data in the table viewer