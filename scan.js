function openCameraToScan() {
    // Open the camera and scan the ID
    var scanner = new scanDocument.Scanner({
        video: document.getElementById('preview')
    });
    scanner.addListener('scan', function(content) {
        // Extract the data from the scanned ID
        var data = extractData(content);
        // Display the extracted data on the page
        document.getElementById('data').innerHTML = data;
    });
    scanDocument.Camera.getCameras().then(function(cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error('No cameras found.');
        }
    }).catch(function(e) {
        console.error(e);
    });
}

function extractData(content) {
    // Use c++ code to extract the data from the scanned ID
    var extractedData = extractDataCPP(content);
    // Return the extracted data as a string
    return extractedData;
}