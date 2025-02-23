let qrDataURL = ""; // Store the QR code image data URL globally

function toggleInputs() {
    const type = document.getElementById("type").value;
    const urlInput = document.getElementById("url-input");
    const wifiInput = document.getElementById("wifi-input");

    urlInput.style.display = type === "url" ? "block" : "none";
    wifiInput.style.display = type === "wifi" ? "block" : "none";
}

function generateQR() {
    const type = document.getElementById("type").value;
    const qrCodeDiv = document.getElementById("qr-code");
    const downloadBtn = document.getElementById("download-btn");
    let qrText = "";

    // Clear previous QR code
    qrCodeDiv.innerHTML = "";

    if (type === "url") {
        const urlText = document.getElementById("url-text").value.trim();
        if (!urlText) {
            qrCodeDiv.innerHTML = "Please enter a URL.";
            downloadBtn.style.display = "none";
            return;
        }
        // Basic URL validation
        if (!urlText.match(/^https?:\/\//)) {
            qrText = "https://" + urlText; // Add https:// if missing
        } else {
            qrText = urlText;
        }
    } else if (type === "wifi") {
        const ssid = document.getElementById("wifi-ssid").value.trim();
        const password = document.getElementById("wifi-password").value;
        const security = document.getElementById("wifi-security").value;

        if (!ssid) {
            qrCodeDiv.innerHTML = "Please enter a Wi-Fi name (SSID).";
            downloadBtn.style.display = "none";
            return;
        }

        // Format: WIFI:T:security;S:ssid;P:password;;
        qrText = `WIFI:T:${security};S:${ssid};P:${password};;`;
    }

    // Generate QR code
    QRCode.toDataURL(qrText, { width: 200, margin: 1 }, function (error, url) {
        if (error) {
            console.error(error);
            qrCodeDiv.innerHTML = "Error generating QR code.";
            return;
        }
        const img = document.createElement("img");
        img.src = url;
        qrCodeDiv.appendChild(img);

        // Store data URL and show download button
        qrDataURL = url;
        downloadBtn.style.display = "block";
    });
}

function downloadQR() {
    if (qrDataURL) {
        const link = document.createElement("a");
        link.href = qrDataURL;
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Initialize input visibility on page load
toggleInputs();