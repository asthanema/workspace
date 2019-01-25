
var no = 0;

function bigLoop() {
    for (var i = 0; i < 1000000000; i++) {
        no = i;
    }
}

bigLoop();

postMessage(no); // Communicate with Main Thread