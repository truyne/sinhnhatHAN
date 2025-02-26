// Thêm CSS cho phông chữ
const style = document.createElement('style');
style.innerHTML = `
    .contentLetter {
        font-family: 'Times New Roman', serif;
        font-size: 16px;
        color: #333;
    }
    .mainContent {
        font-family: 'Times New Roman', serif;
        font-size: 18px;
        color: #444;
    }
    .recieve {
        font-family: 'Times New Roman', serif;
        font-size: 16px;
        color: #555;
    }
`;
document.head.appendChild(style);

// Nội dung bức thư
const contentLetterSrart_actived = "Quà sinh nhật của MY nè mong MY nhận nhe."; // Lời mở đầu cho bức thư
const mainContentLetter = "Chúc MY một tuổi mới thật rực rỡ và ngày càng xinh đẹp. Tuổi 19 thành công và dần dần tiến tới mục tiêu của MY nha tiếp tục thực hiện mục tiêu hoàn thành đại học của mình.";

// Gắn ảnh vào thư
let imgStart = document.querySelector(".myAI");
imgStart.src = "./img/cute-young-boy-kid-wearing-vest-and-hat-free-png.png";

let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/b4bbdb54b7152338d7143cb444a77f09.png";

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

// Hiệu ứng gõ chữ phần mở đầu
document.querySelector(".sticker").addEventListener("click", function () {
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active");
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s");
                    }, 1000);
                }
            }, 50 * index);
        });
    }, 1000);
});

// Hiệu ứng gõ chữ phần nội dung thư
document.querySelector("#mess").addEventListener("change", function () {
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived");
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s");
                }
            }, 50 * index);
        });

    } else {
        document.querySelector(".content").classList.remove("actived");
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s");
        document.querySelector(".mainContent").innerHTML = "";
    }
});

// Hiệu ứng nhận thư
document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");

            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20);
            } else {
                createLight(40);
            }
        }, 500);
    }, 500);
});

// Hiệu ứng kim tuyến rơi
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"];

    for (var i = 0; i < count; i++) {
        var randomLeft = Math.floor(Math.random() * width);
        var randomTop = Math.floor(Math.random() * height / 2);
        var color = allDefaultColor[Math.floor(Math.random() * 5)];
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 5) + 15;
        var moveTime = Math.floor(Math.random() * 4) + 4;

        var div = document.createElement("div");
        div.classList.add("snow");
        div.style.position = "absolute";
        div.style.backgroundColor = color;
        div.style.borderRadius = Math.floor(Math.random() * 10 + 10) + "px";
        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px";
        div.style.marginTop = randomTop + "px";
        div.style.filter = "blur(" + blurLv[blur] + "px)";
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}
