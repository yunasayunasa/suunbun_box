document.getElementById('close').onclick = function() {
    document.getElementById('modal').style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
};

// 初期化時に宝箱を閉じた状態にする
window.onload = function() {
    const treasureBox = document.getElementById('treasure-box');
    treasureBox.classList.add('closed');
};

async function checkPassword() {
    const input = document.getElementById('password-input').value;
    const correctAnswer = "春分の日";
    
    if (input === correctAnswer) {
        const treasureBox = document.getElementById('treasure-box');
        treasureBox.classList.remove('closed');
        treasureBox.classList.add('open');
        
        document.getElementById('message').innerText = "宝箱が開いた！謎解明おめでとう！";
        document.getElementById('modal').style.display = "flex";
    } else {
        document.getElementById('message').innerText = "ガチャガチャ！開かない...";
    }
}