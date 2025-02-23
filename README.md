# QR Code Generator

A simple, lightweight web application that generates QR codes for URLs and Wi-Fi credentials. Built with HTML, CSS, and JavaScript using the `qrcode.js` library, this app allows users to create QR codes and download them as PNG images.

## Features

- **URL QR Codes**: Generate QR codes for any URL (automatically adds `https://` if omitted).
- **Wi-Fi QR Codes**: Create QR codes for Wi-Fi networks with customizable SSID, password, and security type (WPA, WEP, or no password).
- **Download Functionality**: Save generated QR codes as `qrcode.png` files.
- **Responsive Design**: Clean, centered layout that works on desktop and mobile devices.
- **Input Toggling**: Switch between URL and Wi-Fi input modes seamlessly.
- **Validation**: Basic checks to ensure required fields (e.g., URL or SSID) are filled.

## Screenshots

![QR Code Generator Interface](screenshots/interface.png)  
*Generate a QR code for a URL or Wi-Fi network and download it!*

## Prerequisites

To run this project locally, you need:
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A local web server (optional but recommended, e.g., Live Server in VS Code or `http-server` via Node.js).
- An internet connection (to load `qrcode.js` from CDN).

