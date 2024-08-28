
function encrypt() {
    let inputText = document.getElementById("inputText").value;

    if (inputText === "") {
        return;
    }

    let encryptedText = inputText
        .replace(/a/g, "ai")    
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("resultText").value = encryptedText;
    document.getElementById("copyBtn").classList.add("show");

    toggleInitialContent();
    adjustContainerHeight();
    limpiarcaja();
}

function decrypt() {
    let inputText = document.getElementById("inputText").value;

    if (inputText === "") {
        return;
    }

    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("resultText").value = decryptedText;
    document.getElementById("copyBtn").classList.add("show");

    toggleInitialContent();
    adjustContainerHeight();
    limpiarcaja();
}

function copy() {
    let resultText = document.getElementById("resultText");
    resultText.select();
    document.execCommand("copy");
}

function toggleInitialContent() {
    var initialContent = document.querySelector('.result-initial');
    var resultText = document.getElementById('resultText').value.trim();

    if (resultText && resultText !== "No message found") {
        initialContent.style.opacity = '0';
        setTimeout(function() {
            initialContent.style.display = 'none';
        }, 300);
        
        document.getElementById('resultText').style.opacity = '1';
    } else {
        initialContent.style.display = 'flex';
        initialContent.style.opacity = '1';
    }
}
function limpiarcaja(){
    document.querySelector("#inputText").value="";
}


adjustContainerHeight();

