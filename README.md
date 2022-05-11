# Image Processing API

## Overview

This is an API that can be used in two different ways. The first, as a simple placeholder API that allows us to place images into our frontend with the size set via url parameters. The second use case is as a library to serve properly scaled versions of our images to the frontend to reduce page load size.

## Scripts

- Install: `npm install`
- Build: `npm run build`
- Lint: `npm run lint`
- Prettify: `npm run prettify`
- Run unit tests: `npm run test`
- Start server: `npm run start`

## Endpoint

### Main route

http://localhost:3000/api

This endpoint will shows the query arguments for resizing an image and available image name.

### Resize image

http://localhost:3000/api/images?filename=fjord&width=200&height=200 

Will scale the fjord image to 200 by 200 pixels and store the resulting image. 

On subsequent calls will serve the resized image instead of resizing the original again.

### Miss argument error

http://localhost:3000/api/images?filename=fjord&width=200 

Missing height argument will lead to missing input error.

### Invalid argument error

http://localhost:3000/api/images?filename=fjord&width=-200&height=200 

The invalid input will lead to invalid argument error.

## Notes

- Images are served from `assets/full`. Further images can be put into that directory.
- Image thumbs will be stored in `assets/thumb` and can be deleted from there to verify that in that case they will be re-created on subsequent calls to the same endpoint.

