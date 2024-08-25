function sendMessage() {
  const input = document.getElementById('messageInput');
  const message = input.value;
  input.value = ''; // 입력 필드 초기화

  // 메시지를 채팅 컨테이너에 추가
  const messageContainer = document.querySelector('.chat-container');
  const newMessage = document.createElement('div');
  newMessage.classList.add('message', 'sent');
  newMessage.textContent = message;
  messageContainer.appendChild(newMessage);

  // 심심이 API 호출
  fetch('https://api.simsimi.net/v2/?text=.WUd1c_EuIhnfUig~LrvUOQ_XIFDB3-MI6SzpbQE' + encodeURIComponent(message) + '&lc=ko')
    .then(response => response.json())
    .then(data => {
      const replyMessage = document.createElement('div');
      replyMessage.classList.add('message', 'received');
      replyMessage.textContent = data.message;
      messageContainer.appendChild(replyMessage);
    });
    }
