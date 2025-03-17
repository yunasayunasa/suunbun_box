document.getElementById('close').onclick = function() {
    document.getElementById('modal').style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
};

function checkPassword() {
    const input = document.getElementById('password-input').value;
    const hashedPassword = '0d1c9d1464e6e19b9b1b9b1b1b9b1b9b1b';
    
    if (sha256(input) === hashedPassword) {
        document.getElementById('message').innerText = "宝箱が開いた！謎解明おめでとう！";
        document.getElementById('modal').style.display = "flex";
    } else {
        document.getElementById('message').innerText = "ガチャガチャ！開かない...";
    }
}

function sha256(message) {
    // SHA-256 hashing function
    const msgBuffer = new TextEncoder().encode(message);
    return crypto.subtle.digest('SHA-256', msgBuffer).then(hashBuffer => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    });
}