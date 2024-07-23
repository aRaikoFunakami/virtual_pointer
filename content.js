const pointer = document.createElement('div');
pointer.id = 'virtual-pointer';
pointer.style.position = 'fixed';
pointer.style.width = '24px'; // 幅を広げる
pointer.style.height = '24px'; // 高さを広げる
pointer.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // 赤色で半透明
pointer.style.borderRadius = '50%'; // 円形にする
pointer.style.zIndex = '1000';
document.body.appendChild(pointer);

const message = document.createElement('div');
message.id = 'message';
message.innerText = 'リンクがクリックされました';
message.style.position = 'fixed';
message.style.top = '50%';
message.style.left = '50%';
message.style.transform = 'translate(-50%, -50%)';
message.style.fontSize = '24px';
message.style.display = 'none';
message.style.backgroundColor = 'yellow'; // メッセージの背景色を追加
document.body.appendChild(message);

let links = [];
let currentTargetLink = null;
const originalStyles = new Map();

function updateLinks() {
  links = Array.from(document.querySelectorAll('a'));
  links.forEach(link => {
    if (!originalStyles.has(link)) {
      originalStyles.set(link, {
        border: link.style.border,
        backgroundColor: link.style.backgroundColor,
        zIndex: link.style.zIndex
      });
    }
  });
}

let pointerX = window.innerWidth / 2 - 12; // 初期位置を画面の中央に設定
let pointerY = window.innerHeight / 2 - 12; // 初期位置を画面の中央に設定

function movePointer(x, y) {
  pointerX = Math.max(0, Math.min(window.innerWidth - 24, pointerX + x));
  pointerY = Math.max(0, Math.min(window.innerHeight - 24, pointerY + y));
  pointer.style.left = pointerX + 'px';
  pointer.style.top = pointerY + 'px';
  highlightTargetLink(x, y);
}

function highlightTargetLink(moveX, moveY) {
  let closestLink = null;
  let minDistance = Infinity;

  links.forEach(link => {
    const rect = link.getBoundingClientRect();
    const linkX = rect.left + rect.width / 2;
    const linkY = rect.top + rect.height / 2;
    let distance;

    // バーチャルポインタがリンクの上にある場合、そのリンクを優先
    if (pointerX >= rect.left && pointerX <= rect.right && pointerY >= rect.top && pointerY <= rect.bottom) {
      closestLink = link;
      return;
    }

    if (moveX > 0 && pointerX < rect.left) {
      distance = Math.hypot(rect.left - pointerX, linkY - pointerY);
    } else if (moveX < 0 && pointerX > rect.right) {
      distance = Math.hypot(pointerX - rect.right, linkY - pointerY);
    } else if (moveY > 0 && pointerY < rect.top) {
      distance = Math.hypot(linkX - pointerX, rect.top - pointerY);
    } else if (moveY < 0 && pointerY > rect.bottom) {
      distance = Math.hypot(linkX - pointerX, pointerY - rect.bottom);
    }

    if (distance !== undefined && distance < minDistance) {
      minDistance = distance;
      closestLink = link;
    }
  });

  if (currentTargetLink && currentTargetLink !== closestLink) {
    // 元のスタイルに戻す
    const originalStyle = originalStyles.get(currentTargetLink);
    if (originalStyle) {
      currentTargetLink.style.border = originalStyle.border;
      currentTargetLink.style.backgroundColor = originalStyle.backgroundColor;
      currentTargetLink.style.zIndex = originalStyle.zIndex;
    }
  }

  if (closestLink) {
    closestLink.style.border = '2px solid red'; // ターゲットリンクの枠線を赤に
    closestLink.style.backgroundColor = 'yellow'; // ターゲットリンクの背景色を黄色に
    closestLink.style.zIndex = '1001'; // Ensure the highlighted link is at the front
    currentTargetLink = closestLink;
  } else {
    currentTargetLink = null;
  }
}

function moveToTargetLinkCenter() {
  const highlightedLink = links.find(link => link.style.borderColor === 'red');
  if (highlightedLink) {
    const rect = highlightedLink.getBoundingClientRect();
    pointerX = rect.left + rect.width / 2;
    pointerY = rect.top + rect.height / 2;
    pointer.style.left = pointerX + 'px';
    pointer.style.top = pointerY + 'px';
  }
}

function clickLink() {
  const highlightedLink = links.find(link => link.style.borderColor === 'red');
  if (highlightedLink) {
    message.style.display = 'block';
    setTimeout(() => {
      message.style.display = 'none';
    }, 2000);
    highlightedLink.click();
  }
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      movePointer(0, -10);
      break;
    case 'ArrowDown':
      movePointer(0, 10);
      break;
    case 'ArrowLeft':
      movePointer(-10, 0);
      break;
    case 'ArrowRight':
      movePointer(10, 0);
      break;
    case 'Enter':
      const highlightedLink = links.find(link => link.style.borderColor === 'red');
      if (highlightedLink) {
        const rect = highlightedLink.getBoundingClientRect();
        if (pointerX === rect.left + rect.width / 2 && pointerY === rect.top + rect.height / 2) {
          clickLink();
        } else {
          moveToTargetLinkCenter();
        }
      }
      break;
  }
});

// 初期位置にポインタを画面中央にセット
window.onload = () => {
  updateLinks();
  pointer.style.left = pointerX + 'px';
  pointer.style.top = pointerY + 'px';
  highlightTargetLink(0, 0);
};

// MutationObserverでリンクの変更を監視
const observer = new MutationObserver((mutationsList, observer) => {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList' || mutation.type === 'subtree') {
      updateLinks();
    }
  }
});

// オブザーバーの設定
observer.observe(document.body, {
  childList: true,
  subtree: true
});